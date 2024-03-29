import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { MathTypeContext, SkillContext } from "../../App"
import sadPug from "../../assets/sadPug.gif"
import { Gif } from "./Gif/Gif"
import { getRandomGif } from "./Gif/gifUtils"

export function CalculationForm() {
  const { skillLevel, setSkillLevel } = useContext(SkillContext)
  const { mathType, setMathType } = useContext(MathTypeContext)
  const [randomNumber1, setRandomNumber1] = useState(generateRandomNumber())
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(true)
  const [triggerNewNumber, setTriggerNewNumber] = useState(true)
  const [showGif, setShowGif] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [sadGif, setSadGif] = useState(false)
  const [currentGif, setCurrentGif] = useState("")
  const answerRef = useRef(null)
  const operation = mathType.operation

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
    answerRef.current.focus()
  }, [skillLevel, mathType])

  useEffect(() => {
    if (lastAnswerCorrect) {
      setRandomNumber1(generateRandomNumber())
    }
  }, [triggerNewNumber])

  const handleRandomGif = useCallback(() => {
    setCurrentGif(getRandomGif())
  }, [])

  function generateRandomNumber() {
    return Math.floor(Math.random() * skillLevel.multiplier)
  }

  function handleLoad() {
    setLoaded(true);
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
      handleRandomGif()
      setShowGif(true)

      
    } else {
      isCorrect = false
      setLastAnswerCorrect(false)
      setSadGif(true)

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
        <Gif
          showGif={showGif}
          currentGif={currentGif}
          sadGif={sadGif}
          sadPug={sadPug}
          handleLoad = {handleLoad}
          loaded = {loaded}
          setLoaded = {setLoaded}
          setShowGif = {setShowGif}
          setSadGif={setSadGif}
        />

        <div className="firstInputs">
          <div className="labelInput">
            <label htmlFor="box1">Number</label>
            <input value={randomNumber1} type="number" disabled id="box1" />
          </div>

          <div className="operator">{operation}</div>

          <div className="labelInput">
            <label htmlFor="box2">Number</label>
            <input type="number" value={randomNumber2} disabled id="box2" />
          </div>
        </div>

        <div className="equalAnswer">
          <div className="operator">=</div>
          <div className="labelInput">
            <label htmlFor="answerBox">Answer</label>
            <input type="number" id="answerBox" ref={answerRef} />
          </div>
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
