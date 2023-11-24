import { useEffect } from "react";
import { createPortal } from "react-dom"

export function Modal({showModal, setShowModal, children}) {

    useEffect(() => {
        const handleEscapeKey = (event) => {
          if (event.key === 'Escape' && showModal) {
            setShowModal(false);
          }
        };
    
        // Add event listener on mount
        document.addEventListener('keydown', handleEscapeKey);
    
        // Clean up the event listener on unmount
        return () => {
          document.removeEventListener('keydown', handleEscapeKey);
        };
      }, [showModal, setShowModal]);

    return createPortal(
        <div className={`modal-overlay ${showModal ? "show" : ""}`}>
        <div className="modal">
         {children}
        </div>
      </div>, document.querySelector("#modal-container")
    )
}