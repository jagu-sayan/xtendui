import React from 'react'
export default function component() {
  return (
    <div>
      <div data-xt-drop="{ elements: '.xt-drop-item', targets: '.xt-drop', on: 'mouseenter', off: 'mouseleave' }">
        <div className="xt-drop-item">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            mouse
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
              <nav className="xt-list flex-col">
                <a
                  href="#"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Dolor sit
                </button>
                <div data-xt-drop="{ elements: '.xt-drop-item', targets: '.xt-drop', on: 'mouseenter', off: 'mouseleave', position: 'right-start' }">
                  <div className="xt-drop-item">
                    <button
                      type="button"
                      className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                      nested
                    </button>

                    <div className="xt-drop p-4">
                      <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-white xt-links-inverse bg-primary-500">
                        <nav className="xt-list flex-col">
                          <a
                            href="#"
                            className="xt-button text-2xs py-1.5 px-6 w-full text-white font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </a>
                          <button
                            type="button"
                            className="xt-button text-2xs py-1.5 px-6 w-full text-white font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                            Dolor sit
                          </button>
                          <button
                            type="button"
                            className="xt-button text-2xs py-1.5 px-6 w-full text-white font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                            Amet
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <form className="text-sm mt-4">
        <div data-xt-drop="{ elements: ':scope > input', on: 'focus', off: false }">
          <input
            type="text"
            className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
            aria-label="Focus"
            placeholder="Focus"
          />

          <div className="xt-drop p-4">
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
              <nav className="xt-list flex-col">
                <a
                  href="#"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Dolor sit
                </button>
                <button
                  type="button"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Amet
                </button>
              </nav>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
