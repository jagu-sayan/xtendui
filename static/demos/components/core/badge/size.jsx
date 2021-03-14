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
        <div className="xt-list xt-list-3 items-center">
          <div className="xt-badge text-3xs py-1 px-2 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200">Small</div>

          <div className="xt-badge text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200">Medium</div>

          <div className="xt-badge text-base py-2.5 px-4 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200">Large</div>
        </div>
      </div>
    )
  }
}

export default Demo
