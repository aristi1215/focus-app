import { FaRegCircleCheck,FaRegCircleXmark } from "react-icons/fa6";


export const FlowStateQuestion = () => {
  return (
      <div className="text-center flex flex-col justify-start gap-6 items-center h-full font-inter">
        <h4 className="font-bold">¿Did you reach a flow state?</h4>
        <p className="text-subtitle-gray">Feeling completely <br /> inmersed and energized</p>
        <div className="flex gap-3 w-full">
          <button className="w-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer h-25 rounded-xl border-[#D4D4D4] border flex flex-col justify-center items-center">
            <FaRegCircleXmark size={30}/>
            <p>No</p>
          </button>
          <button className="w-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer h-25 rounded-xl border-[#D4D4D4] border flex flex-col justify-center items-center">
            <FaRegCircleCheck size={30} />
            <p>Yes</p>
          </button>
        </div>
      </div>
  )
}
