// import { useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// export function DialogModal({showModal, children}) {
//     const dialogRef = useRef(null)

//         useEffect(() => {
//             if (showModal) {
//                 //show
//             }
//             else {
//                 //close
//             }
//         }, [showModal])

//         return createPortal(
//         <dialog ref={dialogRef}>
//         {children}
//       </dialog>, document.querySelector("modal-container")
//     )

// }