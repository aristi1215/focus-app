import toggleTheme from '/icons/toggleTheme.svg?url'
import Brain from '/icons/Brain.svg?url'
import type { Tabs } from '@/types/tabs'

export default function Header({
  tab,
  setTab,
}: {
  tab: Tabs
  setTab: (tab: Tabs) => void
}) {
  return (
    <>
      <header className="p-4 flex justify-between items-center font-inter font-medium  text-black shadow-lg">
        <div className="flex items-center gap-4">
          <img src={Brain} alt="" />
          <h2 className="text-2xl">FocusFlow</h2>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex relative w-60">
            <div
              className="absolute inset-y-0 left-0 bg-gray-700 rounded-lg transition-transform duration-300 z-0"
              style={{
                width: `${100 / 3}%`,
                transform:
                  tab === 'focus'
                    ? 'translateX(0)'
                    : tab === 'analytics'
                    ? `translateX(${100}%)`
                    : `translateX(${200}%)`,
              }}
            />
            <button
              className={`flex-1 p-2 rounded-lg transition-colors z-10 ${
                tab === 'focus' ? 'text-white' : ''
              }`}
              onClick={() => setTab('focus')}
            >
              Focus
            </button>
            <button
              className={`flex-1 p-2 rounded-lg transition-colors z-10 ${
                tab === 'analytics' ? 'text-white' : ''
              }`}
              onClick={() => setTab('analytics')}
            >
              Analytics
            </button>
            <button
              className={`flex-1 p-2 rounded-lg transition-colors z-10 ${
                tab === 'insights' ? 'text-white' : ''
              }`}
              onClick={() => setTab('insights')}
            >
              Insights
            </button>
          </div>
          <button>
            <img src={toggleTheme} alt="" />
          </button>
        </div>
      </header>
    </>
  )
}
