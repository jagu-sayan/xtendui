import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-automaticscroll',
  mount: ({ ref }) => {
    const unmountSliders = mountSliders({ ref })

    // unmount

    return () => {
      unmountSliders()
    }
  },
})

/* mountSliders */

const mountSliders = ({ ref }) => {
  const sliders = ref.querySelectorAll('.xt-slider')
  const unmounts = []

  for (const slider of sliders) {
    // vars

    const timeScaleTimeOn = 0.75
    const timeScaleEaseOn = 'quint.in'
    const timeScaleTimeOff = 0.75
    const timeScaleEaseOff = 'quint.out'

    // slider

    let self = new Xt.Slider(slider, {
      align: 'left',
      jump: false,
      drag: {
        manual: true,
        wrap: true,
      },
    })

    // on

    const on = e => {
      const tr = e.target
      // check because of event propagation
      if (self.targets.includes(tr)) {
        if (self.intial || self.wrap) {
          // reset dragging position
          gsap.killTweensOf(self.dragger)
          gsap.set(self.dragger, { x: self.detail.dragPos })
          if (self.intial) {
            self.goToNext()
          }
        } else {
          // time depending on target and dragger width
          const slideWidth = tr.offsetWidth
          let time = (slideWidth * 15) / 1000 // constant speed
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

    self.object.addEventListener('on.xt.slider', on, true)

    // pause

    const pause = () => {
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

    self.object.addEventListener('mouseenter', pause, true)
    addEventListener('blur', pause)

    // resume

    const resume = () => {
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

    self.object.addEventListener('mouseleave', resume, true)
    addEventListener('focus', resume)

    // unmount

    unmounts.push(() => {
      pause()
      removeEventListener('blur', pause)
      removeEventListener('focus', resume)
      self.destroy()
      self = null
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
