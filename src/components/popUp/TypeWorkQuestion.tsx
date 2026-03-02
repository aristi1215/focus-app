
export const TypeWorkQuestion = () => {
  const categories = [
    'Deep Work',
    'Creative Work',
    'Writing',
    'Learning/Study',
    'Coding',
    'Planning',
    'Meeting',
    'Research',
    'Ohter',
  ]
  return (
    <div>
      <h2>What type of work?</h2>
      <p>Select the type of work</p>
      <div className='flex flex-wrap w-95 gap-4'>
        {categories.map(categorie => <button className='p-4 border border-gray-400 shadow-2xl rounded-xl'>{categorie}</button>)}
      </div>
    </div>
  )
}
