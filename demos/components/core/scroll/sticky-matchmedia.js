import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--sticky-matchmedia',
  mount: ({ object }) => {
    // match media

    ScrollTrigger.matchMedia({
      '(max-width: 767px)': () => {
        // sticky

        const sticky = ScrollTrigger.create({
          trigger: object,
          start: 'top top',
          endTrigger: 'html',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        })

        ScrollTrigger.addEventListener('refresh', () => {
          // @FIX ScrollTrigger pin mount ignore
          sticky.pin.classList.add('xt-ignore')
          requestAnimationFrame(() => {
            sticky.pin.classList.remove('xt-ignore')
          })
        })
      },
    })
  },
})
