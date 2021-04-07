import React from 'react'
export default function component() {
  return (
    <div>
      <div
        className="xt-list xt-list-3 items-center"
        data-xt-tooltip="{ elements: '.xt-tooltip-item', targets: '.xt-tooltip', delay: 25 }">
        <div className="xt-tooltip-item">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-duration="300">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div className="xt-tooltip-item">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-duration="300">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0">
              Consectetur adipiscing elit
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
