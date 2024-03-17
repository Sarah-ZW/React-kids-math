import { useEffect } from "react"

/* eslint-disable react/prop-types */
export function Gif({showGif, currentGif, sadGif, sadPug, handleLoad, loaded, setLoaded, setShowGif, setSadGif}) {

  useEffect( () => {
    if(loaded) {
      setTimeout(() => {
        setShowGif(false)
        setSadGif(false)
        setLoaded(false)
      }, 2000)
    }
  },[loaded])

  return <>
  {showGif && <img className="gif" src={currentGif} alt="Random gif" onLoad={handleLoad} />}
        {sadGif && <img className="gif" src={sadPug} alt="Sad pug" onLoad={handleLoad}/>}
  </>
}
