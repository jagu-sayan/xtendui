import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'
import gsap from 'gsap'

/**
 * slider
 */

Xt.mount.push({
  matches: '#iframe--industrial-layout-v1 body .slider', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const assetMaskTimeOn = 1
    const assetMaskEaseOn = 'expo.out'
    const assetMaskTimeOff = 0.5
    const assetMaskEaseOff = 'quart.out'

    const assetZoom = 0.2
    const assetTimeOn = 1
    const assetEaseOn = 'quart.out'
    const assetTimeOff = 0.25
    const assetEaseOff = 'quart.inOut'

    const cardContentX = 25
    const cardContentTimeOn = 1
    const cardContentEaseOn = 'expo.out'
    const cardContentTimeOff = 0.25
    const cardContentEaseOff = 'expo.inOut'

    const cardTime = 1
    const cardEase = 'expo.out'

    // slider

    let self = new Xt.Slider(object, {
      instant: {
        elements: true,
        elementsInner: true,
      },
      durationOn: 1000,
      durationOff: 500,
      auto: {
        time: 4000,
      },
      drag: {
        overflow: false,
      },
    })

    // drag

    const eventDrag = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMasks = tr.querySelectorAll('.featured-item_asset .media-container')
      for (const assetMask of assetMasks) {
        gsap.set(assetMask, { x: `${-100 * self.detail.dragRatio * self.direction}%` })
        const assetMaskInner = assetMask.querySelector('.media-inner')
        gsap.set(assetMaskInner, { x: `${100 * self.detail.dragRatio * self.direction}%`, opacity: 1 })
      }
      // asset
      const assets = tr.querySelectorAll('.featured-item_asset img')
      for (const asset of assets) {
        gsap.set(asset, { scale: 1 + assetZoom * self.detail.dragRatio })
      }
      // cardContent
      const cardContents = tr.querySelectorAll('.slide_card .card-item')
      for (const cardContent of cardContents) {
        gsap.set(cardContent, { x: -cardContentX * self.detail.dragRatio * self.direction, opacity: self.detail.dragRatioInverse })
      }
    }

    self.dragger.addEventListener('drag.xt.slider', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMasks = tr.querySelectorAll('.featured-item_asset .media-container')
      for (const assetMask of assetMasks) {
        gsap.to(assetMask, { x: 0, duration: 0.25, ease: assetMaskEaseOff })
        const assetMaskInner = assetMask.querySelector('.media-inner')
        gsap.to(assetMaskInner, { x: 0, opacity: 1, duration: 0.25, ease: assetMaskEaseOff })
      }
      // asset
      const assets = tr.querySelectorAll('.featured-item_asset img')
      for (const asset of assets) {
        gsap.to(asset, { scale: 1, duration: 0.25, ease: assetEaseOff })
      }
      // cardContent
      const cardContents = tr.querySelectorAll('.slide_card .card-item')
      for (const cardContent of cardContents) {
        gsap.to(cardContent, { x: 0, opacity: 1, duration: 0.25, ease: cardContentEaseOff })
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
          const assetMasks = tr.querySelectorAll('.featured-item_asset .media-container')
          for (const assetMask of assetMasks) {
            gsap.killTweensOf(assetMask)
            gsap.set(assetMask, { x: 0 })
            const assetMaskInner = assetMask.querySelector('.media-inner')
            gsap.killTweensOf(assetMaskInner)
            gsap.set(assetMaskInner, { x: 0, opacity: 1 })
          }
          // asset
          const assets = tr.querySelectorAll('.featured-item_asset img')
          for (const asset of assets) {
            gsap.killTweensOf(asset)
            gsap.set(asset, { scale: 1 })
          }
          // cardContent
          const cardContents = tr.querySelectorAll('.slide_card .card-item')
          for (const cardContent of cardContents) {
            gsap.killTweensOf(cardContent)
            gsap.set(cardContent, { x: 0, opacity: 1 })
          }
        } else {
          // assetMask
          const assetMasks = tr.querySelectorAll('.featured-item_asset .media-container')
          for (const assetMask of assetMasks) {
            if (!self.detail.dragging) {
              gsap.set(assetMask, { x: `${100 * self.direction}%` })
            }
            gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
            const assetMaskInner = assetMask.querySelector('.media-inner')
            gsap.set(assetMaskInner, { x: `${-100 * self.direction}%` })
            gsap.to(assetMaskInner, { x: 0, opacity: 1, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
          }
          // asset
          const assets = tr.querySelectorAll('.featured-item_asset img')
          for (const asset of assets) {
            if (!self.detail.dragging) {
              gsap.set(asset, { scale: 1 + assetZoom })
            }
            gsap.to(asset, { scale: 1, duration: assetTimeOn, ease: assetEaseOn })
          }
          // cardContent
          const cardContents = tr.querySelectorAll('.slide_card .card-item')
          for (const cardContent of cardContents) {
            if (!self.detail.dragging) {
              gsap.set(cardContent, { x: cardContentX * self.direction, opacity: 0 })
            }
            gsap.to(cardContent, { x: 0, opacity: 1, duration: cardContentTimeOn, ease: cardContentEaseOn })
          }
          // card
          const card = tr.querySelector('.slide_card > .card')
          const cardHeight = card.clientHeight
          if (!self.detail.dragging) {
            gsap.set(card, { height: Xt.dataStorage.get(self.object, 'cardHeight') || cardHeight })
          }
          gsap.to(card, { height: cardHeight, duration: cardTime, ease: cardEase })
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
        const assetMasks = tr.querySelectorAll('.featured-item_asset .media-container')
        for (const assetMask of assetMasks) {
          gsap.to(assetMask, { x: `${-100 * self.direction}%`, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
          const assetMaskInner = assetMask.querySelector('.media-inner')
          gsap.to(assetMaskInner, { x: `${100 * self.direction}%`, opacity: 0, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        }
        // asset
        const assets = tr.querySelectorAll('.featured-item_asset img')
        for (const asset of assets) {
          gsap.to(asset, { scale: 1 + assetZoom, duration: assetTimeOff, ease: assetEaseOff })
        }
        // cardContent
        const cardContents = tr.querySelectorAll('.slide_card .card-item')
        for (const cardContent of cardContents) {
          gsap.to(cardContent, { x: -cardContentX * self.direction, opacity: 0, duration: cardContentTimeOff, ease: cardContentEaseOff })
        }
        // card
        const card = tr.querySelector('.slide_card > .card')
        gsap.set(card, { height: '' })
        Xt.dataStorage.set(self.object, 'cardHeight', card.clientHeight)
      }
    }

    self.object.addEventListener('off.xt.slider', eventOff, true)

    // on elements

    const eventOnElements = e => {
      const tr = e.target
      // useCapture delegation
      if (self.elements.includes(tr)) {
        // move scroll centering el
        const inner = self.object.querySelector('.slider-pagination_inner')
        const scroll = self.object.querySelector('.slider-pagination_scroll')
        if (inner.offsetWidth < scroll.offsetWidth) {
          self.object.classList.remove('slider--nonav')
          if (e.type === 'on.xt.slider') {
            const widthInner = inner.offsetWidth
            const widthScroll = scroll.offsetWidth
            const leftEl = tr.offsetLeft
            const widthEl = tr.offsetWidth
            let final = widthInner / 2 - leftEl
            // contain initial
            final = leftEl + widthEl / 2 > widthInner / 2 ? final - widthEl / 2 : 0
            // contain final
            final = leftEl + widthEl / 2 < widthScroll - widthInner / 2 ? final : -widthScroll + widthInner
            // set
            scroll.style.left = `${final}px`
          }
        } else {
          if (e.type === 'on.xt.slider') {
            self.object.classList.add('slider--nonav')
            // set
            scroll.style.left = ''
          }
        }
      }
    }

    self.object.addEventListener('on.xt.slider', eventOnElements, true)
    self.object.addEventListener('medialoaded.xt.slider', eventOnElements, true)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
