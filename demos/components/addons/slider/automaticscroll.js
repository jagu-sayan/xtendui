import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'
import gsap from 'gsap'

/**
 * slider
 */

Xt.mount.push({
  matches: '.demo--slider-automaticscroll .slider',
  mount: ({ object }) => {
    // vars

    const timeScaleTimeOn = 0.75
    const timeScaleEaseOn = 'quint.in'
    const timeScaleTimeOff = 0.75
    const timeScaleEaseOff = 'quint.out'

    // slider

    let self = new Xt.Slider(object, {
      align: 'left',
      jump: false,
      drag: {
        manual: true,
        wrap: true,
      },
    })

    // init

    const eventInit = () => {
      if (!self.wrap) {
        // reset dragging position
        gsap.set(self.dragger, { x: self.detail.dragPos })
        self.goToNext()
      }
    }

    self.object.addEventListener('init.xt.slider', eventInit, true)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // animate
        if (self.wrap) {
          // end dragging position instant
          gsap.set(self.dragger, { x: self.detail.dragPos })
        } else {
          // time depending on target and dragger width
          const slideWidth = tr.offsetWidth
          const draggerWidth = self.dragger.offsetWidth
          let time = (slideWidth * 15) / 1000 // constant speed
          if (object.classList.contains('slider--factor')) {
            time = (draggerWidth / slideWidth) * 50 // faster or slower depending on horizontal space
          }
          // end dragging position
          gsap.killTweensOf(self.dragger)
          gsap
            .to(self.dragger, {
              x: self.detail.dragPos,
              duration: time,
              ease: 'linear',
            })
            .eventCallback('onComplete', () => {
              // wrap before changing slide if needed, needed with drag.wrap = true
              self.eventWrap()
              requestAnimationFrame(() => {
                // go to next slide
                self.goToNext()
              })
            })
        }
      }
    }

    self.object.addEventListener('on.xt.slider', eventOn, true)

    // eventPause

    const eventPause = () => {
      // pause tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, {
          timeScale: 0,
          duration: timeScaleTimeOff,
          ease: timeScaleEaseOff,
        })
      }
    }

    self.object.addEventListener('mouseenter', eventPause, true)
    addEventListener('blur', eventPause)

    // eventResume

    const eventResume = () => {
      // resume tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, {
          timeScale: 1,
          duration: timeScaleTimeOn,
          ease: timeScaleEaseOn,
        })
      }
    }

    self.object.addEventListener('mouseleave', eventResume, true)
    addEventListener('focus', eventResume)

    // unmount

    return () => {
      eventPause()
      removeEventListener('blur', eventPause)
      removeEventListener('focus', eventResume)
      self.destroy()
      self = null
    }
  },
})
