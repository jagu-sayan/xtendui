import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-exclude',
  mount: ({ ref }) => {
    const unmountToggle = mountToggle({ ref })
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountToggle()
      unmountSlider()
    }
  },
})

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref.querySelector('.demo--slider-exclude-toggle')
  const slider = ref.querySelector('.xt-slider')

  // init

  /***/
  let self = new Xt.Toggle(toggle, {
    elements: '.xt-list > button',
    targets: '.xt-toggle',
    min: 1,
  })
  /***/

  // change

  const change = () => {
    // deactivate slides
    for (const tr of self.targets.filter(x => !self.hasCurrent(x))) {
      const slide = tr.closest('.xt-slide')
      if (slide) {
        slide.classList.add('hidden')
      }
    }
    // activate slides
    for (const tr of self.targets.filter(x => self.hasCurrent(x))) {
      const slide = tr.closest('.xt-slide')
      if (slide) {
        slide.classList.remove('hidden')
      }
    }
    // reinit slides
    const selfSlider = Xt.get('xt-slider', slider)
    if (selfSlider) {
      selfSlider.reinit(false)
    }
  }

  for (const el of self.elements) {
    el.addEventListener('on.xt.toggle', change)
  }

  // unmount

  return () => {}
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const dragEase = 'quart.out'
  let dragDistance
  let dragDuration

  // init

  /***/
  const self = new Xt.Slider(slider, {
    exclude: '.hidden',
  })
  /***/

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragDuration depending on distance
    dragDistance = Math.abs(self.detail.dragPosition - self.detail.dragFinal)
    dragDuration = self.initial || self.detail.instant ? 0 : Math.min(Math.log(1 + dragDistance / 125), 1.5)
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
    // dragger tween with main time and ease
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {}
}
