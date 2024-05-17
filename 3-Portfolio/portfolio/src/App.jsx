import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import avatar from './assets/Avatar.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Kevin"

  return (
    <div class="article">
      <div class="avatar-div">
        <img src={avatar} className="avatar" alt="avatar" />
      </div>
      <h1>Hello.</h1>
      <h1>My name is {name}.</h1>
      <hr/>
      <div className="card">
        <p>
          I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
        </p>
        <p>
          Right now, I'm Design Lead at <span>Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span>design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
        </p>
        <p>
          I've got some <span>work on Dribbble</span>, some previous work at <span>Saga</span> and you can find me over on twitter and sometimes <span>on Medium too</span>. I also take <span>too many photos</span>.
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <hr/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
