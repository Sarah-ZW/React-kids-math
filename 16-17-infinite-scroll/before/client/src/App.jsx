import "./styles.css"
import { useCallback, useEffect, useRef, useState } from "react"
import { parseLinkHeader } from "./parseLinkHeader"

const LIMIT = 10

function App() {
  const [photos, setPhotos] = useState([])
  const nextPhotoUrlRef = useRef()
  const [isLoading, setIsLoading] = useState(false)

  async function fetchPhotos(url, {overwrite = false} = {}) {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const photos = await res.json()
      nextPhotoUrlRef.current = parseLinkHeader(res.headers.get('Link')).next
      if (overwrite) {
        setPhotos(photos) }
      else {
   setPhotos(prevPhotos => (
        [...prevPhotos, ...photos]
      ))
      }
    }
    catch (error) {
      console.error(error)
    }
    finally {
      setIsLoading(false)
    }
    
  }

 const imageRef = useCallback((image) => {
    if (image == null || nextPhotoUrlRef.current == null) return 
      const observer = new IntersectionObserver( entries => {
        if (entries[0].isIntersecting) {
          fetchPhotos(nextPhotoUrlRef.current)
          observer.unobserve(image)
        }
      })
      observer.observe(image)
  }, [])

 useEffect(() => {
  fetchPhotos(`http://localhost:3000/photos?_page=1&_limit=${LIMIT}`, {overwrite: true,})
 }, [])

  return (
    <div className="grid">
     {photos.map((photo, index) => (
      <img src={photo.url} key={photo.id} ref={index === photos.length -1 ? imageRef : undefined} />
     ))}
     {isLoading && Array.from({length: LIMIT }, (_, index) => index).map(num => {
      return <div key={num} className="skeleton">...Loading</div>
    })}  
    
     </div>
  )
}

export default App