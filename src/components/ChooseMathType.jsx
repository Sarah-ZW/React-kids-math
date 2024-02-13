import { useContext } from "react"
import { MathTypeContext } from "../App"

export function ChooseMathType() {
  const { mathType, setMathType } = useContext(MathTypeContext)

  return (
    <div id="chooseMathType" className="flex">
      <button
        onClick={() => setMathType({ type: "addition", operation: "+" })}
        className={`${mathType.type == "addition" && "active"} button`}
      >
        Addition
      </button>
      <button
        onClick={() => setMathType({ type: "subtraction", operation: "-" })}
        className={`${mathType.type == "subtraction" && "active"} button`}
      >
        Subtraction
      </button>
      <button
        onClick={() => setMathType({ type: "multiplication", operation: "x" })}
        className={`${mathType.type == "multiplication" && "active"} button`}
      >
        Multiplication
      </button>
      <button
        onClick={() => setMathType({ type: "division", operation: "/" })}
        className={`${mathType.type == "division" && "active"} button`}
      >
        Division
      </button>
    </div>
  )
}
