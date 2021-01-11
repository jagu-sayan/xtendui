import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'
import gsap from 'gsap'

/**
 * slider
 */

Xt.mount.push({
  matches: '#iframe--slider-hero-v1 .slider',
  mount: ({ object }) => {
    // vars

    const assetMaskTimeOn = 1.5
    const assetMaskEaseOn = 'quint.inOut'
    const assetMaskTimeOff = 1.5
    const assetMaskEaseOff = 'quint.inOut'
    const assetMaskEaseDragging = 'quint.out'

    const assetZoom = 0.25
    const assetOpacity = 0.5
    const assetTimeOn = 1.5
    const assetEaseOn = 'quint.inOut'
    const assetTimeOff = 1.5
    const assetEaseOff = 'quint.inOut'
    const assetTimeDragging = 1.5 + 1.5
    const assetEaseDragging = 'quint.out'

    const contentX = 50
    const contentTime = 1.5
    const contentEase = 'quint.inOut'
    const contentEaseDragging = 'quint.out'

    // slider

    let self = new Xt.Slider(object, {
      instant: true,
      duration: 1500,
      auto: {
        time: 5000,
        pause: '.hero-content > *',
      },
      drag: {
        overflow: false,
      },
    })

    // drag

    const eventDrag = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMask = tr.querySelector('.hero')
      gsap.set(assetMask, { x: `${-100 * self.detail.dragRatio * self.direction}%` })
      const assetMaskInner = assetMask.querySelector('.hero-inner')
      gsap.set(assetMaskInner, { x: `${(100 * self.detail.dragRatio * self.direction) / 2}%` })
      // asset
      const asset = tr.querySelector('.media')
      gsap.set(asset, { opacity: self.detail.dragRatioInverse + assetOpacity })
      // nextsOld
      const nextsOld = self.targets.filter(x => x.classList.contains('next'))
      for (const next of nextsOld) {
        next.classList.remove('next')
      }
      // next
      const nexts = self.direction > 0 ? self.getTargets(self.getNext()) : self.getTargets(self.getPrev())
      for (const next of nexts) {
        next.classList.add('next')
        // assetMask
        const assetMask = next.querySelector('.hero')
        gsap.set(assetMask, { x: `${100 * self.detail.dragRatioInverse * self.direction}%` })
        const assetMaskInner = assetMask.querySelector('.hero-inner')
        gsap.set(assetMaskInner, { x: `${(-100 * self.detail.dragRatioInverse * self.direction) / 2}%` })
        // asset
        const asset = next.querySelector('.media')
        gsap.set(asset, { scale: 1 + assetZoom * self.detail.dragRatioInverse, opacity: self.detail.dragRatio + assetOpacity })
        // content
        const content = next.querySelector('.hero-content')
        gsap.set(content, { x: contentX * self.detail.dragRatioInverse * self.direction })
      }
    }

    self.dragger.addEventListener('drag.xt.slider', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMask = tr.querySelector('.hero')
      gsap.to(assetMask, { x: 0, duration: 0.25, ease: assetMaskEaseOff })
      const assetMaskInner = assetMask.querySelector('.hero-inner')
      gsap.to(assetMaskInner, { x: 0, duration: 0.25, ease: assetMaskEaseOff })
      // asset
      const asset = tr.querySelector('.media')
      gsap.to(asset, { x: 0, opacity: 1, duration: 0.25, ease: assetEaseOn })
      // next
      const nexts = self.targets.filter(x => x.classList.contains('next'))
      for (const next of nexts) {
        // assetMask
        const assetMask = next.querySelector('.hero')
        const xCurrent = assetMask.clientWidth * self.direction
        gsap.to(assetMask, { x: xCurrent, duration: 0.25, ease: assetMaskEaseOff })
        const assetMaskInner = assetMask.querySelector('.hero-inner')
        gsap.to(assetMaskInner, { x: -xCurrent / 2, duration: 0.25, ease: assetMaskEaseOff })
        // asset
        const asset = next.querySelector('.media')
        gsap.set(asset, { opacity: assetOpacity, duration: 0.25, ease: assetEaseOn })
      }
    }

    self.dragger.addEventListener('dragreset.xt.slider', eventDragReset)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        if (self.initial) {
          // assetMask
          const assetMask = tr.querySelector('.hero')
          gsap.killTweensOf(assetMask)
          gsap.set(assetMask, { x: 0 })
          const assetMaskInner = assetMask.querySelector('.hero-inner')
          gsap.killTweensOf(assetMaskInner)
          gsap.set(assetMaskInner, { x: 0 })
          // asset
          const asset = tr.querySelector('.media')
          gsap.killTweensOf(asset)
          gsap.set(asset, { opacity: 1, scale: 1 })
          // content
          const content = tr.querySelector('.hero-content')
          gsap.killTweensOf(content)
          gsap.set(content, { x: 0 })
        } else {
          // assetMask
          const assetMask = tr.querySelector('.hero')
          if (!self.detail.dragging) {
            gsap.set(assetMask, { x: `${100 * self.direction}%` })
          }
          gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: self.detail.dragging ? assetMaskEaseDragging : assetMaskEaseOn })
          const assetMaskInner = assetMask.querySelector('.hero-inner')
          if (!self.detail.dragging) {
            gsap.set(assetMaskInner, { x: `${-((100 * self.direction) / 2)}%` })
          }
          gsap.to(assetMaskInner, { x: 0, duration: assetMaskTimeOn, ease: self.detail.dragging ? assetMaskEaseDragging : assetMaskEaseOn })
          // asset
          const asset = tr.querySelector('.media')
          if (!self.detail.dragging) {
            gsap.set(asset, { opacity: 1, scale: 1 + assetZoom })
          }
          gsap.to(asset, {
            opacity: 1,
            scale: 1,
            duration: self.detail.dragging ? assetTimeDragging : assetTimeOn,
            ease: self.detail.dragging ? assetEaseDragging : assetEaseOn,
          })
          // content
          const content = tr.querySelector('.hero-content')
          if (!self.detail.dragging) {
            gsap.set(content, { x: contentX * self.direction })
          }
          gsap.to(content, { x: 0, duration: contentTime, ease: self.detail.dragging ? contentEaseDragging : contentEase })
        }
      }
    }

    self.object.addEventListener('on.xt.slider', eventOn, true)

    // off

    const eventOff = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // assetMask
        const assetMask = tr.querySelector('.hero')
        gsap.to(assetMask, {
          x: `${-100 * self.direction}%`,
          duration: assetMaskTimeOff,
          ease: self.detail.dragging ? assetMaskEaseDragging : assetMaskEaseOff,
        })
        const assetMaskInner = assetMask.querySelector('.hero-inner')
        gsap.to(assetMaskInner, {
          x: `${(100 * self.direction) / 2}%`,
          duration: assetMaskTimeOff,
          ease: self.detail.dragging ? assetMaskEaseDragging : assetMaskEaseOff,
        })
        // asset
        const asset = tr.querySelector('.media')
        gsap.to(asset, {
          opacity: assetOpacity,
          duration: self.detail.dragging ? assetTimeDragging : assetTimeOff,
          ease: self.detail.dragging ? assetEaseDragging : assetEaseOff,
        })
        // nextsOld
        const nextsOld = self.targets.filter(x => x.classList.contains('next'))
        for (const next of nextsOld) {
          next.classList.remove('next')
        }
      }
    }

    self.object.addEventListener('off.xt.slider', eventOff, true)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})

/**
 * .slide link animation
 */

Xt.mount.push({
  matches: '#iframe--slider-hero-v1 .slide',
  mount: ({ object }) => {
    // vars

    const links = object.tagName === 'A' || object.tagName === 'BUTTON' ? Xt.arrSingle(object) : object.querySelectorAll('a, button')
    const img = object.querySelector('.media')
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const eventEnter = () => {
      // img
      gsap.to(img, { opacity: imgOpacityIn, duration: 0.5, ease: 'quart.out' })
    }

    for (const link of links) {
      link.addEventListener('mouseenter', eventEnter)
    }

    // enter

    const eventLeave = () => {
      // img
      gsap.to(img, { opacity: imgOpacityOut, duration: 0.5, ease: 'quart.out', overwrite: true })
    }

    for (const link of links) {
      link.addEventListener('mouseleave', eventLeave)
    }
  },
})
