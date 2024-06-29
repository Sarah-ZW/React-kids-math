/* eslint-disable react/prop-types */

import { useState } from "react"

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
  const [allLevelsComplete, setAllLevelsComplete] = useState(true)

  return (
    <div className="levels">
      <h2
        onClick={() => {
          setShowLevels((current) => !current)
        }}
        className="flex-row"
      >
        Levels
      </h2>
      {showLevels &&
        (!allLevelsComplete ? (
          <>
            <p className="flex-row">
              10 correct in a row advances you one level for that category
            </p>
            <p className="flex-row">
              Complete level 10 to complete the category
            </p>
            <div className="flex-row">
              <div>
                <h3>Beginner</h3>
                <p>
                  Beginner Addition:{" "}
                  {begAddLevel >= 2 ? "Complete!" : begAddLevel}
                </p>
                <p>
                  Beginner Subtraction:{" "}
                  {begSubLevel >= 2 ? "Complete!" : begSubLevel}
                </p>
                <p>
                  Beginner Multiplication:{" "}
                  {begMulLevel >= 2 ? "Complete!" : begMulLevel}
                </p>
                <p>
                  Beginner Division:{" "}
                  {begDivLevel >= 2 ? "Complete!" : begDivLevel}
                </p>
              </div>
              <div>
                <h3>Intermediate</h3>
                <p>
                  Intermediate Addition:{" "}
                  {medAddLevel >= 2 ? "Complete!" : medAddLevel}
                </p>
                <p>
                  Intermediate Subtraction:{" "}
                  {medSubLevel >= 2 ? "Complete!" : medSubLevel}
                </p>
                <p>
                  Intermediate Multiplication:{" "}
                  {medMulLevel >= 2 ? "Complete" : medMulLevel}
                </p>
                <p>
                  Intermediate Division:{" "}
                  {medDivLevel >= 2 ? "Complete" : medDivLevel}
                </p>
              </div>
              <div>
                <h3>Advanced</h3>
                <p>
                  Advanced Addition:{" "}
                  {advAddLevel >= 2 ? "Complete" : advAddLevel}
                </p>
                <p>
                  Advanced Subtraction:{" "}
                  {advSubLevel >= 2 ? "Complete" : advSubLevel}
                </p>
                <p>
                  Advanced Multiplication:{" "}
                  {advMulLevel >= 2 ? "Complete" : advMulLevel}
                </p>
                <p>
                  Advanced Division:{" "}
                  {advDivLevel >= 2 ? "Complete" : advDivLevel}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div>
            {" "}
            <p>
              &quot; You have completed all the levels! You are a champion
              rockstar with the most math power of anyone I&apos;ve seen in a
              long long time!&quot;
            </p>
          </div>
        ))}
    </div>
  )
}
