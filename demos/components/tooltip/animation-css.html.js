const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-animation-css">
    <div data-xt-tooltip>
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        tooltip
      </button>

      <div class="xt-tooltip p-2" data-xt-duration="300">
        <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
