const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="googlelocator flex flex-wrap flex-auto flex-col md:flex-row md:min-h-screen">
      <div class="googlelocator-aside relative z-10">
        <div class="relative p-6 border-b border-gray-200">
          <form class="text-sm">
            <div class="xt-row xt-row-x-6 xt-row-y-4">
              <div class="w-full">
                <div class="xt-list flex-nowrap">
                  <div class="xt-list-inner flex-auto">
                    <input
                      type="text"
                      class="xt-input rounded-l-md ${classes.inputDefault()}"
                      aria-label="Search"
                      placeholder="Search"
                    />
                    <button
                      type="button"
                      class="button--locate xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
                    >
                      ${classes.iconLocate({ classes: 'text-xl -my-1' })}
                    </button>
                    <button
                      type="button"
                      class="button--search xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonDefault()}"
                    >
                      ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                    </button>
                  </div>
                </div>
              </div>

              <div class="w-full">
                <label class="xt-label-check">
                  <input
                    type="radio"
                    class="xt-check xt-radio rounded-full ${classes.switchDefault()}"
                    name="googlelocator-options"
                    value=""
                    checked
                  />
                  <span class="xt-check-content">All types</span>
                </label>
              </div>

              <div class="w-full">
                <label class="xt-label-check">
                  <input
                    type="radio"
                    class="xt-check xt-radio rounded-full ${classes.switchDefault()}"
                    name="googlelocator-options"
                    value="restaurant"
                  />
                  <span class="xt-check-content">Restaurant</span>
                </label>
              </div>

              <div class="w-full">
                <label class="xt-label-check" for="googlelocator-options-school">
                  <input
                    type="radio"
                    class="xt-check xt-radio rounded-full ${classes.switchDefault()}"
                    id="googlelocator-options-school"
                    name="googlelocator-options"
                    value="school"
                  />
                  <span class="xt-check-content">School</span>
                </label>
              </div>

              <div class="w-full">
                <label class="xt-label-check" for="googlelocator-options-fav">
                  <input
                    type="checkbox"
                    class="xt-check xt-switch rounded-full ${classes.switchDefault()}"
                    id="googlelocator-options-fav"
                    name="googlelocator-fav"
                    value="fav"
                  />
                  <span class="xt-check-content">Favourite</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div class="googlelocator-aside-body relative p-6">
          <div class="googlelocator-result googlelocator-result--initial text-xs pb-4 border-b border-gray-200">
            Insert your position and find a place near you
          </div>

          <div class="googlelocator-result googlelocator-result--error text-xs pb-4 border-b border-gray-200">
            Request timed out, retry
          </div>

          <div class="googlelocator-result googlelocator-result--noplace text-xs pb-4 border-b border-gray-200">
            Not a valid place
          </div>

          <div class="googlelocator-result googlelocator-result--empty text-xs pb-4 border-b border-gray-200">
            No place found
          </div>

          <div class="googlelocator-result googlelocator-result--founds text-xs pb-4 border-b border-gray-200">
            <span class="googlelocator-result--found"></span>
            places found
          </div>

          <div class="googlelocator-items mt-4">
            <script type="text/x-template">
              <div class="googlelocator-item py-4 cursor-pointer border-b border-gray-200 transition active:border-gray-600" tabindex="-1">
                <div class="xt-list xt-list-2 flex-nowrap items-center justify-between">
                  <div class="googlelocator-item-content">
                    <div class="mt-5 mb-3 xt-my-auto font-sans font-bold leading-none tracking-tight text-xl" data-xt-populate="name"></div>
                    <address class="text-sm uppercase not-italic" data-xt-populate="address"></address>
                    <div class="text-sm uppercase" data-xt-populate="additional"></div>
                  </div>
                  <a href="#" target="_blank" class="text-2xs uppercase xt-list xt-list-2 flex-col items-center" title="directions" data-xt-populate="direction">
                    ${classes.iconLocate({ classes: 'text-xl -my-1' })}
                    <span data-xt-populate="distance"></span>
                  </a>
                </div>
              </div>
            </script>
          </div>
        </div>
      </div>

      <div class="googlelocator-main relative flex-auto min-h-full md:fixed md:inset-0">
        <div class="relative w-full h-full">
          <div class="googlelocator-main-map w-full h-full"></div>

          <button
            type="button"
            class="button--repeat absolute z-10 top-4 left-4 xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
          >
            Search in this area
          </button>
        </div>
      </div>

      <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 xt-toggle">
        <span class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
          ${classes.spinner({ classes: 'animate-xt-spinner' })}
        </span>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
