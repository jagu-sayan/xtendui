import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt
const spinner = require('components/snippets/spinner').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="block-listing"
    data-xt-infinitescroll="{ max: 2 }">
  <div class="container">
  
    <div class="block-listing_inner">
      <div class="row"
        data-xt-infinitescroll-items>

        <div class="block-listing_col">
          <a href="#" class="block-listing_item">
            <div class="block-listing_img">
              ${img({ classes: 'media-cover' })}
            </div>
            <div class="block-listing_content">
              <div class="block-listing_title">
                Lorem ipsum
              </div>
              <div class="block-listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="block-listing_item">
            <div class="block-listing_img">
              ${imgAlt({ classes: 'media-cover' })}
            </div>
            <div class="block-listing_content">
              <div class="block-listing_title">
                Dolor sit amet
              </div>
              <div class="block-listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="block-listing_item">
            <div class="block-listing_img">
              ${img({ classes: 'media-cover' })}
            </div>
            <div class="block-listing_content">
              <div class="block-listing_title">
                Consectetur
              </div>
              <div class="block-listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="block-listing_item">
            <div class="block-listing_img">
              ${imgAlt({ classes: 'media-cover' })}
            </div>
            <div class="block-listing_content">
              <div class="block-listing_title">
                Adipiscing elit
              </div>
              <div class="block-listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="block-listing_item">
            <div class="block-listing_img">
              ${img({ classes: 'media-cover' })}
            </div>
            <div class="block-listing_content">
              <div class="block-listing_title">
                Lorem Ipsum
              </div>
              <div class="block-listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
            <a href="#" class="block-listing_item">
              <div class="block-listing_img">
                ${imgAlt({ classes: 'media-cover' })}
              </div>
              <div class="block-listing_content">
                <div class="block-listing_title">
                  Dolor sit amet
                </div>
                <div class="block-listing_price">
                  3.772,00 €
                </div>
              </div>
            </a>
        </div>

      </div>
    </div>
    
    <div class="infinite-scroll"
       data-xt-infinitescroll-scroll>
      <div class="list-block">
        <div class="infinite-scroll--trigger">
          <button type="button" class="btn btn-default"
                  data-xt-infinitescroll-trigger>
            <span class="content">
              Show more products
            </span>
            <span class="content-nomore">
              There are no more products
            </span>
            <span class="loader loader-spinner infinite-scroll--spinner">
              <span class="spinner">
                ${spinner({})}
              </span>
            </span>
          </button>
        </div>
        <div class="infinite-scroll--more">
          Page <span data-xt-infinitescroll-num></span> of <span data-xt-infinitescroll-tot></span>
        </div>
      </div>
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
