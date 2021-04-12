const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-animation-inverse">
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ targets: ':scope > .xt-toggle, :scope > .xt-toggle-inverse' }"
    >
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0 inverse
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1 inverse
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle normal
      </button>

      <div class="xt-card xt-toggle-inverse rounded-md ${classes.cardToggle()}" data-xt-duration="500">
        Target 0 inverse
      </div>

      <div class="xt-card xt-toggle-inverse rounded-md ${classes.cardToggle()}" data-xt-duration="500">
        Target 1 inverse
      </div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()} " data-xt-duration="500">Target normal</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
