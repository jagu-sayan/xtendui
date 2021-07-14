import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-animation-js',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const dragEase = 'quart.out'
  let distance
  let duration

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetXOn = 192
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetXOff = 192

  // init

  /***/
  let self = new Xt.Slider(slider, {
    duration: 500,
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on distance
    distance = Math.abs(self.drag.position - self.drag.final)
    duration = self.initial || self.drag.instant ? 0 : Math.min(Math.log(1 + distance / 125), 1.5)
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      position: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
    // dragger animation
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // setup

  /***/
  const init = () => {
    const trs = self.targets.filter(x => !self.hasCurrent(x, false, true))
    for (const tr of trs) {
      const index = self.getIndex({ el: tr })
      if (index < self.index) {
        gsap.set(tr, {
          x: -1 * targetXOn,
          opacity: 0,
        })
      } else if (index >= self.index) {
        gsap.set(tr, {
          x: 1 * targetXOn,
          opacity: 0,
        })
      }
    }
  }

  self.container.addEventListener('init.xt.slider', init, true)
  /***/

  // on

  /***/
  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      gsap.killTweensOf(tr)
      gsap.to(tr, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }
  }

  self.container.addEventListener('on.xt.slider', on, true)
  /***/

  // off

  /***/
  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      gsap.killTweensOf(tr)
      gsap.to(tr, {
        x: -self.direction * targetXOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  self.container.addEventListener('off.xt.slider', off, true)
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
