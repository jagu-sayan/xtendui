import { Xt } from 'xtendui'

/* mountJumptocontents */

const mountJumptocontents = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: '.jumptocontent',
    mount: ({ ref }) => {
      return mountJumptocontent({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountJumptocontent */

const mountJumptocontent = ({ ref }) => {
  // vars

  const jumptocontent = ref

  // focusIn

  const focusIn = e => {
    const active = jumptocontent.contains(e.target)
    if (active) {
      Xt.on({ el: jumptocontent })
    } else {
      Xt.off({ el: jumptocontent })
    }
  }

  document.addEventListener('focusin', focusIn)

  // unmount

  return () => {
    document.removeEventListener('focusin', focusIn)
  }
}

/* mount */

Xt.mount({
  matches: '.demo--jumptocontent',
  mount: ({ ref }) => {
    const unmountJumptocontents = mountJumptocontents({ ref })

    // unmount

    return () => {
      unmountJumptocontents()
    }
  },
})
