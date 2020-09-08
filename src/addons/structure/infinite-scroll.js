import { Xt } from 'xtend-library'
import JSON5 from 'json5'

/**
 * InfiniteScroll
 */
class InfiniteScroll {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.object = object
    self.optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    Xt.destroyAndInit(self)
  }

  //
  // init
  //

  /**
   * init
   */
  init() {
    const self = this
    // options
    self.options = Xt.merge([self.constructor.optionsDefault, self.optionsCustom])
    // vars
    self.current = self.options.min
    self.classes = self.options.class ? [...self.options.class.split(' ')] : []
    self.classesNoMore = self.options.classNoMore ? [...self.options.classNoMore.split(' ')] : []
    self.classesReset = self.options.classReset ? [...self.options.classReset.split(' ')] : []
    // elements
    self.scrollElement = self.object.querySelector(self.options.elements.scroll)
    self.triggerElement = self.object.querySelector(self.options.elements.trigger)
    self.resetElement = self.object.querySelector(self.options.elements.reset)
    self.itemsElement = self.object.querySelector(self.options.elements.items)
    // unload
    const unloadHandler = Xt.dataStorage.put(window, 'on.xt.unload' + '/' + self.namespace, self.eventUnloadHandler.bind(self))
    addEventListener('unload', unloadHandler)
    // scroll
    const scrollHandler = Xt.dataStorage.put(window, 'on.xt.scroll' + '/' + self.namespace, self.eventScrollHandler.bind(self))
    addEventListener('scroll', scrollHandler)
    // setCurrent
    self.setCurrent()
    if (self.itemsElement) {
      const found = self.itemsElement.querySelector(self.options.elements.item)
      if (found) {
        found.setAttribute('data-xt-infinitescroll-item-first', self.current)
      }
    }
    // resume state
    const state = history.state
    if (state && state.scrollResume) {
      document.scrollingElement.scrollTop = state.scrollResume
      // debug
      if (Xt.debug === true) {
        console.debug('Xt.debug: xt-infinitescroll scrollResume', state.scrollResume)
      }
    }
    // paginate
    self.paginate()
    // class
    if (self.current > self.options.min) {
      self.object.classList.add(...self.classesReset)
    }
    // trigger
    if (self.options.events.trigger) {
      self.triggerElement.addEventListener(self.options.events.trigger, self.eventTrigger.bind(self))
    }
    // reset
    if (self.options.events.reset) {
      self.resetElement.addEventListener(self.options.events.reset, self.eventReset.bind(self))
    }
    // initialized class
    self.object.classList.add(self.componentName)
    // @FIX raf because after .xt custom listeners
    requestAnimationFrame(() => {
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent('init.xt'))
    })
  }

  //
  // handler
  //

  /**
   * unload handler
   */
  eventUnloadHandler() {
    const self = this
    self.eventUnload()
  }

  /**
   * scroll handler
   * @param {Event} e
   */
  eventScrollHandler(e = null) {
    const self = this
    Xt.eventDelay(
      e,
      self.object,
      () => {
        // handler
        self.eventScroll(e)
      },
      self.componentNamespace + 'Scroll'
    )
  }

  //
  // methods
  //

  /**
   * trigger
   */
  eventTrigger() {
    const self = this
    // request
    self.request()
  }

  /**
   * reset
   */
  eventReset() {
    const self = this
    const options = self.options
    // request
    self.setCurrent(options.min)
    window.location = self.url.href
  }

  /**
   * unload
   */
  eventUnload() {
    const self = this
    const options = self.options
    // save scroll position
    if (self.scrollResume && self.current !== options.min) {
      history.replaceState({ scrollResume: self.scrollResume }, '', self.url.href)
      document.scrollingElement.scrollTop = 0
    }
  }

  /**
   * scroll
   */
  eventScroll() {
    const self = this
    // not if requesting
    if (!self.object.classList.contains(self.classes[0])) {
      // scroll
      const top = document.scrollingElement.scrollTop
      const height = window.innerHeight
      // current page
      let found = self.itemsElement.querySelector(self.options.elements.item)
      const scrollInitial = found.offsetTop
      const items = self.itemsElement.querySelectorAll('[data-xt-infinitescroll-item-first]')
      for (const item of items) {
        const itemTop = item.offsetTop
        if (top > itemTop - height) {
          found = item
        }
      }
      self.setCurrent(parseFloat(found.getAttribute('data-xt-infinitescroll-item-first')))
      // save scroll position
      self.scrollResume = top + scrollInitial - found.offsetTop
      // replace state
      const linkOrigin = self.url.origin || self.url.protocol + '//' + self.url.host
      if (linkOrigin === location.origin) {
        if (self.url.href !== location.href) {
          history.replaceState(null, '', self.url.href)
          if (Xt.debug === true) {
            console.debug('Xt.debug: xt-infinitescroll history replace', self.url.href)
          }
        }
      } else {
        if (Xt.debug === true) {
          console.error('Xt.debug: xt-infinitescroll cannot set history with different origin', linkOrigin)
        }
      }
      // request if on bottom
      if (self.options.events.scroll) {
        const bottom = self.scrollElement.offsetTop + self.scrollElement.offsetHeight
        if (top > bottom - height) {
          self.request()
        }
      }
    }
  }

  /**
   * request
   */
  request() {
    const self = this
    const options = self.options
    // not if requesting
    if (!self.object.classList.contains(self.classes[0])) {
      // current
      if (self.current < options.max) {
        self.current = self.current > options.max ? options.max : self.current
        // class
        self.object.classList.add(...self.classes)
        // params
        self.setCurrentNext()
        // request
        const request = new XMLHttpRequest()
        request.open('GET', self.url.href, true)
        request.onload = () => {
          // debug
          if (Xt.debug === true) {
            console.debug('Xt.debug: xt-infinitescroll request success', request, self.url)
          }
          // response
          self.response(request)
        }
        request.onerror = () => {
          // debug
          if (Xt.debug === true) {
            console.debug('Xt.debug: xt-infinitescroll request failed', request)
          }
          // response
          self.response(request)
        }
        request.send()
      }
    }
  }

  /**
   * response
   * @param {XMLHttpRequest|Object} request Html response
   */
  response(request) {
    const self = this
    // request
    if (request.status >= 200 && request.status <= 300) {
      self.success(request)
    } else {
      self.error(request)
    }
  }

  /**
   * success
   * @param {XMLHttpRequest|Object} request Html response
   */
  success(request) {
    const self = this
    // set substitute
    const html = document.createElement('html')
    html.innerHTML = request.responseText.trim()
    const items = html.querySelector(self.options.elements.items)
    if (items) {
      self.populate(items)
    } else {
      // fake
      setTimeout(() => {
        self.populate(self.object.querySelector(self.options.elements.items).cloneNode(true))
      }, 1000)
    }
  }

  /**
   * error
   */
  error() {
    const self = this
    // class
    self.object.classList.remove(...self.classes)
  }

  /**
   * populate
   * @param {Node|HTMLElement|EventTarget|Window} items Items to add
   */
  populate(items) {
    const self = this
    // current page
    const found = items.querySelector(self.options.elements.item)
    found.setAttribute('data-xt-infinitescroll-item-first', self.current)
    // populate dom
    for (const item of items.querySelectorAll(':scope > *')) {
      self.itemsElement.querySelector(':scope > *:last-child').after(item)
    }
    // class
    self.object.classList.remove(...self.classes)
    // paginate
    self.paginate()
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('replace.xt.infinitescroll'))
  }

  /**
   * paginate
   */
  paginate() {
    const self = this
    const options = self.options
    // paginate
    for (const el of self.object.querySelectorAll('[data-xt-infinite-scroll-tot]')) {
      el.innerHTML = options.max
    }
    for (const el of self.object.querySelectorAll('[data-xt-infinite-scroll-num]')) {
      el.innerHTML = self.current
    }
    // class
    if (self.current >= options.max) {
      self.object.classList.add(...self.classesNoMore)
    }
  }

  //
  // util
  //

  /**
   * setCurrent
   * @param {Number} page Page number to set
   */
  setCurrent(page = null) {
    const self = this
    const options = self.options
    // check url
    const url = new URL(location.href)
    const searchParams = new URLSearchParams(url.search)
    // set current
    const get = searchParams.get(options.get)
    self.current = page !== null ? page : get ? parseFloat(get) : self.current
    searchParams.set(options.get, self.current)
    // set url
    url.search = searchParams.toString()
    self.url = url
  }

  /**
   * setCurrentNext
   */
  setCurrentNext() {
    const self = this
    const options = self.options
    // check url
    const url = new URL(location.href)
    const searchParams = new URLSearchParams(url.search)
    // set current
    const get = searchParams.get(options.get)
    self.current = get ? parseFloat(get) + options.add : self.current + options.add
    searchParams.set(options.get, self.current)
    // set url
    url.search = searchParams.toString()
    self.url = url
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    // class
    removeEventListener('unload', self.eventUnloadHandler.bind(self))
    removeEventListener('scroll', self.eventScrollHandler.bind(self))
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('destroy.xt'))
  }

  //
}

//
// options
//

InfiniteScroll.componentName = 'xt-infinite-scroll'
InfiniteScroll.optionsDefault = {
  // infiniteScroll
  get: 'page',
  // element
  elements: {
    scroll: '[data-xt-infinite-scroll-scroll]',
    trigger: '[data-xt-infinite-scroll-trigger]',
    reset: '[data-xt-infinitescroll-reset]',
    items: '[data-xt-infinite-scroll-items]',
    item: ':scope > *',
  },
  // class
  class: 'infinite-scroll-loading',
  classNoMore: 'infinite-scroll-nomore',
  classReset: 'infinite-scroll-reset',
  // quantity
  min: 1,
  max: 'Infinity',
  add: 1,
  // event
  events: {
    scroll: true,
    trigger: 'click',
    reset: 'click',
  },
}

//
// export
//

Xt.InfiniteScroll = InfiniteScroll

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.InfiniteScroll.componentName + ']',
  mount: (object) => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.InfiniteScroll.componentName)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.InfiniteScroll(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
