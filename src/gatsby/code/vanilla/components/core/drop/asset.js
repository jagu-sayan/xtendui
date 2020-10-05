import path from 'path'
const img = require('components/snippets/img').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultDrop = require('components/snippets/classes/card-default-drop').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center">

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      asset
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-md ${cardDefaultDrop()}">
          <div class="btn btn-close p-5" aria-label="Close"><span class="icon-close"></span></div>
          <div class="card-asset rounded-md">
            ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      asset and text
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-md ${cardDefaultDrop()}">
          <div class="btn btn-close p-5" aria-label="Close"><span class="icon-close"></span></div>
          <div class="card-asset rounded-t-md">
            ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
          </div>
          <div class="card-block card-block-md">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
