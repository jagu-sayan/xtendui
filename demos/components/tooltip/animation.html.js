const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ duration: 300 }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-tooltip-element
      >
        Tooltip
      </button>

      <div
        class="xt-tooltip p-3 *** transition duration-300 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-tooltip-target
      >
        <div
          class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}"
        >
          <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
