import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount.push({
  matches: '#iframe--slide-animation-v1 .btn, #iframe--slide-animation-v1 a.card',
  mount: ({ object }) => {
    // vars

    let content = object.querySelector('.content')
    const contentX = 20

    let clone = object.querySelector('.clone')
    const cloneX = 20

    // inject

    if (!clone) {
      object.classList.add('overflow-hidden')
      const text = object.innerHTML
      object.innerHTML = ''
      object.append(Xt.createElement(`<span class="content"></span>`))
      object.append(Xt.createElement(`<span class="clone absolute"></span>`))
      content = object.querySelector('.content')
      clone = object.querySelector('.clone')
      content.innerHTML = text
      clone.innerHTML = text
      gsap.set(clone, { x: -cloneX, opacity: 0 })
    }

    // on

    const eventOn = () => {
      // content
      const content = object.querySelector('.content')
      gsap.killTweensOf(clone)
      gsap.set(content, { transformOrigin: 'right center' })
      gsap.set(content, { x: 0, opacity: 1 })
      gsap.to(content, { x: contentX, opacity: 0, duration: 0.7, ease: 'quint.out' })
      // clone
      const clone = object.querySelector('.clone')
      gsap.killTweensOf(clone)
      gsap.set(clone, { transformOrigin: 'left center' })
      gsap.set(clone, { x: -cloneX, opacity: 0 })
      gsap.to(clone, { x: 0, opacity: 1, duration: 0.7, ease: 'quint.out', delay: 0.3 })
    }

    object.addEventListener('click', eventOn)
  },
})
