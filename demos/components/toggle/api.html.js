const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-api">
    <div class="xt-list xt-list-3 items-center mb-4">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-first-element"
      >
        1st element
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-first-target"
      >
        1st target
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-autostart"
      >
        Autostart
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-autostop"
      >
        Autostop
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-add"
      >
        Add
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-remove"
      >
        Remove
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-reinit"
      >
        Reinit
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-restart"
      >
        Restart
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-destroy"
      >
        Destroy
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-api-unmount"
      >
        Unmount
      </button>
    </div>

    <div id="toggle--eventmethods">
      <div class="xt-list xt-list-3 items-center mb-4" id="toggle--eventmethods-elements">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
          data-xt-group="0"
        >
          Toggle Group 0
        </button>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
          data-xt-group="0"
        >
          Toggle Group 0
        </button>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
          Toggle 1
        </button>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
          Toggle 2
        </button>
      </div>

      <div class="xt-list xt-list-3 items-center" id="toggle--eventmethods-targets">
        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="0">Target Group 0</div>
        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="0">Target Group 0</div>
        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>
        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 2</div>
      </div>
    </div>

    <div class="xt-card rounded-md ${classes.cardDefault()} mt-6">
      <div
        class="${classes.cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
        id="card--toggle-api-log"
      ></div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
