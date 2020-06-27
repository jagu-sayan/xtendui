import path from 'path'
const markupSlider = require('components/snippets/components/markup-slider').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--slider-expand"
    data-xt-slider>
  ${indentString(markupSlider(), 2)}
</div>
`
