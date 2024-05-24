import { useState } from 'react'
import image from '../assets/images/0.jpg'

export default function Game(params:type) {
  const [count, setCount] = useState(0)
  const [startGame, setStartGame] = useState(false)

  const handleStart = () => {
    const newCount = count + 1
    setCount(newCount)

    setStartGame(true)
  }
    


  if (startGame) {
    return(
      <>
        <h1>Começou o jogo</h1>
        <img src={image} alt="hangman"/>
        <div className="card">
          <input type="text" maxlength="1" name="letter" className="myInput"/>
        </div>
        count is {count}
      </>
    )
  }


  return(
    <>
      <h1>Jogo da Forca</h1>
      <img src={image} alt="hangman"/>
      <div className="card">
        <button className="myInput" onClick={handleStart}>
          Jogar
        </button>
      </div>
      count is {count}
    </>
  )
  
}

// function handleStart {
// // set state to initiate game
//   // set state to save game number and index
//   
// }
