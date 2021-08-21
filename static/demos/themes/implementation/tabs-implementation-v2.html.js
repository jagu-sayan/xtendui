const classes = require('src/gatsby/templates/snippets/classes').classes

const buttonRadius = () => `-xl`
const buttonAnim = () =>
  `transition hover:bg-white hover:text-primary-500 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500`
const cardRadius = () => `-2xl`

const html = /* HTML */ `
  <div class="demo--tabs-implementation-v2">
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <div class="max-w-xl mx-auto">
      <div data-xt-toggle="{ collapseHeight: 'targets', min: 1, queue: false, duration: 500, scrollto: 'targets' }">
        <div class="*** xt-sticky ***" data-node-sticky>
          <div
            class="xt-card rounded${cardRadius()} ${classes.textBlack()} ${classes.cardWhite()} bg-opacity-80 ${classes.bgBlur()}"
          >
            <nav class="xt-list xt-list-1 flex-col md:flex-row md:flex-nowrap p-1">
              <a
                role="button"
                class="xt-button flex-auto ${classes.buttonMd()} rounded${buttonRadius()} ${classes.buttonUpper()} ${buttonAnim()}"
                data-xt-toggle-element
                data-xt-hash="description"
              >
                Description
              </a>
              <a
                role="button"
                class="xt-button flex-auto ${classes.buttonMd()} rounded${buttonRadius()} ${classes.buttonUpper()} ${buttonAnim()}"
                data-xt-toggle-element
                data-xt-hash="features"
              >
                Features
              </a>
              <a
                role="button"
                class="xt-button flex-auto ${classes.buttonMd()} rounded${buttonRadius()} ${classes.buttonUpper()} ${buttonAnim()}"
                data-xt-toggle-element
                data-xt-hash="accessories"
                >Accessories</a
              >
            </nav>
          </div>
        </div>

        <div class="mt-3" data-node-sticky-endtrigger>
          <div class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***" data-xt-toggle-target>
            <div
              class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textBlack()} ${classes.cardWhite()}"
            >
              <div class="xt-h5">Description</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at.
                Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla
                quis tempus risus, a aliquet ligula.
              </p>
            </div>
          </div>

          <div class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***" data-xt-toggle-target>
            <div
              class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textBlack()} ${classes.cardWhite()}"
            >
              <div class="xt-h5">Features</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***" data-xt-toggle-target>
            <div
              class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textBlack()} ${classes.cardWhite()}"
            >
              <div class="xt-h5">Accessories</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at.
                Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla
                quis tempus risus, a aliquet ligula.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at.
                Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla
                quis tempus risus, a aliquet ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
  </div>
`

export const object = {
  html: html,
  container: true,
  gradient: true,
}
