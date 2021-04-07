const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ matches: { '(min-width: 768px)': { disabled: true } } }"
    >
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} in-toggle">
        Toggle 1
      </button>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 0</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()} in-toggle">
        Target 1

        <div class="xt-list xt-list-3 items-center mt-4" data-xt-toggle="{ min: 1 }">
          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
            Toggle Nested 0
          </button>

          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
            Toggle Nested 1
          </button>

          <div class="xt-toggle">Target Nested 0</div>

          <div class="xt-toggle">Target Nested 1</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
