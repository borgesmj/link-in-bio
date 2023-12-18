import { useState } from 'react'
import Picture from './Components/Picture'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='w-full md:w-1/2 lg:w-1/3 bg-[#ff0000] h-full'>
        <Picture/>
      </div>
  )
}

export default App
