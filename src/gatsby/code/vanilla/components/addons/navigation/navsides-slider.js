import path from 'path'

const markupSlider = require('components/snippets/markup-slider').default
const indentString = require('indent-string')
const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-slider" data-xt-slider>
${indentString(markupSlider(), 2)}
  <button type="button" class="hidden md:block cursor-none z-above absolute top-0 left-0 w-24 h-full group" data-xt-nav="-1" aria-label="Previous slide" data-xt-mousefollow>
    <div class="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
      ${classes.iconArrowLeft({ classes: 'transform transition-all group-active:opacity-75 group-active:scale-75' })}
    </div>
  </button>

  <button type="button" class="hidden md:block cursor-none z-above absolute top-0 right-0 w-24 h-full group" data-xt-nav="1" aria-label="Next slide" data-xt-mousefollow>
    <div class="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
      ${classes.iconArrowRight({ classes: 'transform transition-all group-active:opacity-75 group-active:scale-75' })}
    </div>
  </button>

</div>
`
