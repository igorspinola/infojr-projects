import { useState } from 'react'
import {Zero, One, Two, Three, Four, Five, Six} from '../assets/images/index.ts'
import Word from './Word.tsx'

export default function Game(params:type) {
  const [index, setIndex] = useState(0)
  const [startGame, setStartGame] = useState(false)
  const [lettersArray, setLettersArray] = useState([])
  const [gameWon, setGameWon] = useState(false)
  const [gameLost, setGameLost] = useState(false)
  const [text, setText] = useState("")
  const imagesArray = [Zero, One, Two, Three, Four, Five, Six]
  const word = "tomada"

  const handleStart = () => {
    setStartGame(true)
  }

  const startAgain = () => {
    setIndex(0)
    setStartGame(false)
    setLettersArray([])
    setGameWon(false)
    setGameLost(false)
  }

  const handleSubmit = () => {
    const input = document.querySelector("input")
    const array = []
    for (let i = 0; i < word.length; i++) {
      const letter = word.charAt(i)
      if (lettersArray.length == 0) {
        if (input.value == letter) {
          array.push(letter)
        } else {
          array.push(" ")
        }
      } else {
        if (input.value == letter || lettersArray[i] != " ") {
          array.push(letter)
        } else {
          array.push(" ")
        }
      }
    }
    if (array.join("") == word) {
      setGameWon(true)
      setText("") 
    }

    if (!word.includes(input.value)) {
      if (index == 5) {
        setGameLost(true)
        setText("") 
      }
      const newIndex = index + 1
      setIndex(newIndex) 
    }

    setLettersArray(array)


    input.value = ""
  }


  if (startGame && !gameLost && !gameWon) {
    return(
      <>
        <h1>Jogo em Andamento</h1>
        <img src={imagesArray[index]} alt="hangman"/>
        <div className="card">
          <form onSubmit={ e => { 
            e.preventDefault()
            handleSubmit()
            }
          }>
            <input type="text" maxLength="1" name="letter" className="myInput"/>
          </form>

          <Word lettersArray={lettersArray} />
        </div>
        <h1>{text}</h1>
      </>
    )
  }
  if (gameWon) {
    return(
      <>
        <h1>Você Ganhou</h1>
        <img src={imagesArray[index]} alt="hangman"/>
        <div className="card">
          <button className="myInputAgain" onClick={startAgain}>
            Jogar Novamente
          </button>
          <Word lettersArray={lettersArray} />
        </div>
        <h1>{text}</h1>
      </>
    )
  }
  if (gameLost) {
    return(
      <>
        <h1>Você Perdeu</h1>
        <img src={imagesArray[index]} alt="hangman"/>
        <div className="card">
          <button className="myInputAgain" onClick={startAgain}>
            Jogar Novamente
          </button>
          <Word lettersArray={lettersArray} />
        </div>
        <h1>{text}</h1>
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
    </>
  )
  
}
