import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-api',
  mount: ({ ref }) => {
    const unmountEventmethods = mountEventmethods({ ref })

    // unmount

    return () => {
      unmountEventmethods()
    }
  },
})

/* mountEventmethods */

const mountEventmethods = ({ ref }) => {
  // vars

  const slider = ref.querySelector('#slider--eventmethods')

  // vars

  const dragTime = 1
  const dragEase = 'quint.out'

  // init

  let self = new Xt.Slider(slider, {
    auto: {
      time: 4000,
      initial: false,
    },
    group: 1,
    wrap: true,
    matches: {
      '(min-width: 768px)': {
        group: 0.8,
      },
    },
  })

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
      ease: dragEase,
    })
    // dragger tween with main time and ease
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // log

  const log = document.querySelector('#card--slider-api-log')

  const logAdd = text => {
    log.innerHTML += `${text}<br/>`
    // scroll
    log.scrollTo(0, log.scrollHeight)
    // hr
    clearTimeout(window.logTimeout)
    window.logTimeout = setTimeout(() => {
      log.innerHTML += '<hr class="my-4 border-gray-500"/>'
    }, 1000)
  }

  // on first element

  const firstEl = document.querySelector('#button--slider-api-first-element')

  const firstElFnc = () => {
    logAdd('<strong>1st element</strong>')
    const elements = self.elements
    elements[0].dispatchEvent(new CustomEvent('on.trigger.xt.slider'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // on first target

  const firstTr = document.querySelector('#button--slider-api-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>1st target</strong>')
    const targets = self.targets
    targets[0].dispatchEvent(new CustomEvent('on.trigger.xt.slider'))
  }

  firstTr.addEventListener('click', firstTrFnc)

  // autostart

  const autostartEl = document.querySelector('#button--toggle-events-autostart')

  const autstartFnc = () => {
    logAdd('<strong>autostart</strong>')
    self.object.dispatchEvent(new CustomEvent('autostart.trigger.xt.slider'))
  }

  autostartEl.addEventListener('click', autstartFnc)

  // autostop

  const autostopEl = document.querySelector('#button--toggle-events-autostop')

  const autostopFnc = () => {
    logAdd('<strong>autostop</strong>')
    self.object.dispatchEvent(new CustomEvent('autostop.trigger.xt.slider'))
  }

  autostopEl.addEventListener('click', autostopFnc)

  // add

  const addBtn = document.querySelector('#button--slider-api-add')

  const addFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>add</strong>')
      // targets
      const targets = self.targets
      const indexTr = targets.length + 1
      const strTr = `
      <div class="xt-slide w-6/12 sm:w-4/12">
        <div class="xt-card rounded-md text-base p-8 text-center text-black bg-gray-200">
          <div class="xt-h4">${indexTr}</div>
        </div>
      </div>
      `
      document.querySelector('#slider--eventmethods-targets').append(Xt.createElement(strTr))
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  addBtn.addEventListener('click', addFnc)

  // remove

  const removeBtn = document.querySelector('#button--slider-api-remove')

  const removeFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>remove</strong>')
      // elements
      const elements = self.elements
      elements[elements.length - 1].remove()
      // targets
      const targets = self.targets
      targets[targets.length - 1].remove()
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  removeBtn.addEventListener('click', removeFnc)

  // reinit

  const reinitBtn = document.querySelector('#button--slider-api-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>reinit</strong>')
      self.reinit()
      // keep the same level of raf as init
      requestAnimationFrame(() => {
        // restart
        logAdd('<strong>restart</strong>')
        self.restart()
      })
    }, 200).toString()
  }

  reinitBtn.addEventListener('click', reinitFnc)

  // restart

  const restartBtn = document.querySelector('#button--slider-api-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // destroy

  const destroyBtn = document.querySelector('#button--slider-api-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = document.querySelector('#button--slider-api-unmount')

  const unmountFnc = () => {
    logAdd('<strong>unmount</strong>')
    unmount()
  }

  unmountBtn.addEventListener('click', unmountFnc)

  // events

  const events = e => {
    let str = `event <strong>${e.type}</strong>` + ` direction <strong>${self.direction}</strong>`
    if (self.elements.includes(e.target)) {
      str += ` type <strong>element</strong>`
    } else if (self.targets.includes(e.target)) {
      str += ` type <strong>target</strong>`
    }
    let selector
    if (e.target.getAttribute('title')) {
      selector = e.target.getAttribute('title')
    } else if (e.target.querySelector(':scope > .xt-button')) {
      selector = e.target.querySelector(':scope > .xt-button').textContent
    } else if (e.target.querySelector('.xt-card > *')) {
      selector = e.target.querySelector('.xt-card > *').textContent
    } else if (e.target.querySelector(':scope > *')) {
      selector = e.target.querySelector(':scope > *').textContent
    } else if (!e.target.querySelector('*')) {
      selector = e.target.innerHTML
    }
    if (selector) {
      selector = selector
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/\//g, '&#x2F;')
      str += ` from <strong>${selector}</strong>`
    }
    logAdd(str)
  }

  slider.addEventListener('init.xt.slider', events)
  slider.addEventListener('destroy.xt.slider', events)
  document.addEventListener('on.xt.slider', events, true)
  document.addEventListener('off.xt.slider', events, true)

  // unmount

  const unmount = () => {
    firstEl.removeEventListener('click', firstElFnc)
    firstTr.removeEventListener('click', firstTrFnc)
    addBtn.removeEventListener('click', addFnc)
    removeBtn.removeEventListener('click', removeFnc)
    reinitBtn.removeEventListener('click', reinitFnc)
    restartBtn.removeEventListener('click', restartFnc)
    destroyBtn.removeEventListener('click', destroyFnc)
    unmountBtn.removeEventListener('click', unmountFnc)
    slider.removeEventListener('init.xt.slider', events)
    slider.removeEventListener('destroy.xt.slider', events)
    document.removeEventListener('on.xt.slider', events, true)
    document.removeEventListener('off.xt.slider', events, true)
    self.destroy()
    self = null
  }
  return unmount
}
