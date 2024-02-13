import { useContext, useEffect, useRef, useState } from "react"
import { MathTypeContext, SkillContext } from "../App"
import amazingGif from '../assets/amazing.gif'
import balloonsGif from '../assets/balloons.gif'
import cactusGif from '../assets/cactus.gif'
import carltonGif from '../assets/carlton.gif'
import catGif from '../assets/cat.gif'
import charlieBrownGif from '../assets/charlieBrown.gif'
import confettiGif from '../assets/confetti.gif'
import ducksGif from '../assets/ducks.gif'
import highFiveGif from '../assets/highFive.gif'
import monstersGif from '../assets/monsters.gif'
import oprahGif from '../assets/oprah.gif'
import thumbsupGif from '../assets/thumbsup.gif'
import watermelonGif from '../assets/watermelon.gif'
import yayGif from '../assets/yay.gif';
import sadPug from '../assets/sadPug.gif';

export function CalculationForm() {
  const { skillLevel, setSkillLevel } = useContext(SkillContext)
  const { mathType, setMathType } = useContext(MathTypeContext)
  const [showGif, setShowGif] = useState(false)
  const [sadGif, setSadGif] = useState(false)
  const [currentGif, setCurrentGif] = useState('')
  const answerRef = useRef(null)

  useEffect(() => {
    answerRef.current.focus()
  }, [setSkillLevel])

  const randomNumber1 = Math.floor(Math.random() * skillLevel.multiplier)
  const randomNumber2 = Math.floor(Math.random() * skillLevel.multiplier)
  const operation = mathType.operation
  const divisibleNumber = generateDivisibleNumber()
  
  
  const gifs = [
    amazingGif,
    balloonsGif,
    cactusGif,
    carltonGif,
    catGif,
    charlieBrownGif,
    confettiGif,
    ducksGif,
    highFiveGif,
    monstersGif,
    oprahGif,
    thumbsupGif,
    watermelonGif,
    yayGif
  ];


    const getRandomGif = () => {
      const randomIndex = Math.floor(Math.random() * gifs.length);
      setCurrentGif(gifs[randomIndex]);
    }
    
  function generateDivisibleNumber() {
    let divisibleNumber
    do {
      divisibleNumber = generateRandomNumber()
    } while (randomNumber1 % divisibleNumber != 0)
    return divisibleNumber
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * skillLevel.multiplier)
  }

  function onSubmit(e) {
    e.preventDefault()

    let correctResult
    let isCorrect

    switch (operation) {
      case "+":
        correctResult = randomNumber1 + randomNumber2
        break
      case "-":
        correctResult = randomNumber1 - randomNumber2
        break
      case "x":
        correctResult = randomNumber1 * randomNumber2
        break
      case "/":
        correctResult = randomNumber1 / divisibleNumber
        break
    }

    if (parseInt(answerRef.current.value, 10) === correctResult) {
      isCorrect = true
      getRandomGif()
      setShowGif(true)

      setTimeout(() => {
        setShowGif(false)
      }, 2000)
    } else {
      isCorrect = false
      setSadGif(true)

      setTimeout(() => {
        setSadGif(false)
      }, 2000)
    }
    answerRef.current.value = ""
    console.log(correctResult)

    if (isCorrect) {
      //setting state just to force rerender to create new random #'s
      setSkillLevel({ ...skillLevel })
    }
  }

  return (
    <>
      
      <form className="form" onSubmit={onSubmit}>
      {showGif && <img className="gif" src={currentGif} alt="Random gif" />}
      {sadGif && <img className="gif" src={sadPug} alt="Sad pug" />}
        <div className="labelInput">
          <label htmlFor="box1">Number</label>
          <input value={randomNumber1} type="number" disabled id="box1" />
        </div>

        <div className="operator">{operation}</div>

        <div className="labelInput">
          <label htmlFor="box2">Number</label>
          <input
            type="number"
            value={operation === "/" ? divisibleNumber : randomNumber2}
            disabled
            id="box2"
          />
        </div>

        <div className="operator">=</div>

        <div className="labelInput">
          <label htmlFor="answerBox">Answer</label>
          <input type="number" id="answerBox" ref={answerRef} />
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
