
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
  //   streakRef
}) {
  return (
    <>
      <h2 className="flex-row">Levels</h2>
      <div className="flex-row">
        <div>
            <h3>Beginner</h3>
          <p>Beginner Addition: {begAddLevel}</p>
          <p>Beginner Subtraction: {begSubLevel}</p>
          <p>Beginner Multiplication: {begMulLevel}</p>
          <p>Beginner Division: {begDivLevel}</p>
        </div>
        <div>
        <h3>Intermediate</h3>
          <p>Intermediate Addition: {medAddLevel}</p>
          <p>Intermediate Subtraction: {medSubLevel}</p>
          <p>Intermediate Multiplication: {medMulLevel}</p>
          <p>Intermediate Division: {medDivLevel}</p>
        </div>
        <div>
        <h3>Advanced</h3>
          <p>Advanced Addition: {advAddLevel}</p>
          <p>Advanced Subtraction: {advSubLevel}</p>
          <p>Advanced Multiplication: {advMulLevel}</p>
          <p>Advanced Division: {advDivLevel}</p>
        </div>
      </div>
    </>
  )
}
