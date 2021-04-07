const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--row-overflow">
    <div class="xt-row xt-row-4 xt-row-overflow">
      <div class="w-full md:w-4/12">
        <div class="xt-card rounded-md ${classes.cardDefault()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12">
        <div class="xt-card rounded-md ${classes.cardDefault()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12">
        <div class="xt-card rounded-md ${classes.cardDefault()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
