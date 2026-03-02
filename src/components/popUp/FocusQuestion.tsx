export const FocusQuestion = () => {
  return (
    <div>
      <h2>How focused were you?</h2>
      <p>Rate your concentration level</p>
      <div className="flex justify-evenly">
        {[...Array(5)].map((_,i) => (
          <button className="text-white text-2xl">{i+1}</button>
        ))}
      </div>
      <div className="flex justify-between">
        <p>Low</p>
        <p>High</p>
      </div>
    </div>
  )
}
