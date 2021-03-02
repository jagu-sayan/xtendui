import path from 'path'

const buttonDefaultDrop = require('components/snippets/classes').buttonDefaultDrop
const cardWhite = require('components/snippets/classes').cardWhite

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-drop p-4 in-drop relative inline-block" data-xt-drop="{ on: false, off: false, closeOutside: false }">
  <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${cardWhite()}">
    <nav class="xt-list flex-col">
      <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </a>
      <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
        Dolor sit
      </button>
      <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
        Amet
      </button>
    </nav>
  </div>
</div>
`
