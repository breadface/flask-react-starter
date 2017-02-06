import React from 'react'
import Nav from '../example/common/Nav'

const App = ({children}) => {
  return (
    <div>
      <Nav />
      { children }
    </div>
  )
}

export default App
