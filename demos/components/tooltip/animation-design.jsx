import React from 'react'
export default function component() {
  return (
    <div>
      <div data-xt-tooltip>
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
          tooltip
        </button>

        <div className="xt-tooltip p-2 group" data-xt-duration="300">
          <div className="xt-tooltip-inner">
            <div className="xt-design rounded-md shadow-tooltip bg-black transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0"></div>
            <div className="relative text-xs py-2 px-3.5 font-semibold text-white xt-links-inverse transition ease-out duration-300 opacity-0 group-active:opacity-100">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
