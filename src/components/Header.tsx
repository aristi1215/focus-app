import toggleTheme from '/icons/toggleTheme.svg?url'
import Brain from '/icons/Brain.svg?url'

export default function Header() {
  return (
    <>
      <header className="p-4 flex justify-between items-center font-inter font-medium  text-black shadow-lg">
        <div className='flex items-center gap-4'>
          <img src={Brain} alt="" />
          <h2 className='text-2xl'>FocusFlow</h2>
        </div>

        <div className="flex items-center gap-10">
          <button
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            Focus
          </button>
          <button
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            Analytics
          </button>
          <button
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            Insights
          </button>
          <button>
            <img src={toggleTheme} alt="" />
          </button>
        </div>
      </header>
    </>
  )
}
