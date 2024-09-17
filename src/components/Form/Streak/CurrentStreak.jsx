// eslint-disable-next-line react/prop-types
export function CurrentStreak({streakRef}) {
 return(
    // eslint-disable-next-line react/prop-types
    <h3 className="flex-row">Current Streak: {streakRef.current}</h3>
 )
}