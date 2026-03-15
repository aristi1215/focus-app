import { FaRegCircleCheck, FaRegCircleXmark } from 'react-icons/fa6'
import { useSessionContext } from '@/context/SessionContext'

export const FlowStateQuestion = () => {
  const {session, setSession} = useSessionContext()

  return (
    <div className="text-center flex flex-col justify-start gap-6 items-center h-full font-inter">
      <h4 className="font-bold text-lg">¿Did you reach a flow state?</h4>
      <p className="text-subtitle-gray">
        Feeling completely <br /> inmersed and energized
      </p>
      <div className="flex gap-3 w-full">
        <button
          onClick={() =>
            setSession({ ...session, flow_reached: false })
            
          }
          className={`w-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer h-20 sm:h-25 rounded-xl border-[#D4D4D4] border flex flex-col justify-center items-center ${!session.flow_reached ? "bg-black text-white" : ""} `}
        >
          <FaRegCircleXmark size={30} />
          <p>No</p>
        </button>
        <button
          onClick={() =>
            setSession({ ...session, flow_reached: true })
            
          }
          className={`w-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer h-20 sm:h-25 rounded-xl border-[#D4D4D4] border flex flex-col justify-center items-center ${session.flow_reached ? "bg-black text-white" : ""} `}
        >
          <FaRegCircleCheck size={30} />
          <p>Yes</p>
        </button>
      </div>
    </div>
  )
}
