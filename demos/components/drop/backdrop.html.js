const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()} on:z-drop"
        >
          backdrop
        </button>

        <div class="xt-drop p-4">
          <div class="xt-backdrop bg-black opacity-25"></div>
          <div class="xt-card w-64 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <nav class="xt-list flex-col">
              <a href="#" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
        </div>
      </div>

      <div
        data-xt-drop="{ elements: ':scope > .xt-drop-item', targets: ':scope > .xt-drop-item > .xt-drop', on: 'mouseenter', off: 'mouseleave' }"
      >
        <div class="xt-drop-item">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()} on:z-drop"
          >
            backdrop mouse
          </button>

          <div class="xt-drop p-4">
            <div class="xt-backdrop bg-black opacity-25"></div>
            <div class="xt-card w-64 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
              <nav class="xt-list flex-col">
                <a href="#" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                  Dolor sit
                </button>
                <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                  Amet
                </button>
              </nav>
            </div>
            <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
