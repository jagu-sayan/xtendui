const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-animation-js-multiple">
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Toggle 1
      </button>

      <div class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()}">Target 0</div>

      <div class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()}">Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
