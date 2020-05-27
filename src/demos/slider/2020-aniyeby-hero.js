import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2020-aniyeby-hero',
  mount: object => {
    // vars

    const assetCoverTimeOn = Xt.vars.timeBig
    const assetCoverTimeOff = Xt.vars.timeBig
    const assetCoverEaseOn = 'quint.inOut'
    const assetCoverEaseOff = 'quint.inOut'

    const assetMaskTimeOn = Xt.vars.timeBig
    const assetMaskTimeOff = Xt.vars.timeBig
    const assetMaskEaseOn = 'quint.inOut'
    const assetMaskEaseOff = 'quint.inOut'

    const assetZoom = 0.25
    const assetTimeOn = Xt.vars.timeBig / 2
    const assetDelayOn = Xt.vars.timeBig / 2
    const assetEaseOn = 'expo.out'

    // slider

    let self = new Xt.Slider(object, {
      instant: true,
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeBig,
      auto: {
        //time: 4500,
        pause: '[data-xt-pag], [data-xt-nav]',
      },
      autoHeight: false,
      groupMq: false,
      drag: {
        duration: Xt.vars.timeBig,
        overflow: false,
      },
    })

    // drag

    const eventDrag = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCovers = tr.querySelectorAll('.slide_item_cover')
      for (const assetCover of assetCovers) {
        gsap.set(assetCover, { x: 100 * self.detail.dragRatioInverse * self.direction + '%' })
      }
      /*
      // assetMask
      const assetMasksTr = tr.querySelectorAll('.slide_item_asset')
      for (const assetMask of assetMasksTr) {
        gsap.set(assetMask, { x: -100 * self.detail.dragRatio * self.direction + '%' })
        const assetMaskInner = assetMask.querySelector('.slide_item_asset_inner')
        gsap.set(assetMaskInner, { x: 100 * self.detail.dragRatio * self.direction + '%' })
      }

       */
      /*
      // asset
      const assets = tr.querySelectorAll('.slide_item_asset img')
      for (const asset of assets) {
        gsap.to(asset, { scale: 1 + assetZoom * self.detail.dragRatio })
      }*/
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCovers = tr.querySelectorAll('.slide_item_cover')
      for (const assetCover of assetCovers) {
        gsap.to(assetCover, { x: 100 * self.direction + '%', duration: assetCoverTimeOff, ease: assetCoverEaseOff })
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        if (self.initial) {
          // cover
          const assetCovers = tr.querySelectorAll('.slide_item_cover')
          for (const assetCover of assetCovers) {
            gsap.killTweensOf(assetCover)
            gsap.set(assetCover, { x: 100 * self.direction + '%' })
          }
          // assetMask
          const assetMasks = tr.querySelectorAll('.slide_item_asset')
          for (const assetMask of assetMasks) {
            gsap.killTweensOf(assetMask)
            gsap.set(assetMask, { x: 0 })
            const assetMaskInner = assetMask.querySelector('.slide_item_asset_inner')
            gsap.killTweensOf(assetMaskInner)
            gsap.set(assetMaskInner, { x: 0 })
          }
          // asset
          const assets = tr.querySelectorAll('.slide_item_asset img')
          for (const asset of assets) {
            gsap.killTweensOf(asset)
            gsap.set(asset, { scale: 1 })
          }
        } else {
          // cover
          const assetCovers = tr.querySelectorAll('.slide_item_cover')
          for (const assetCover of assetCovers) {
            gsap.set(assetCover, { x: 100 * self.direction + '%' })
            gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTimeOn, ease: assetCoverEaseOn })
          }
          // assetMask
          const assetMasks = tr.querySelectorAll('.slide_item_asset')
          for (const assetMask of assetMasks) {
            gsap.set(assetMask, { x: 100 * self.direction + '%' })
            gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
            const assetMaskInner = assetMask.querySelector('.slide_item_asset_inner')
            gsap.set(assetMaskInner, { x: -100 * self.direction + '%' })
            gsap.to(assetMaskInner, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
          }
          // asset
          const assets = tr.querySelectorAll('.slide_item_asset img')
          for (const asset of assets) {
            gsap.set(asset, { scale: 1 + assetZoom })
            gsap.to(asset, { scale: 1, duration: assetTimeOn, ease: assetEaseOn, delay: assetDelayOn })
          }
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // on

    const eventOff = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // cover
        const assetCovers = tr.querySelectorAll('.slide_item_cover')
        for (const assetCover of assetCovers) {
          gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTimeOff, ease: assetCoverEaseOff })
        }
        // assetMask
        const assetMasks = tr.querySelectorAll('.slide_item_asset')
        for (const assetMask of assetMasks) {
          gsap.to(assetMask, { x: -100 * self.direction + '%', duration: assetMaskTimeOff, ease: assetMaskEaseOff })
          const assetMaskInner = assetMask.querySelector('.slide_item_asset_inner')
          gsap.to(assetMaskInner, { x: 100 * self.direction + '%', duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        }
      }
    }

    self.object.addEventListener('off.xt', eventOff, true)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
