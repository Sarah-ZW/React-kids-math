/* eslint-disable react/prop-types */
export function Gif({showGif, currentGif, sadGif, sadPug}) {

  return <>
  {showGif && <img className="gif" src={currentGif} alt="Random gif" />}
        {sadGif && <img className="gif" src={sadPug} alt="Sad pug" />}
  </>
}
