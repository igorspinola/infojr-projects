import { useState } from 'react'
import {Zero, One, Two, Three, Four, Five, Six} from '../assets/images/index.ts'

export default function Game(params:type) {
  const [index, setIndex] = useState(0)
  const [startGame, setStartGame] = useState(false)
  const imagesArray = [Zero, One, Two, Three, Four, Five, Six]

  const handleStart = () => {
    setStartGame(true)
  }

  const handleSubmit = () => {
    const newIndex = index + 1
    setIndex(newIndex)

    const input = document.querySelector("input")
    input.value = ""
  }


  if (startGame) {
    return(
      <>
        <h1>Começou o jogo</h1>
        <img src={imagesArray[index]} alt="hangman"/>
        <div className="card">
          <form onSubmit={ e => { 
            e.preventDefault()
            handleSubmit()
            }
          }>
            <input type="text" maxlength="1" name="letter" className="myInput"/>
          </form>
        </div>
        index is {index}
      </>
    )
  }


  return(
    <>
      <h1>Jogo da Forca</h1>
      <img src={imagesArray[index]} alt="hangman"/>
      <div className="card">
        <button className="myInput" onClick={handleStart}>
          Jogar
        </button>
      </div>
      index is {index}
    </>
  )
  
}

// function handleStart {
// // set state to initiate game
//   // set state to save game number and index
//   
// }
