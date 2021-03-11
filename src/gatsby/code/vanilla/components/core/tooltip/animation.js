import path from 'path'

const classes = require('components/snippets/classes').classes
ilename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-tooltip>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
    tooltip
  </button>

  <div class="xt-tooltip p-2 group" data-xt-duration="300">
    <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>
`
