import "./styles.css"
import { Modal } from "./Modal"
import { useState } from "react"

function App() {
const [showModal, setShowModal] = useState(false)

  return (
    <>
    <button onClick={() => setShowModal( (showModal) => !showModal) }>Show Custom Modal</button>
    <br />
    <button>Show Dialog Modal</button>

    
    <Modal showModal = {showModal} setShowModal={setShowModal}>
    <p>This is a <strong>CUSTOM</strong> modal</p>
          <button onClick={() => setShowModal( showModal => !showModal)}>Close</button>
    </Modal>
    </>
  )
}

export default App
