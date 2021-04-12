const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-contain-left">
    <div class="xt-slider">
      <div class="xt-slides xt-row xt-row-4">
        <div class="xt-slide w-6/12 sm:w-4/12">
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

        <div class="xt-slide w-7/12 sm:w-6/12">
          <div class="xt-card rounded-md ${classes.cardSlide()}">
            <div class="xt-h4">4</div>
          </div>
        </div>

        <div class="xt-slide w-7/12 sm:w-6/12">
          <div class="xt-card rounded-md ${classes.cardSlide()}">
            <div class="xt-h4">5</div>
          </div>
        </div>
      </div>

      <nav class="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
        <button
          type="button"
          class="xt-button text-2xs py-2 px-3.5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:px-5 on:bg-gray-400 transition-all hidden"
          data-xt-pag
          title="Slide xt-num"
        ></button>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
}
