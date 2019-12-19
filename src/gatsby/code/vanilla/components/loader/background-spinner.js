import path from 'path'
const spinner = require('components/snippets/spinner').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center justify-content-center">

  <div class="card card-default">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">
        <div class="card-block card-item">
          <div class="card-title">Lorem ipsum dolor sit amet</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
        <div class="loader loader-spinner loader-background">
          <div class="spinner">
            ${spinner({})}
          </div>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="btn btn-default">
    Lorem ipsum
    <span class="loader loader-spinner loader-background">
      <span class="spinner">
        ${spinner({})}
      </span>
    </span>
  </button>

</div>
`
