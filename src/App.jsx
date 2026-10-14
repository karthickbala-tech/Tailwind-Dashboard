import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> <div className="bg-blue-200 h-screen w-screen flex justify-center items-center">
<p className='text-4xl backdrop-blur-2xl text-blue-800 border-l-amber-50 '> Welcome </p>

    </div>
      
    </>
  )
}

export default App
