import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--scrollto-overlay',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })
    const unmountScrollto = mountScrollto()
    const unmountSwitcher = mountSwitcher({ ref })

    // unmount

    return () => {
      unmountSticky()
      unmountScrollto()
      unmountSwitcher()
    }
  },
})

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const overlay = ref.querySelector('.xt-overlay')

  // sticky

  ScrollTrigger.create({
    trigger: overlay.querySelector('.xt-sticky'),
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  overlay.addEventListener('on.xt.overlay', () => {
    ScrollTrigger.refresh()
  })

  // unmount

  return () => {}
}

/* mountScrollto */

const mountScrollto = () => {
  // Scrollto

  let self = new Xt.Scrollto(document.documentElement, {
    space: ({ self }) => {
      let space = 0
      for (const el of self.scroller.querySelectorAll('.xt-sticky[style*="position: fixed"]')) {
        space += el.clientHeight
      }
      return space
    },
    duration: ({ self }) => {
      const dist = Math.abs(self.scroller.scrollTop - self.position)
      return self.initial || self.hashchange ? 0 : Math.max(Math.min(dist / 500, 1), 0.5)
    },
    // deactivated by switcher
    class: false,
    scrollActivation: false,
  })

  // scrollto

  const scrollto = () => {
    // scroll
    const overlay = self.target.closest('.xt-overlay')
    gsap.killTweensOf(self.scroller)
    gsap.to(self.scroller, {
      scrollTo: self.position,
      duration: overlay && !overlay.classList.contains('in') ? 0 : self.duration, // instant if inside overlay and initial activation
      ease: 'quart.inOut',
    })
  }

  self.object.addEventListener('scrollto.xt.scrollto', scrollto)

  // custom

  const buttons = self.object.querySelectorAll('.button--custom')
  const custom = self.object.querySelector('#custom')

  const click = () => {
    custom.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
  }

  for (const button of buttons) {
    button.addEventListener('click', click)
  }

  // unmount

  return () => {
    self.object.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  // vars

  const scrollto = document.documentElement
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get('xt-scrollto', scrollto)
    if (self) {
      if (switcher.checked) {
        self.options.class = false
        self.options.scrollActivation = false
      } else {
        self.options.class = 'on'
        self.options.scrollActivation = true
      }
      self.destroy()
      self.reinit()
    }
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}
