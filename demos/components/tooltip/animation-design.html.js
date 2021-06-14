const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ elements: ':scope > .xt-button', targets: ':scope > .xt-tooltip', duration: 300 }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        tooltip
      </button>

      <div class="xt-tooltip p-2 group">
        <div class="xt-tooltip-inner">
          <div
            class="*** xt-design *** ${classes.tooltipRadius()} shadow-tooltip bg-black *** transform transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"
          ></div>
          <div
            class="relative ${classes.tooltipMd()} font-semibold text-white xt-links-inverse *** transition duration-300 opacity-0 group-in:opacity-100 ***"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
