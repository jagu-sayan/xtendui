import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo_slider-events',
  mount: function(object) {
    // init

    let self = new Xt.Slider(object, {
      align: 'center',
    })

    // log

    let logTimeout
    const log = document.querySelector('#demo_slider-events-log')

    const logAdd = function(text) {
      log.innerHTML += text + '<br/>'
      // scroll
      log.scrollTo(0, log.scrollHeight)
      // hr
      clearTimeout(logTimeout)
      logTimeout = setTimeout(function() {
        log.innerHTML += '<hr/>'
      }, 1000)
    }

    // first element

    const firstEl = document.querySelector('#demo_slider-events-first-element')

    const firstElFnc = function() {
      logAdd('<strong>1st element</strong>')
      object.querySelector('button').dispatchEvent(new CustomEvent('on.xt'))
    }

    firstEl.addEventListener('click', firstElFnc)

    // first target

    const firstTr = document.querySelector('#demo_slider-events-first-target')

    const firstTrFnc = function() {
      logAdd('<strong>1st target</strong>')
      object.querySelector('.slide').dispatchEvent(new CustomEvent('on.xt'))
    }

    firstTr.addEventListener('click', firstTrFnc)

    // add

    const addBtn = document.querySelector('#demo_slider-events-add')

    const addFnc = function() {
      logAdd('<strong>add</strong>')
      // target
      const trIndex = self.targets.length + 1
      const tr = `
      <li class="slide col-12">
        <div class="slide-inner">

          <div class="card card-slide align-center">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">${trIndex}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>`
      self.targets[self.targets.length - 1].after(Xt.createElement(tr))
      // reinit
      reinitFnc()
    }

    addBtn.addEventListener('click', addFnc)

    // remove

    const removeBtn = document.querySelector('#demo_slider-events-remove')

    const removeFnc = function() {
      logAdd('<strong>remove</strong>')
      // element
      self.elements[self.elements.length - 1].remove()
      // element
      self.targets[self.targets.length - 1].remove()
      // reinit
      reinitFnc()
    }

    removeBtn.addEventListener('click', removeFnc)

    // reinit

    const reinitBtn = document.querySelector('#demo_slider-events-reinit')

    const reinitFnc = function() {
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }

    reinitBtn.addEventListener('click', reinitFnc)

    // restart

    const restartBtn = document.querySelector('#demo_slider-events-restart')

    const restartFnc = function() {
      logAdd('<strong>restart</strong>')
      self.restart()
    }

    restartBtn.addEventListener('click', restartFnc)

    // destroy

    const destroyBtn = document.querySelector('#demo_slider-events-destroy')

    const destroyFnc = function() {
      logAdd('<strong>destroy</strong>')
      self.destroy()
    }

    destroyBtn.addEventListener('click', destroyFnc)

    // unmount

    const unmountBtn = document.querySelector('#demo_slider-events-unmount')

    const unmountFnc = function() {
      logAdd('<strong>unmount</strong>')
      unmount()
    }

    unmountBtn.addEventListener('click', unmountFnc)

    // events

    const events = function(e) {
      let str = 'event <strong>' + e.type + '</strong>'
      if (e.target.getAttribute('title')) {
        str += ' from <strong>' + e.target.getAttribute('title') + '</strong>'
      } else if (e.target.querySelector('.card-title')) {
        str += ' from <strong>' + e.target.querySelector('.card-title').innerHTML + '</strong>'
      } else if (!e.target.querySelector('*')) {
        str += ' from <strong>' + e.target.innerHTML + '</strong>'
      }
      logAdd(str)
    }

    object.addEventListener('init.xt', events)
    object.addEventListener('destroy.xt', events)
    object.addEventListener('on.xt', events)
    object.addEventListener('off.xt', events)

    // unmount

    const unmount = function unmount() {
      firstEl.removeEventListener('click', firstElFnc)
      firstTr.removeEventListener('click', firstTrFnc)
      addBtn.removeEventListener('click', addFnc)
      removeBtn.removeEventListener('click', removeFnc)
      reinitBtn.removeEventListener('click', reinitFnc)
      restartBtn.removeEventListener('click', restartFnc)
      destroyBtn.removeEventListener('click', destroyFnc)
      unmountBtn.removeEventListener('click', unmountFnc)
      object.removeEventListener('init.xt', events)
      object.removeEventListener('destroy.xt', events)
      object.removeEventListener('on.xt', events)
      object.removeEventListener('off.xt', events)
      self.destroy()
      self = null
    }
    return unmount
  },
})
