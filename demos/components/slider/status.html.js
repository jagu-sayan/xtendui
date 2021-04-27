const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-status">
    <div class="xt-slider">
      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-slides xt-row xt-row-4">
          <div class="xt-slide w-8/12 sm:w-6/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">1</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">2</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">3</div>
            </div>
          </div>

          <div class="xt-slide w-full">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">4</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">5</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">6</div>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">7</div>
            </div>
          </div>
        </div>

        <div class="slider-status mt-6 mx-auto px-6 max-w-4xl">
          <div class="relative">
            <div
              class="slider-status-current absolute left-0 top-0 h-0 border-t border-b border-black bg-black transition-all ease-in-out duration-500"
            ></div>
            <div class="slider-status-container h-0 w-full border-t border-b border-black border-opacity-5"></div>
          </div>
        </div>

        <nav class="xt-slider-pagination hidden">
          <button type="button" class="xt-button hidden" data-xt-pag></button>
        </nav>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
