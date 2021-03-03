import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'
import 'xtendui/src/addons/mousefollow'
import gsap from 'gsap'

/**
 * slider
 */

Xt.mount.push({
  matches: '#iframe--slider-hero-v2 .xt-slider',
  mount: ({ object }) => {
    // vars

    const assetCoverTime = 1.5
    const assetCoverEase = 'quint.inOut'

    const assetMaskTime = 1.5
    const assetMaskEase = 'quint.inOut'

    const assetZoom = 0.25
    const assetTime = 1.5
    const assetDelay = 1.5 / 2
    const assetEase = 'expo.out'

    const contentX = 50
    const contentTime = 1.5
    const contentDelayOn = 0.25
    const contentEase = 'quint.inOut'

    // slider

    let self = new Xt.Slider(object, {
      mode: 'absolute',
      duration: 1500,
    })

    // drag

    const eventDrag = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCover = tr.querySelector('.hero-cover')
      const skew =
        self.detail.dragRatio < 0.5 ? 10 * (self.detail.dragRatio * 1.5) : 10 * (self.detail.dragRatioInverse * 1.5) // * 2 would be the same as the normal skew
      gsap.set(assetCover, {
        x: `${100 * self.detail.dragRatioInverse * self.direction}%`,
        skewX: skew * self.direction,
      })
      // content
      const content = tr.querySelector('.hero-content')
      gsap.set(content, {
        x: -contentX * self.detail.dragRatio * self.direction,
        opacity: 1 * self.detail.dragRatioInverse,
      })
    }

    self.dragger.addEventListener('drag.xt.slider', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCover = tr.querySelector('.hero-cover')
      gsap.to(assetCover, {
        skewX: 0,
        x: `${100 * self.direction}%`,
        duration: assetCoverTime,
        ease: assetCoverEase,
      })
      // content
      const content = tr.querySelector('.hero-content')
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: contentTime,
        ease: contentEase,
      })
    }

    self.dragger.addEventListener('dragreset.xt.slider', eventDragReset)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        if (self.initial) {
          // cover
          const assetCover = tr.querySelector('.hero-cover')
          gsap.killTweensOf(assetCover)
          gsap.set(assetCover, { x: `${100 * self.direction}%`, skewX: 0 })
          // assetMask
          const assetMask = tr.querySelector('.hero')
          gsap.killTweensOf(assetMask)
          gsap.set(assetMask, { x: 0 })
          const assetMaskInner = assetMask.querySelector('.hero-inner')
          gsap.killTweensOf(assetMaskInner)
          gsap.set(assetMaskInner, { x: 0 })
          // asset
          const asset = tr.querySelector('.xt-media')
          gsap.killTweensOf(asset)
          gsap.set(asset, { scale: 1 })
        } else {
          // cover
          const assetCover = tr.querySelector('.hero-cover')
          gsap.set(assetCover, { x: `${100 * self.direction}%`, skewX: 0 })
          gsap.to(assetCover, {
            x: `${-100 * self.direction}%`,
            duration: assetCoverTime,
            ease: assetCoverEase,
          })
          gsap
            .to(assetCover, {
              skewX: 5 * self.direction,
              duration: assetCoverTime / 2,
              ease: assetCoverEase,
            })
            .eventCallback('onComplete', () => {
              gsap.to(assetCover, {
                skewX: 0,
                duration: assetCoverTime / 2,
                ease: assetCoverEase,
              })
            })
          // assetMask
          const assetMask = tr.querySelector('.hero')
          gsap.set(assetMask, { x: `${100 * self.direction}%` })
          gsap.to(assetMask, {
            x: 0,
            duration: assetMaskTime,
            ease: assetMaskEase,
          })
          const assetMaskInner = assetMask.querySelector('.hero-inner')
          gsap.set(assetMaskInner, { x: `${-100 * self.direction}%` })
          gsap.to(assetMaskInner, {
            x: 0,
            duration: assetMaskTime,
            ease: assetMaskEase,
          })
          // asset
          const asset = tr.querySelector('.xt-media')
          gsap.set(asset, { scale: 1 + assetZoom })
          gsap.to(asset, {
            scale: 1,
            duration: assetTime,
            ease: assetEase,
            delay: assetDelay,
          })
          // content
          const content = tr.querySelector('.hero-content')
          gsap.set(content, { x: contentX * self.direction })
          gsap.to(content, {
            x: 0,
            opacity: 1,
            duration: contentTime,
            ease: contentEase,
            delay: contentDelayOn,
          })
        }
      }
    }

    self.object.addEventListener('on.xt.slider', eventOn, true)

    // on

    const eventOff = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        if (self.detail.dragging) {
          // cover
          const assetCover = tr.querySelector('.hero-cover')
          gsap.to(assetCover, {
            x: `${-100 * self.direction}%`,
            duration: assetCoverTime,
            ease: assetCoverEase,
          })
          gsap
            .to(assetCover, {
              skewX: 10 * self.direction,
              duration: assetCoverTime / 2,
              ease: assetCoverEase,
            })
            .eventCallback('onComplete', () => {
              gsap.to(assetCover, {
                skewX: 0,
                duration: assetCoverTime / 2,
                ease: assetCoverEase,
              })
            })
          // assetMask
          const assetMask = tr.querySelector('.hero')
          gsap.to(assetMask, {
            x: `${-100 * self.direction}%`,
            duration: assetMaskTime,
            ease: assetMaskEase,
          })
          const assetMaskInner = assetMask.querySelector('.hero-inner')
          gsap.to(assetMaskInner, {
            x: `${100 * self.direction}%`,
            duration: assetMaskTime,
            ease: assetMaskEase,
          })
        }
        // content
        const content = tr.querySelector('.hero-content')
        gsap.to(content, {
          x: -contentX * self.direction,
          opacity: 0,
          duration: contentTime,
          ease: contentEase,
        })
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
 * .xt-slide link animation
 */

Xt.mount.push({
  matches: '#iframe--slider-hero-v2 .xt-slide',
  mount: ({ object }) => {
    // vars

    const links =
      object.tagName === 'A' || object.tagName === 'BUTTON'
        ? Xt.arrSingle(object)
        : object.querySelectorAll('a, button')
    const img = object.querySelector('.xt-media')
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
      gsap.to(img, {
        opacity: imgOpacityOut,
        duration: 0.5,
        ease: 'quart.out',
        overwrite: true,
      })
    }

    for (const link of links) {
      link.addEventListener('mouseleave', eventLeave)
    }
  },
})
