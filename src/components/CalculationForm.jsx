import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { MathTypeContext, SkillContext } from "../App"
import amazingGif from "../assets/amazing.gif"
import balloonsGif from "../assets/balloons.gif"
import cactusGif from "../assets/cactus.gif"
import carltonGif from "../assets/carlton.gif"
import catGif from "../assets/cat.gif"
import charlieBrownGif from "../assets/charlieBrown.gif"
import confettiGif from "../assets/confetti.gif"
import ducksGif from "../assets/ducks.gif"
import highFiveGif from "../assets/highFive.gif"
import monstersGif from "../assets/monsters.gif"
import oprahGif from "../assets/oprah.gif"
import thumbsupGif from "../assets/thumbsup.gif"
import watermelonGif from "../assets/watermelon.gif"
import yayGif from "../assets/yay.gif"
import sadPug from "../assets/sadPug.gif"

export function CalculationForm() {
  const { skillLevel, setSkillLevel } = useContext(SkillContext)
  const { mathType, setMathType } = useContext(MathTypeContext)
  const [randomNumber1, setRandomNumber1] = useState(generateRandomNumber())
  // const [randomNumber2, setRandomNumber2] = useState(generateRandomNumber())
  // const [divisibleNumber, setDivisibleNumber] = useState(
  //   generateDivisibleNumber()
  // )
  // const [subtractNumber, setSubtractNumber] = useState(
  //   generateSubtractableNumber()
  // )
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(true)
  const [triggerNewNumber, setTriggerNewNumber] = useState(true)
  const [showGif, setShowGif] = useState(false)
  const [sadGif, setSadGif] = useState(false)
  const [currentGif, setCurrentGif] = useState("")
  const answerRef = useRef(null)

  const randomNumber2 = useMemo(() => {
    if (mathType.type === "division") {
      let divisibleNumber
      do {
        divisibleNumber = generateRandomNumber()
      } while (randomNumber1 % divisibleNumber !== 0)
      return divisibleNumber
    } else if (mathType.type === "subtraction") {
      let subtractableNumber = generateRandomNumber()
      if (subtractableNumber > randomNumber1) {
        const tempNumber = subtractableNumber
        subtractableNumber = randomNumber1
        setRandomNumber1(tempNumber)
      }
      return subtractableNumber
    } else {
      return generateRandomNumber()
    }
  }, [mathType, randomNumber1])

  useEffect(() => {
    answerRef.current.focus()
  }, [])

  useEffect(() => {
    setRandomNumber1(Math.floor(Math.random() * skillLevel.multiplier))
    // setRandomNumber2(Math.floor(Math.random() * skillLevel.multiplier))
    answerRef.current.focus()
  }, [skillLevel, mathType])

  useEffect(() => {
    if (lastAnswerCorrect) {
      setRandomNumber1(generateRandomNumber())
      // setRandomNumber2(generateRandomNumber())
    }
  }, [triggerNewNumber])

  // useEffect(() => {
  //   if (mathType.type === "division") {
  //     setDivisibleNumber(generateDivisibleNumber())
  //   } else if (mathType.type === "subtraction") {
  //     setSubtractNumber(generateSubtractableNumber())
  //     console.log("Im getting called")
  //   }
  // }, [triggerNewNumber, skillLevel, mathType])

  const operation = mathType.operation

  const getRandomGif = useCallback(() => {
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
      yayGif,
    ]

    const randomIndex = Math.floor(Math.random() * gifs.length)
    setCurrentGif(gifs[randomIndex])
  }, [])

  // function generateDivisibleNumber() {
  //   if (mathType.type === "division") {
  //     let divisibleNumber
  //     do {
  //       divisibleNumber = generateRandomNumber()
  //     } while (randomNumber1 % divisibleNumber != 0)
  //     return divisibleNumber
  //   }
  // }

  // function generateSubtractableNumber() {
  //   if (mathType.type === "subtraction") {
  //     let subtractableNumber = generateRandomNumber()
  //     if (subtractableNumber > randomNumber1) {
  //       const tempNumber = subtractableNumber
  //       subtractableNumber = randomNumber1
  //       setRandomNumber1(tempNumber)
  //     }
  //     return subtractableNumber
  //   }
  // }

  // the problem is things are depending on the generated random value 1 for subtraction and vision
  // could I make randomNumber2 a const and calculate it based off of randomNumber 1
  //and account for division and subtraction with if statements?

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
        correctResult = randomNumber1 / randomNumber2
        break
    }

    if (parseInt(answerRef.current.value, 10) === correctResult) {
      isCorrect = true
      setLastAnswerCorrect(true)
      setTriggerNewNumber((prevValue) => !prevValue)
      getRandomGif()
      setShowGif(true)

      setTimeout(() => {
        setShowGif(false)
      }, 2000)
    } else {
      isCorrect = false
      setLastAnswerCorrect(false)
      setSadGif(true)

      setTimeout(() => {
        setSadGif(false)
      }, 2000)
    }

    answerRef.current.value = ""
    answerRef.current.focus()

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
          <input type="number" value={randomNumber2} disabled id="box2" />
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
