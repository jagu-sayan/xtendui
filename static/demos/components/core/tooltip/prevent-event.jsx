import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div data-xt-tooltip="{ on: 'mouseenter', off: 'mouseleave', preventEvent: true }">
          <a
            href="#tooltip-with-link-1"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            tooltip
          </a>

          <div className="xt-tooltip p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
