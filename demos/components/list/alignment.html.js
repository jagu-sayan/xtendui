const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list xt-list-3 flex-col items-start">
      <div>
        <div class="xt-list xt-list-3 items-start">
          <div>
            <div class="xt-list xt-list-3 flex-col items-start">
              <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
                Lorem Ipsum
              </button>

              <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
                Dolor sit
              </button>

              <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
                Amet
              </button>
            </div>
          </div>

          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
            Dolor sit
          </button>

          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
            Amet
          </button>
        </div>
      </div>

      <div>
        <div class="xt-list xt-list-3 items-start">
          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
            Lorem Ipsum
          </button>

          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
            Dolor sit
          </button>

          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
            Amet
          </button>
        </div>
      </div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
