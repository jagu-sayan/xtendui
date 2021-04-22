import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--parallax-range',
  mount: ({ ref }) => {
    const unmountParallax = mountParallax({ ref })

    // unmount

    return () => {
      unmountParallax()
    }
  },
})

/* mountParallax */

const mountParallax = ({ ref }) => {
  // parallax

  const parallax = ({ container }) => {
    // items inside container and not already parallaxed
    const items = container.querySelectorAll('.box:not(.parallaxed)')
    for (const item of items) {
      item.classList.add('parallaxed')
      // no scrub
      const scrollTrigger = {
        trigger: item,
        start: () => {
          // full range of animation also on top of the page
          const start = window.innerHeight - item.offsetTop
          return `top${start > 0 ? `+=${start}` : ''} bottom`
        },
        end: () => {
          // full range of animation also on bottom of the page
          const end = window.innerHeight - document.scrollingElement.scrollHeight + item.offsetTop + item.offsetHeight
          return `bottom${end > 0 ? `-=${end}` : ''} top`
        },
        scrub: 1.5,
        markers: true,
      }
      gsap
        .timeline({
          scrollTrigger: scrollTrigger,
        })
        .to(item, {
          x: '50vw',
          ease: 'quint.inOut',
        })
    }
  }

  parallax({ container: ref })

  // unmount

  return () => {}
}
