const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-drop="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-drop-element
      >
        drop
      </button>

      <div class="xt-drop p-3" data-xt-drop-target>
        <div
          class="xt-card w-64 ${classes.dropGroupMd()} rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}"
        >
          <nav class="xt-list flex-col">
            <a
              href="#"
              class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button
              type="button"
              class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
            >
              Dolor sit
            </button>
            <button
              type="button"
              class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
            >
              Amet
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
