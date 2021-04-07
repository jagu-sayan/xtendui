import React from 'react'
import 'xtendui/src/mousefollow'

export default function component() {
  return (
    <div>
      <div data-xt-tooltip="{ popperjs: false }" data-xt-mousefollow>
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
          mouse follow
        </button>

        <div className="xt-tooltip p-2 group xt-mousefollow" data-xt-duration="300">
          <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black -mt-1 ml-4 pointer-events-none transform transition duration-300 ease-in-out-quint opacity-0 translate-x-10 group-active:opacity-100 group-active:translate-x-0">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  )
}
