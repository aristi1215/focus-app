import { useSessionContext } from '@/context/SessionContext'
import { WORK_LOCATIONS } from '@/data/locations.ts'

export const LocationQuestion = () => {
  const { session, setSession } = useSessionContext()
  return (
    <div className="text-center">
      <div>
        <h2 className="font-semibold text-lg mb-1 ">What type of work?</h2>
        <p className="text-[#737373] mb-4 ">Select the type of work</p>
      </div>
      <div className="grid grid-cols-3 gap-3 ">
        {WORK_LOCATIONS.map((workLocation) => (
          <button
            className={`p-4 border border-[#737373]/50 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-xs sm:text-sm rounded-xl ${session.locations === workLocation.id ? 'bg-black text-white' : ''}`}
            onClick={() => setSession({ ...session, locations: workLocation.id })}
          >
            {workLocation.name}
          </button>
        ))}
      </div>
    </div>
  )
}
  