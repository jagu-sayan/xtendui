import { Xt } from 'xtendui'
import 'xtendui/src/overlay'

Xt.mount({
  matches: '.demo--unmount',
  mount: ({ ref }) => {
    const unmountTest = mountTest({ ref })

    // unmount

    return () => {
      unmountTest()
    }
  },
})

/* mountTest */

const mountTest = ({ ref }) => {
  // vars

  const overlay = ref

  // init

  let self = new Xt.Overlay(overlay, {})

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // eslint-disable-next-line no-console
      console.log('TEST OFF on unmount this should not be called.')
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.overlay', off)
  }

  // resize

  const resize = () => {
    // eslint-disable-next-line no-console
    console.log('TEST UNMOUNT this should not be called multiple times on changing page and resize.')
  }

  addEventListener('resize', resize)

  // unmount

  return () => {
    // eslint-disable-next-line no-console
    console.log('TEST UNMOUNT this should be called on change page.')
    removeEventListener('resize', resize)
    self.destroy()
    self = null
  }
}
