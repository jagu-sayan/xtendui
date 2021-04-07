const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-tooltip p-2 in-tooltip relative inline-block"
      data-xt-tooltip="{ closeOutside: false, classSkip: false }"
    >
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
