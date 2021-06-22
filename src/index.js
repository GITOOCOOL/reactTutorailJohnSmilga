import React from 'react'

import ReactDom from 'react-dom'
const Greeting = () => {
  return (
    <div>
      <h1>this</h1> 
    </div>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))

