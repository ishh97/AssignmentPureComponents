import { useState } from 'react'

import './App.css'
import PureComp from './components/PureComp'
import RegularComp from './components/RegularComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pure Components</h1>
      <PureComp/>
      <h1>Regular Components</h1>
      <RegularComp/>
    </>
  )
}

export default App
