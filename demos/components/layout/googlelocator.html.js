const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--googlelocator">
    <div class="flex flex-wrap flex-auto flex-col md:flex-row md:min-h-screen">
      <div class="*** googlelocator-aside *** flex flex-col w-full relative z-10">
        <div class="relative p-6 border-b border-gray-100">
          <form class="text-sm">
            <div class="xt-row xt-row-x-6 xt-row-y-4">
              <div class="w-full">
                <div class="xt-list flex-nowrap">
                  <div class="xt-list-inner flex-auto">
                    <input
                      type="text"
                      class="${classes.input()} rounded-l-md ${classes.inputDefault()}"
                      aria-label="Search"
                      placeholder="Search"
                      data-xt-googlelocator-search-input
                    />
                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}"
                      data-xt-googlelocator-locate-btn
                    >
                      ${classes.iconLocate({ classes: 'text-xl -my-1' })}
                    </button>
                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonDefault()}"
                      data-xt-googlelocator-search-btn
                    >
                      ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                    </button>
                  </div>
                </div>
              </div>

              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="radio"
                    class="xt-check xt-radio ${classes.switchRadius()} ${classes.switchDefault()}"
                    name="type-options"
                    value=""
                    data-xt-googlelocator-filter
                    checked
                  />
                  <span class="${classes.checkContent()}">All types</span>
                </label>
              </div>

              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="radio"
                    class="xt-check xt-radio ${classes.switchRadius()} ${classes.switchDefault()}"
                    name="type-options"
                    value="restaurant"
                    data-xt-googlelocator-filter
                  />
                  <span class="${classes.checkContent()}">Restaurant</span>
                </label>
              </div>

              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="radio"
                    class="xt-check xt-radio ${classes.switchRadius()} ${classes.switchDefault()}"
                    name="type-options"
                    value="school"
                    data-xt-googlelocator-filter
                  />
                  <span class="${classes.checkContent()}">School</span>
                </label>
              </div>

              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="checkbox"
                    class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                    name="type-fav"
                    value="fav"
                    data-xt-googlelocator-filter
                  />
                  <span class="${classes.checkContent()}">Favourite</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div
          class="*** googlelocator-aside-body *** relative w-full p-6 xt-overflow-sub overflow-y-scroll"
          data-xt-googlelocator-results
        >
          <div class="*** googlelocator-result googlelocator-result--initial *** text-xs pb-4 border-b border-gray-100">
            Insert your position and find a place near you
          </div>

          <div class="*** googlelocator-result googlelocator-result--error *** text-xs pb-4 border-b border-gray-100">
            Request timed out, retry
          </div>

          <div class="*** googlelocator-result googlelocator-result--noplace *** text-xs pb-4 border-b border-gray-100">
            Not a valid place
          </div>

          <div class="*** googlelocator-result googlelocator-result--empty *** text-xs pb-4 border-b border-gray-100">
            No place found
          </div>

          <div class="*** googlelocator-result googlelocator-result--founds *** text-xs pb-4 border-b border-gray-100">
            <span data-xt-googlelocator-results-found></span>
            places found
          </div>

          <div data-xt-googlelocator-items-container>
            <script type="text/x-template" data-xt-googlelocator-items-template>
              <div class="py-4 cursor-pointer border-b border-gray-100 transition in:border-gray-500" tabindex="-1">
                <div class="xt-list xt-list-2 flex-nowrap items-center justify-between">
                  <div class="*** googlelocator-item-content *** text-xs leading-relaxed">
                    <div class="mb-2 xt-mb-auto font-bold leading-none tracking-tight text-xl" data-xt-populate="name"></div>
                    <address class="not-italic" data-xt-populate="address"></address>
                    <div data-xt-populate="additional"></div>
                  </div>
                  <a href="#" target="_blank" rel="noopener" class="text-2xs uppercase xt-list xt-list-2 flex-col items-center" title="directions" data-xt-populate="direction">
                    ${classes.iconLocate({ classes: 'text-xl -my-1' })}
                    <span data-xt-populate="distance"></span>
                  </a>
                </div>
              </div>
            </script>
          </div>
        </div>
      </div>

      <div class="*** googlelocator-main *** relative flex-auto min-h-full md:absolute md:inset-0">
        <div class="relative w-full h-full">
          <div class="w-full h-full" data-xt-googlelocator-map></div>

          <button
            type="button"
            class="absolute z-10 top-4 left-4 xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-googlelocator-repeat-btn
          >
            Search in this area
          </button>
        </div>
      </div>

      <div
        class="${classes.loader()} bg-white bg-opacity-75 off:hidden out:pointer-events-none z-10"
        data-xt-googlelocator-loader
      >
        <span class="${classes.spinner()} w-6 h-6 text-primary-500">
          ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
        </span>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
