import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="media-container" style="padding-bottom: 37.5%; min-height: 30rem">
  <div class="media-inner">
    <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt=""/>
  </div>
</div>
`
