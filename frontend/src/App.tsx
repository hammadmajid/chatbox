import { useState } from 'react'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='space-y-6'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Count is {count}
        </h1>
        <div className='flex gap-2 justify-center'>
          <Button variant="secondary" onClick={() => setCount((count) => count - 1)}>
            Decrement
          </Button >
          <Button onClick={() => setCount((count) => count + 1)}>
            Increment
          </Button >
        </div>
      </div>
    </>
  )
}

export default App
