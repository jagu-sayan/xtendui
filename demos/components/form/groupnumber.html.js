const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} rounded-md text-black bg-gray-200 text-center">Horizontal</div>

    <form class="text-sm">
      <div class="xt-list" data-xt-groupnumber>
        <div class="xt-list-inner">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded-l-md border border-gray-500 ${classes.buttonDefault()}"
            data-xt-step="-1"
          >
            -
          </button>
          <input
            type="number"
            class="xt-input w-16 border border-l-0 border-gray-500 ${classes.inputDefault()}"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded-r-md border border-l-0 border-gray-500 ${classes.buttonDefault()}"
            data-xt-step="1"
          >
            +
          </button>
        </div>
      </div>
    </form>

    <div class="${classes.hBlock()} rounded-md text-black bg-gray-200 text-center">Vertical</div>

    <form class="text-sm">
      <div class="xt-list" data-xt-groupnumber>
        <div class="xt-list-inner">
          <input
            type="number"
            class="xt-input w-16 rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 ${classes.inputDefault()}"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <div class="xt-list-inner flex-col">
            <button
              type="button"
              class="xt-button text-2xs py-0.5 px-2.5 rounded-tr-md border border-gray-500 ${classes.buttonDefault()}"
              data-xt-step="1"
            >
              +
            </button>
            <button
              type="button"
              class="xt-button text-2xs py-0.5 px-2.5 rounded-br-md border border-t-0 border-gray-500 ${classes.buttonDefault()}"
              data-xt-step="-1"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
