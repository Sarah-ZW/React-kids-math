import { ChooseMathType } from "./ChooseMathType"
import { Pagetitle } from "./PageTitle"
import { SkillLevel } from "./SkillLevel"

export function Header() {
  return (
    <>
      <div className="Header">
        <ChooseMathType />
        <Pagetitle />
        <SkillLevel />
      </div>
    </>
  )
}
