import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const inputDefault = require('components/snippets/classes/input-default').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-xs">

  <div class="list list-2 w-full justify-end" role="toolbar">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
      Back
    </button>

    <div class="list-inner flex-auto">
      <button type="button" class="btn text-xs py-2 px-3.5 rounded-l-md ${btnDefault()}">
        ${iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="form-item rounded-r-md ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <div class="list-inner">
      <button type="button" class="btn text-xs py-2 px-3.5 rounded-l-md ${btnDefault()}">
        Clear
      </button>
      <button type="button" class="btn text-xs py-2 px-3.5 rounded-r-md ${btnPrimary()}">
        Submit
      </button>
    </div>

  </div>
</form>
`
