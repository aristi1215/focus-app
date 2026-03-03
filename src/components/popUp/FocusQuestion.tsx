export const FocusQuestion = () => {
  return (
    <div  className="flex flex-col h-full text-center gap-10">
      <div>
        <h2 className="font-semibold text-lg" >How focused were you?</h2>
        <p className="text-[#737373]">Rate your concentration level</p>
      </div>
      <div className="flex justify-evenly">
        {[...Array(5)].map((_, i) => (
          <button className="text-black rounded-full border border-[#737373]/50 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer w-10 h-10 p-8 flex items-center justify-center">
            <p className="text-2xl ">{i+1}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <p className="text-[#737373]">Low</p>
        <p className="text-[#737373]">High</p>
      </div>
    </div>
  )
}
