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
    const unmountScrollto = mountScrollto()
    const unmountSticky = mountSticky({ ref })
    const unmountSwitcher = mountSwitcher({ ref })

    // unmount

    return () => {
      unmountScrollto()
      unmountSticky()
      unmountSwitcher()
    }
  },
})

/* mountScrollto */

const mountScrollto = () => {
  // Scrollto

  let self = new Xt.Scrollto(document.documentElement, {
    // activated by switcher
    //class: false,
    //scrollActivation: false,
    scrollSpace: ({ self }) => {
      let space = 0
      const spaceEls = self.scroll.querySelectorAll('.xt-sticky[style*="position: fixed"]')
      for (const spaceEl of spaceEls) {
        space += spaceEl.clientHeight
      }
      return space
    },
  })

  // scrollto

  const scrollto = () => {
    // scroll
    const overlay = self.target.closest('.xt-overlay')
    const duration = overlay && !overlay.classList.contains('in') ? 0 : 1 // instant if inside overlay and initial activation
    gsap.killTweensOf(self.scroll)
    gsap.to(self.scroll, {
      scrollTo: self.position,
      duration: duration,
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
