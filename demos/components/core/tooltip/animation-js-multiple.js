import { Xt } from 'xtendui'
import 'xtendui/src/core/tooltip'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--tooltip-animation-js-multiple',
  mount: object => {
    // vars

    const targetTimeOn = 0.3
    const targetEaseOn = 'quint.out'
    const targetTimeOff = 0.3
    const targetEaseOff = 'quint.out'

    // init

    let self = new Xt.Tooltip(object, {
      elements: ':scope > a, :scope > button',
      targets: ':scope > .tooltip',
      duration: 500,
    })

    // on

    const eventOn = e => {
      const tr = e.target
      gsap.set(tr, { opacity: 0 })
      if (!tr.classList.contains('inverse')) {
        gsap.set(tr, { x: -15 })
      } else {
        gsap.set(tr, { x: 15 })
      }
      gsap.to(tr, { x: 0, opacity: 1, duration: targetTimeOn, ease: targetEaseOn })
    }

    for (const target of self.targets) {
      target.addEventListener('on.xt.tooltip', eventOn)
    }

    // off

    const eventOff = e => {
      const tr = e.target
      if (!tr.classList.contains('inverse')) {
        gsap.to(tr, { x: 15, opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
      } else {
        gsap.to(tr, { x: -15, opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
      }
    }

    for (const target of self.targets) {
      target.addEventListener('off.xt.tooltip', eventOff)
    }

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
