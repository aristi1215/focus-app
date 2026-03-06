import { FaBrain } from 'react-icons/fa'
import { MdBarChart, MdLightbulb, MdLogout } from 'react-icons/md'
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
      {/* Desktop Header */}
      <header className="hidden md:flex md:p-4 md:justify-between md:items-center md:font-inter md:font-medium md:text-black md:shadow-lg md:bg-white dark:md:bg-neutral-900 transition-colors">
        <div className="flex items-center gap-4">
          <FaBrain className="text-2xl text-blue-600" />
          <h2 className="text-2xl font-bold">FocusFlow</h2>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex relative w-60 bg-gray-200 dark:bg-neutral-700 rounded-lg p-1">
            <div
              className="absolute inset-y-1 left-1 bg-gray-700 dark:bg-neutral-600 rounded transition-transform duration-300 z-0"
              style={{
                width: `calc(${100 / 3}% - 8px)`,
                transform:
                  tab === 'focus'
                    ? 'translateX(0)'
                    : tab === 'analytics'
                      ? `translateX(calc(${100}% + 4px))`
                      : `translateX(calc(${200}% + 8px))`,
              }}
            />
            <button
              className={`flex-1 p-2 rounded transition-colors z-10 cursor-pointer font-medium ${
                tab === 'focus' ? 'text-white' : 'text-neutral-700 dark:text-neutral-300'
              }`}
              onClick={() => setTab('focus')}
            >
              Focus
            </button>
            <button
              className={`flex-1 p-2 rounded transition-colors z-10 cursor-pointer font-medium ${
                tab === 'analytics' ? 'text-white' : 'text-neutral-700 dark:text-neutral-300'
              }`}
              onClick={() => setTab('analytics')}
            >
              Analytics
            </button>
            <button
              className={`flex-1 p-2 rounded transition-colors z-10 cursor-pointer font-medium ${
                tab === 'insights' ? 'text-white' : 'text-neutral-700 dark:text-neutral-300'
              }`}
              onClick={() => setTab('insights')}
            >
              Insights
            </button>
          </div>
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-lg transition-colors">
            <MdLogout className="text-xl" />
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 transition-colors px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaBrain className="text-xl text-blue-600" />
            <h1 className="font-semibold text-neutral-900 dark:text-white">
              FocusFlow
            </h1>
          </div>
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-lg transition-colors">
            <MdLogout className="text-xl" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation (Bottom) */}
      <nav className="md:hidden fixed h-16 bottom-0 left-0 right-0 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 transition-colors z-50">
        <div className="flex h-16 justify-around">
          <button
            onClick={() => setTab('focus')}
            className={`flex flex-col items-center justify-center gap-1 flex-1 transition-colors ${
              tab === 'focus'
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-neutral-500 dark:text-neutral-400'
            }`}
          >
            <FaBrain className="text-xl" />
            <span className="text-xs font-medium">Focus</span>
          </button>
          <button
            onClick={() => setTab('analytics')}
            className={`flex flex-col items-center justify-center gap-1 flex-1 transition-colors ${
              tab === 'analytics'
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-neutral-500 dark:text-neutral-400'
            }`}
          >
            <MdBarChart className="text-xl" />
            <span className="text-xs font-medium">Analytics</span>
          </button>
          <button
            onClick={() => setTab('insights')}
            className={`flex flex-col items-center justify-center gap-1 flex-1 transition-colors ${
              tab === 'insights'
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-neutral-500 dark:text-neutral-400'
            }`}
          >
            <MdLightbulb className="text-xl" />
            <span className="text-xs font-medium">Insights</span>
          </button>
        </div>
      </nav>
    </>
  )
}
