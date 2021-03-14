import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center" data-xt-toggle>
          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 0
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 1
          </button>

          <div
            className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition ease-out duration-500 opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0"
            data-xt-duration="500"
          >
            Target 0
          </div>

          <div
            className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition ease-out duration-500 opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0"
            data-xt-duration="500"
          >
            Target 1
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
