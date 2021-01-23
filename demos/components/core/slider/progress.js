import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'
import 'xtendui/src/addons/mousefollow'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--slider-progress',
  mount: ({ object }) => {
    // vars

    const spinnerTime = 0.25
    const spinnerEase = 'linear'
    const fillerTime = 0.25
    const fillerEase = 'linear'

    // init

    let self = new Xt.Slider(object, {
      auto: {
        time: 4000,
      },
    })

    // start auto

    const eventAutostart = () => {
      // slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      const timeline = gsap.timeline({ overwrite: false })
      gsap.killTweensOf(spinner)
      timeline.to(spinner, {
        strokeDashoffset: 628,
        duration: spinnerTime,
        ease: spinnerEase,
        autoRound: false,
      })
      timeline.to(spinner, {
        strokeDashoffset: 0,
        duration: self.options.auto.time / 1000 - spinnerTime,
        ease: spinnerEase,
        autoRound: false,
      })
      // elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.set(filler, { height: 0, top: '100%' })
          gsap.to(filler, {
            height: '100%',
            top: 0,
            duration: self.options.auto.time / 1000,
            ease: fillerEase,
          })
        }
      }
      // targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.set(filler, { width: 0, left: 0 })
          gsap.to(filler, {
            width: '100%',
            left: 0,
            duration: self.options.auto.time / 1000,
            ease: fillerEase,
          })
        }
      }
    }

    self.object.addEventListener('autostart.xt.slider', eventAutostart)

    // stop auto

    const eventAutostop = () => {
      // elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.to(filler, {
            height: 0,
            top: 0,
            duration: fillerTime,
            ease: fillerEase,
          })
        }
      }
      // targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.to(filler, {
            width: 0,
            left: '100%',
            duration: fillerTime,
            ease: fillerEase,
          })
        }
      }
    }

    self.object.addEventListener('autostop.xt.slider', eventAutostop)

    // pause auto

    const eventAutopause = () => {
      // slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      gsap.killTweensOf(spinner)
      gsap.to(spinner, {
        strokeDashoffset: 628,
        duration: spinnerTime,
        ease: spinnerEase,
        autoRound: false,
      })
      // elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.to(filler, {
            height: 0,
            top: '100%',
            duration: fillerTime,
            ease: fillerEase,
          })
        }
      }
      // targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.to(filler, {
            width: 0,
            left: 0,
            duration: fillerTime,
            ease: fillerEase,
          })
        }
      }
    }

    self.object.addEventListener('autopause.xt.slider', eventAutopause)

    // mousefollow

    let mouseFollow = new Xt.Mousefollow(object, {
      targets: ':scope > .loader',
    })

    // unmount

    return () => {
      self.destroy()
      self = null
      mouseFollow.destroy()
      mouseFollow = null
    }
  },
})
