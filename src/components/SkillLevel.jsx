import { useContext } from "react"
import { SkillContext } from "../App"

export function SkillLevel() {
  const { skillLevel, setSkillLevel } = useContext(SkillContext)

  return (
    <div className="skillLevel">
      <button
        onClick={() => setSkillLevel({ skill: "beginner", multiplier: 10 })}
        className={`${skillLevel.skill == "beginner" && "active"} yellowBorder`}
      >
        Beginner
      </button>
      <button
        onClick={() => setSkillLevel({ skill: "intermediate", multiplier: 30 })}
        className={`${
          skillLevel.skill == "intermediate" && "active"
        } yellowBorder`}
      >
        Intermediate
      </button>
      <button
        onClick={() => setSkillLevel({ skill: "advanced", multiplier: 100 })}
        className={`${skillLevel.skill == "advanced" && "active"} yellowBorder`}
      >
        Advanced
      </button>
    </div>
  )
}
