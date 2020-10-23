import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt
const spinner = require('components/snippets/spinner').default
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="listing" data-xt-infinite-scroll="{ max: 5 }">
  <div class="container">

    <div class="infinite-scroll-pre mb-4">
      <div class="list w-full flex-col list-1 items-center">
        <div>
          <button type="button" class="btn btn-md ${btnDefault()}" data-xt-infinitescroll-reset>
            Load previous pages
          </button>
        </div>
      </div>
    </div>

    <div class="listing_inner">
      <div class="row row-3" data-xt-infinite-scroll-items>

        <div class="listing_col w-full md:w-6/12 lg:w-4/12">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${img({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing_content py-4">
              <div class="listing_title h5">
                Lorem ipsum
              </div>
              <div class="listing_price h6">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col w-full md:w-6/12 lg:w-4/12">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${imgAlt({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing_content py-4">
              <div class="listing_title h5">
                Dolor sit amet
              </div>
              <div class="listing_price h6">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col w-full md:w-6/12 lg:w-4/12">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${img({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing_content py-4">
              <div class="listing_title h5">
                Consectetur
              </div>
              <div class="listing_price h6">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col w-full md:w-6/12 lg:w-4/12">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${imgAlt({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing_content py-4">
              <div class="listing_title h5">
                Adipiscing elit
              </div>
              <div class="listing_price h6">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col w-full md:w-6/12 lg:w-4/12">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${img({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing_content py-4">
              <div class="listing_title h5">
                Lorem Ipsum
              </div>
              <div class="listing_price h6">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col w-full md:w-6/12 lg:w-4/12">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${imgAlt({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing_content py-4">
              <div class="listing_title h5">
                Dolor sit amet
              </div>
              <div class="listing_price h6">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col w-full">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
            </div>
            <div class="listing_content py-4">
              <div class="listing_title h5">
                Lorem Ipsum
              </div>
              <div class="listing_price h6">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col w-full">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${imgAlt({ classes: 'object-cover object-center', ratio: '37.5%' })}
            </div>
            <div class="listing_content py-4">
              <div class="listing_title h5">
                Dolor sit amet
              </div>
              <div class="listing_price h6">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>

    <div class="infinite-scroll mt-4" data-xt-infinite-scroll-scroll>
      <div class="list w-full flex-col list-1 items-center">

        <div class="infinite-scroll--trigger">
          <button type="button" class="btn btn-md ${btnPrimary()}" data-xt-infinite-scroll-trigger>

            <span class="infinite-scroll--trigger_content">
              Show more products
            </span>

            <span class="infinite-scroll--trigger_content-nomore">
              There are no more products
            </span>

            <span class="loader infinite-scroll--spinner">
              <span class="spinner spinner-animated text-white">
                ${spinner({})}
              </span>
            </span>

          </button>
        </div>

        <div class="infinite-scroll--more h6">
          Page <span data-xt-infinite-scroll-num></span> of <span data-xt-infinite-scroll-tot></span>
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
