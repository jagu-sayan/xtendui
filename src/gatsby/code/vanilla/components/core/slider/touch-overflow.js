import path from 'path'

const markupSlider = require('components/snippets/markup-slider').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-slider demo--slider-touch-overflow" data-xt-slider="{ matches: { '(hover: none)': { disabled: true } } }">
${indentString(markupSlider(), 2)}
</div>
`
