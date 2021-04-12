import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--fade-distance',
  mount: ({ ref }) => {
    const unmountFade = mountFade({ ref })

    // unmount

    return () => {
      unmountFade()
    }
  },
})

/* mountFade */

const mountFade = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.xt-card')

  // fade

  gsap.set(items, {
    y: 15,
  })

  ScrollTrigger.batch(items, {
    start: 'top bottom-=10%',
    end: 'bottom top+=10%',
    onEnter: batch => {
      gsap.killTweensOf(batch)
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'quart.out',
        stagger: 0.15,
      })
    },
    onLeave: batch => {
      gsap.killTweensOf(batch)
      gsap.to(batch, {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: 'quart.out',
        stagger: 0.15,
      })
    },
    onEnterBack: batch => {
      gsap.killTweensOf(batch)
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'quart.out',
        stagger: 0.15,
      })
    },
    onLeaveBack: batch => {
      gsap.killTweensOf(batch)
      gsap.to(batch, {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: 'quart.out',
        stagger: 0.15,
      })
    },
  })

  // unmount

  return () => {}
}
