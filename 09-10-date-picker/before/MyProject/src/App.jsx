
import { useState } from "react"
import "../src/styles.css"  
import { Calendar } from "./Calendar"

function App() {
const [value, setValue] = useState(new Date())

  return (
    <Calendar value={value} onChange={setValue} />
  )
}

export default App
