const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip>
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        list group
      </button>

      <div class="xt-tooltip p-2">
        <div class="rounded-md shadow-tooltip text-black xt-links-default bg-white">
          <form class="text-sm">
            <div class="xt-list flex-nowrap max-w-sm">
              <div class="xt-list-inner flex-auto">
                <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonDefault()}">
                  ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                </button>
                <input
                  type="text"
                  class="xt-input ${classes.inputDefault()}"
                  aria-label="Search"
                  placeholder="Seach Catalog"
                />
              </div>

              <button type="button" class="xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonPrimary()}">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
