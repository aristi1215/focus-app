import { useSessionContext } from '@/context/SessionContext'

export const NotesQuestion = () => {
  const { session, setSession } = useSessionContext()
  return (
    <div className="h-full">
      <div className="text-center">
        <h2 className="font-semibold text-lg">Any additional notes?</h2>
        <p className="text-[#737373]">Optional - skip if you prefer</p>
      </div>
      <textarea
        name="additionalNotes"
        id="additionalNotes"
        value={session.notes || ''}
        onChange={(e) => setSession({ ...session, notes: e.target.value })}
        placeholder="Went well?, Any specific distraction?, What could be improved?"
        className="w-full h-[75%] rounded-lg bg-[#F3F3F5] appearance-none border-none outline-none resize-none p-1 mt-3"
      ></textarea>
    </div>
  )
}
