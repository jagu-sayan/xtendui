import React from 'react'
export default function component() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full md:w-auto">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-center">
                <label className="xt-label whitespace-nowrap text-black text-opacity-75 font-semibold">
                  {' '}
                  Lorem ipsum{' '}
                </label>
              </div>

              <div className="w-full md:w-auto md:self-center">
                <input
                  type="text"
                  className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                  aria-label="Lorem ipsum"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-center">
                <label className="xt-label whitespace-nowrap text-black text-opacity-75 font-semibold">
                  {' '}
                  Dolor sit amet{' '}
                </label>
              </div>

              <div className="w-full md:w-auto md:self-center">
                <input
                  type="text"
                  className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                  aria-label="Dolor sit amet"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-center">
                <label className="xt-label whitespace-nowrap text-black text-opacity-75 font-semibold">
                  {' '}
                  Lorem ipsum{' '}
                </label>
              </div>

              <div className="w-full md:w-auto md:self-center">
                <input
                  type="text"
                  className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                  aria-label="Lorem ipsum"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-center">
                <label className="xt-label whitespace-nowrap text-black text-opacity-75 font-semibold">
                  {' '}
                  Dolor sit amet{' '}
                </label>
              </div>

              <div className="w-full md:w-auto md:self-center">
                <input
                  type="text"
                  className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                  aria-label="Dolor sit amet"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-baseline">
                <label className="xt-label whitespace-nowrap text-black text-opacity-75 font-semibold">
                  {' '}
                  Checkbox{' '}
                </label>
              </div>

              <div className="w-full md:w-10/12">
                <div className="xt-row xt-row-x-8 xt-row-y-2">
                  <div className="w-full md:w-auto">
                    <label className="xt-label-check">
                      <input
                        type="checkbox"
                        className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                        defaultChecked
                        disabled
                      />
                      <span className="xt-check-content">Lorem ipsum</span>
                    </label>
                  </div>

                  <div className="w-full md:w-auto">
                    <label className="xt-label-check">
                      <input
                        type="checkbox"
                        className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                      />
                      <span className="xt-check-content">Lorem ipsum</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-baseline">
                <label className="xt-label whitespace-nowrap text-black text-opacity-75 font-semibold"> Radio </label>
              </div>

              <div className="w-full md:w-10/12">
                <div className="xt-row xt-row-x-8 xt-row-y-2">
                  <div className="w-full md:w-auto">
                    <label className="xt-label-check">
                      <input
                        type="radio"
                        className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                        name="radio-horizontal"
                        defaultChecked
                      />
                      <span className="xt-check-content">Lorem ipsum</span>
                    </label>
                  </div>

                  <div className="w-full md:w-auto">
                    <label className="xt-label-check">
                      <input
                        type="radio"
                        className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                        name="radio-horizontal"
                      />
                      <span className="xt-check-content">Lorem ipsum</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-baseline">
                <label className="xt-label whitespace-nowrap text-black text-opacity-75 font-semibold"> Switch </label>
              </div>

              <div className="w-full md:w-10/12">
                <div className="xt-row xt-row-x-8 xt-row-y-2">
                  <div className="w-full md:w-auto">
                    <label className="xt-label-check">
                      <input
                        type="checkbox"
                        className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                      />
                      <span className="xt-check-content">Lorem ipsum</span>
                    </label>
                  </div>

                  <div className="w-full md:w-auto">
                    <label className="xt-label-check">
                      <input
                        type="radio"
                        className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                        name="switch-horizontal"
                      />
                      <span className="xt-check-content">Lorem ipsum</span>
                    </label>
                  </div>

                  <div className="w-full md:w-auto">
                    <label className="xt-label-check">
                      <input
                        type="radio"
                        className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                        name="switch-horizontal"
                      />
                      <span className="xt-check-content">Lorem ipsum</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
