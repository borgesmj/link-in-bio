import { useState } from 'react'
import Picture from './Components/Picture'
import Bio from './Components/Bio'
import Links from './Components/Links'
import RRSS from './Components/RRSS'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='w-full md:w-1/2 lg:w-1/3 h-full md:rounded-xl md:border-solid md:border-white md:border-[1px] md:p-4'>
        <Picture/>
        <Bio/>
        <Links/>
        <RRSS/>
      </div>
  )
}

export default App
