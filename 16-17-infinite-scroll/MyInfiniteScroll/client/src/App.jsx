import { useEffect } from "react"
import { useState } from "react"
import { parseLinkHeader } from "./parseLinkHeader"

function App() {
  const [images, setImages] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  const [nextUrl, setNextUrl] = useState(
    "http://localhost:3000/photos-short-list?_page=1&_limit=15"
  )

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url)
      const jsonResponse = await response.json()
      setImages((prevImages) => [...prevImages, ...jsonResponse])

      // Parse the Link header to get the next page URL
      const linkHeader = await response.headers.get("Link")
      const nextUrlData = await parseLinkHeader(linkHeader).next

      setNextUrl(nextUrlData)
    }

    fetchData(nextUrl)
  }, [nextUrl, images])

  return (
    <>
      <div className="grid">
        {images.map((image) => (
           <img key={image.id} src={image.url} />
        ))}
      </div>
    </>
  )
}

export default App
