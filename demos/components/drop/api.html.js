const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--drop-api">
    <div class="xt-list xt-list-3 items-center mb-4">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-first-element"
      >
        1st element
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-first-target"
      >
        1st target
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-first-element-off"
      >
        off 1st element
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-first-target-off"
      >
        off 1st target
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-add"
      >
        Add
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-remove"
      >
        Remove
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-reinit"
      >
        Reinit
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-restart"
      >
        Restart
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-destroy"
      >
        Destroy
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--drop-api-unmount"
      >
        Unmount
      </button>
    </div>

    <div class="xt-list xt-list-3 items-center" id="drop--eventmethods" title="Object">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        Drop 0
      </button>

      <div class="xt-drop p-4" title="Target 0">
        <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardWhite()}">
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
      </div>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        Drop 1
      </button>

      <div class="xt-drop p-4" title="Target 1">
        <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardWhite()}">
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
      </div>
    </div>

    <div class="xt-card rounded-md ${classes.cardDefault()} mt-6">
      <div
        class="${classes.cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
        id="card--drop-api-log"
      ></div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
