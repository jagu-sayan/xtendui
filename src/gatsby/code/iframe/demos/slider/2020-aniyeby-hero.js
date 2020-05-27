import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--2020-aniyeby-hero">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_item_cover"></div>
            <div class="slide_item_inner">
              <div class="slide_item_asset">
                <div class="slide_item_asset_inner">
                  ${img({ classes: 'media-cover' })}
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_item_cover"></div>
            <div class="slide_item_inner">
              <div class="slide_item_asset">
                <div class="slide_item_asset_inner">
                  ${imgAlt({ classes: 'media-cover' })}
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_item_cover"></div>
            <div class="slide_item_inner">
              <div class="slide_item_asset">
                <div class="slide_item_asset_inner">
                  ${img({ classes: 'media-cover' })}
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_item_cover"></div>
            <div class="slide_item_inner">
              <div class="slide_item_asset">
                <div class="slide_item_asset_inner">
                  ${imgAlt({ classes: 'media-cover' })}
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

  <div class="slider-navigation-sides slider-navigation-sides-prev" data-xt-nav="-1" aria-label="previous slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-xt-chevron-left"></span></span>
    </div>
  </div>

  <div class="slider-navigation-sides slider-navigation-sides-next" data-xt-nav="1" aria-label="next slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-xt-chevron-right"></span></span>
    </div>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
