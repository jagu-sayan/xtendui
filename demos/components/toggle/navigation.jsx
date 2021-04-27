import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ navigation: '[data-xt-nav]' }">
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Toggle 1
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Toggle 2
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Toggle 3
        </button>

        <button
          type="button"
          className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400"
          data-xt-nav="-1"
          title="Previous slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xt-icon text-xl -my-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <button
          type="button"
          className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400"
          data-xt-nav="1"
          title="Next slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xt-icon text-xl -my-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 0</div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 1</div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 2</div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 3</div>
      </div>
    </div>
  )
}
