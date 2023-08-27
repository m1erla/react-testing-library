import {useState} from 'react'

function Counter() {
  const [number, setNumber] = useState(0)
  return (
    <div>
       <h1>{number}</h1>
       <br />
     
     <button onClick={() => setNumber(number - 1)}>Decrease</button>
     <button onClick={() => setNumber(number + 1)}>Increase</button>
    </div>
  )
}

export default Counter