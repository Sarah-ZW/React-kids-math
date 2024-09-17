/* eslint-disable react/prop-types */

import { useCallback, useEffect, useState } from "react"
import wonGif from "../../../assets/won.gif"

export function LevelStats({
  begAddLevel,
  begDivLevel,
  begMulLevel,
  begSubLevel,
  medAddLevel,
  medDivLevel,
  medMulLevel,
  medSubLevel,
  advAddLevel,
  advDivLevel,
  advMulLevel,
  advSubLevel,
}) {
  const [showLevels, setShowLevels] = useState(false)
  const [allLevelsComplete, setAllLevelsComplete] = useState(false)
  const [turnCarrotUp, setTurnCarrotUp] = useState(false)
  const [infoShow, setInfoShow] = useState(false)
  //put in a calculation for allLevelsComplete to change to true or maybe move this to the calculation form so you can make the form disappear

    useEffect(() => {
        const allLevelsArray = [begAddLevel,
            begDivLevel,
            begMulLevel,
            begSubLevel,
            medAddLevel,
            medDivLevel,
            medMulLevel,
            medSubLevel,
            advAddLevel,
            advDivLevel,
            advMulLevel,
            advSubLevel]

        if(allLevelsArray.every((level) => level >= 10)) {
            setAllLevelsComplete(true)
        }
    }, [begAddLevel,
        begDivLevel,
        begMulLevel,
        begSubLevel,
        medAddLevel,
        medDivLevel,
        medMulLevel,
        medSubLevel,
        advAddLevel,
        advDivLevel,
        advMulLevel,
        advSubLevel])

  return (
    <div className="levels">
      <div className="levelsWrapper">
      <h2
        onClick={() => {
          setShowLevels(current => !current)
          setTurnCarrotUp(current => !current)
        }}
        className={`header ${turnCarrotUp ? "noCarrot" : "carrot"}`}
      >
        Levels
      </h2>
      <p className="info" onClick= {() => {setInfoShow((current => !current))}}>More info</p>
      </div>
      {infoShow && 
        <>
        <p className="flex-row">
              10 correct in a row advances you one level for that category
            </p>
            <p className="flex-row">
              Complete level 10 to complete the category
            </p>
            <p className="flex-row">Current Streak refreshes after 10 correct in a row</p></>}
            
      {showLevels &&
        (!allLevelsComplete ? (
          <>
      
            <h3 className="flex-row categories">Categories</h3>
            <div className="flex-row">
              <div> 
                <p>
                  Beginner Addition:{" "}
                  {begAddLevel >= 10 ? "Complete!" : begAddLevel}
                </p>
                <p>
                  Beginner Subtraction:{" "}
                  {begSubLevel >= 10 ? "Complete!" : begSubLevel}
                </p>
                <p>
                  Beginner Multiplication:{" "}
                  {begMulLevel >= 10 ? "Complete!" : begMulLevel}
                </p>
                <p>
                  Beginner Division:{" "}
                  {begDivLevel >= 10 ? "Complete!" : begDivLevel}
                </p>
              </div>
              <div>
                <p>
                  Intermediate Addition:{" "}
                  {medAddLevel >= 10 ? "Complete!" : medAddLevel}
                </p>
                <p>
                  Intermediate Subtraction:{" "}
                  {medSubLevel >= 10 ? "Complete!" : medSubLevel}
                </p>
                <p>
                  Intermediate Multiplication:{" "}
                  {medMulLevel >= 10 ? "Complete!" : medMulLevel}
                </p>
                <p>
                  Intermediate Division:{" "}
                  {medDivLevel >= 10 ? "Complete!" : medDivLevel}
                </p>
              </div>
              <div>
                <p>
                  Advanced Addition:{" "}
                  {advAddLevel >= 10 ? "Complete!" : advAddLevel}
                </p>
                <p>
                  Advanced Subtraction:{" "}
                  {advSubLevel >= 10 ? "Complete!" : advSubLevel}
                </p>
                <p>
                  Advanced Multiplication:{" "}
                  {advMulLevel >= 10 ? "Complete!" : advMulLevel}
                </p>
                <p>
                  Advanced Division:{" "}
                  {advDivLevel >= 10 ? "Complete!" : advDivLevel}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="youWon">
            {" "}
            <h2 className="flex-row">
              &quot; You have completed all the levels!
            </h2>
            <h2 className="flex-row">
              You are a champion
              rockstar with the most math power of anyone I&apos;ve seen in a
              long long time!&quot;
            </h2>
            <img className="gif" src={wonGif}></img>
            
          </div>
        ))}
    </div>
  )
}
