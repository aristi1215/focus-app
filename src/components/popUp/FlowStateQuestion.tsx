
export const FlowStateQuestion = () => {
  return (
      <div>
        <h4>¿Did you reach a flow state?</h4>
        <p>Feeling completely inmersed and energized</p>
        <div className="flex gap-3 ">
          <button className="w-16 h-16 border border-black flex flex-col justify-center items-center">
            <img src="" alt="" />
            <p>Yes</p>
          </button>
          <button className="w-16 h-16 border border-black flex flex-col justify-center items-center">
            <img src="" alt="" />
            <p>no</p>
          </button>
        </div>
        <div className="flex ">
          <button className="w-full">back</button>
          <button className="w-full">Next</button>
        </div>
      </div>
  )
}
