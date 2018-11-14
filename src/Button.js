import React from 'react'

class Button extends React.Component {
  render() {
    const { theme } = this.props
    return (
      <div>
        <button>hello there</button>
        <p>{theme}</p>
      </div>
    )
  }
}

export default Button
