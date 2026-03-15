import { useSessionContext } from '@/context/SessionContext'
import { WORK_TYPES } from '@/data/work_types'

export const TypeWorkQuestion = () => {
  const { session, setSession } = useSessionContext()
  return (
    <div className="text-center">
      <div>
        <h2 className="font-semibold text-lg mb-1 ">What type of work?</h2>
        <p className="text-[#737373] mb-4 ">Select the type of work</p>
      </div>
      <div className="grid grid-cols-3 gap-3 ">
        {WORK_TYPES.map((workType) => (
          <button
            className={`p-4 border border-[#737373]/50 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-xs sm:text-sm rounded-xl ${session.work_type === workType.id ? 'bg-black text-white' : ''}`}
            onClick={() => setSession({ ...session, work_type: workType.id })}
          >
            {workType.work_type}
          </button>
        ))}
      </div>
    </div>
  )
}
