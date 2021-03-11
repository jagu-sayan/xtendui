import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div class="xt-badge ${classes.badgeSm()} ${classes.badgeDefault()}">
    Small
  </div>

  <div class="xt-badge ${classes.badgeMd()} ${classes.badgeDefault()}">
    Medium
  </div>

  <div class="xt-badge ${classes.badgeLg()} ${classes.badgeDefault()}">
    Large
  </div>

</div>
`
