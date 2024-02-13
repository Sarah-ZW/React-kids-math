import { Math } from "./components/Math"
import "./scss/styles.scss"
import { Header } from "./components/Header"
import { createContext, useState } from "react"

export const SkillContext = createContext()
export const MathTypeContext = createContext() 

function App() {
  const [skillLevel, setSkillLevel] = useState({
    skill: "beginner",
    multiplier: 10,
  })
  const [mathType, setMathType] = useState({
    type: "addition",
    operation: "+",
  })

  return (
    <MathTypeContext.Provider value={{ mathType, setMathType }}>
      <SkillContext.Provider value={{ skillLevel, setSkillLevel }}>
        <>
          <Header />
          <Math />
        </>
      </SkillContext.Provider>
    </MathTypeContext.Provider>
  )
}

export default App
