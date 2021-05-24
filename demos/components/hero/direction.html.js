const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="hero relative overflow-hidden">
      <div class="xt-media-container bg-gray-600 w-full h-full absolute">
        <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
      </div>
      <div class="flex relative min-h-screen">
        <div
          class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left group"
        >
          <h2 class="xt-h1">Lorem ipsum dolor sit amet</h2>
          <h3 class="xt-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
          </h3>
          <a href="#" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}">
            Lorem ipsum
          </a>
        </div>
      </div>
    </div>

    <div class="hero relative overflow-hidden">
      <div class="xt-media-container bg-gray-600 w-full h-full absolute">
        <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
      </div>
      <div class="flex relative min-h-screen">
        <div
          class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left group"
        >
          <h2 class="xt-h1">Lorem ipsum dolor sit amet</h2>
          <h3 class="xt-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
          </h3>
          <a href="#" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}">
            Lorem ipsum
          </a>
        </div>
      </div>
    </div>

    <div class="hero relative overflow-hidden">
      <div class="xt-media-container bg-gray-600 w-full h-full absolute">
        <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
      </div>
      <div class="flex relative min-h-screen">
        <div
          class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:mr-0 max-w-2xl text-white xt-links-inverse text-center md:text-right group"
        >
          <h2 class="xt-h1">Lorem ipsum dolor sit amet</h2>
          <h3 class="xt-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
          </h3>
          <a href="#" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}">
            Lorem ipsum
          </a>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
