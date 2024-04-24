import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <form action="">
        <input type="text" name='username' id='username' placeholder='username' /> <br>
        </br>
        <input type="password" name="password" id="Password" placeholder='password' /> <br>
        </br>
        <input type="submit" value="submit" />
      </form>
     </div>
    </>
  )
}

export default App
