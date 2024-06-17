// eslint-disable-next-line react/prop-types
export function LevelStats({
  begAddLevel,
  begDivLevel,
  begMulLevel,
  begSubLevel,
//   streakRef
}) {
  return (
    <>
      <h2 className="levels">Levels</h2>
      {/* <p>Current Streak: {streakRef}</p> */}
      <p>Beginner Addition: {begAddLevel}</p>
      <p>Beginner Subtraction: {begSubLevel}</p>
      <p>Beginner Multiplication: {begMulLevel}</p>
      <p>Beginner Division: {begDivLevel}</p>
    </>
  )
}
