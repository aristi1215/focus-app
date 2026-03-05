import type { WorkCategories } from '@/types/tabs'
import { useSessionContext } from '@/context/SessionContext'

export const TypeWorkQuestion = () => {
  const [sessionInfo, setSessionInfo] = useSessionContext()

  const categories: WorkCategories[] = [
    'Deep Work',
    'Creative Work',
    'Writing',
    'Learning/Study',
    'Coding',
    'Planning',
    'Meeting',
    'Research',
    'Other',
  ]
  return (
    <div className="text-center">
      <div>
        <h2 className="font-semibold text-lg mb-1 ">What type of work?</h2>
        <p className="text-[#737373] mb-4 ">Select the type of work</p>
      </div>
      <div className="grid grid-cols-3 gap-3 ">
        {categories.map((categorie) => (
          <button
            className={`p-4 border border-[#737373]/50 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-sm rounded-xl ${sessionInfo.typeOfWork === categorie ? "bg-black text-white" : ""}`}
            onClick={() =>
              setSessionInfo({ ...sessionInfo, typeOfWork: categorie })
            }
          >
            {categorie}
          </button>
        ))}
      </div>
    </div>
  )
}
