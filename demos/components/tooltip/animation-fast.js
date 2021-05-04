import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

Xt.mount({
  matches: '.demo--tooltip-animation-fast',
  mount: ({ ref }) => {
    const unmountTooltip = mountTooltip({ ref })

    // unmount

    return () => {
      unmountTooltip()
    }
  },
})

/* mountTooltip */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltips = ref.querySelectorAll('.xt-tooltip')

  for (const tooltip of tooltips) {
    // vars

    const object = tooltip.closest('[data-xt-tooltip]')
    const self = Xt.get('xt-tooltip', object)
    const delayReset = 1000
    const durationFast = 100

    // fix only once when tooltip has multiple targets

    if (object.dataset.onlyOnceDone) return () => {}
    object.dataset.onlyOnceDone = 'true'

    // on

    const on = e => {
      for (const tooltip of tooltips) {
        tooltip.dataset.defaultXtDuration = 'test'
      }
      // make other tooltips fast
      const tooltipsOther = Array.from(tooltips).filter(x => x !== e.target)
      for (const tooltip of tooltipsOther) {
        tooltip.dataset.defaultXtDuration = self.options.duration
        self.options.duration = durationFast
        const inner = tooltip.querySelector(':scope > *')
        inner.style.transitionDuration = `${durationFast}ms`
      }
      // make all tooltips normal
      clearTimeout(window.xtTooltipFastTimeout)
      window.xtTooltipFastTimeout = setTimeout(() => {
        for (const tooltip of tooltips) {
          self.options.duration = tooltip.dataset.defaultXtDuration
          const inner = tooltip.querySelector(':scope > *')
          inner.style.transitionDuration = ''
        }
      }, delayReset)
    }

    tooltip.addEventListener('on.xt.tooltip', on)
  }

  // unmount

  return () => {}
}
