import Play from '/icons/Play.svg?url'
import { useState, useEffect } from 'react'
import { CompletedPopUp } from './popUp/CompletedPopUp'
import { FocusQuestion } from './popUp/FocusQuestion'
import { TypeWorkQuestion } from './popUp/TypeWorkQuestion'
import { NotesQuestion } from './popUp/NotesQuestion'
import { FlowStateQuestion } from './popUp/FlowStateQuestion'
import { useSessionContext } from '@/context/SessionContext'

export const Focus = () => {
  const [sessionActive, setSessionActive] = useState(false)
  const [popUpActive, setPopUpActive] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [sessionInfo, setSessionInfo] = useSessionContext()

  const finishSession = () => {
    setPopUpActive(true)
    setSessionActive(false)
    setSessionInfo({
      ...sessionInfo,
      endTime: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      duration: seconds,
    })
    setSeconds(0)
  }
  const startSession = () => {
    const currDate = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    setSessionActive(true)
    setStartDate(currDate)
    setSessionInfo({ ...sessionInfo, startTime: currDate })
  }

  // Total amount of time that has passed.
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Converting seconds to hours, minutes and seconds in the format 00.
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  // adding 0s to the left
  const format = (num: number) => String(num).padStart(2, '0')

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center gap-10 font-inter mt-8 md:mt-0 md:min-h-[90vh]">
      {sessionActive ? (
        <article className="h-full flex flex-col justify-around items-center py-20">
          <header>
            <h2 className="text-3xl font-semibold">Session in progress</h2>
            <p>Stay focused, you're doing a great job</p>
          </header>

          <main className="my-10 relative z-0">
            <div
              className="absolute z-0 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full bg-gray-600 opacity-50 p-35 animate-ping"
              style={{
                animationDuration: '2s',
              }}
            ></div>
            <div
              className="absolute z-0 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full bg-gray-600 opacity-50 p-20 animate-ping"
              style={{
                animationDuration: '2s',
              }}
            ></div>
            <h1 className="text-[4rem] text-black font-bold">
              {format(hours)}:{format(minutes)}:{format(secs)}
            </h1>
          </main>

          <footer className="flex flex-col items-center gap-3">
            <h3 className="text-gray-600 text-lg">Started at {startDate}</h3>
            <button
              onClick={finishSession}
              className="cursor-pointer flex gap-4 p-4 px-8 border border-gray-200 shadow-lg rounded-lg hover:bg-gray-200 transition-all duration-300 z-10 text-lg font-medium"
            >
              <div className="w-6 h-6 rounded-lg border-3 border-black"></div>
              End session
            </button>
          </footer>
        </article>
      ) : (
        <div className="h-full flex flex-col justify-center items-center md:gap-6">
          <h2 className="text-[24px] font-semibold md:text-4xl">
            Ready to focus?
          </h2>
          <p className="text-[16px] text-gray-500 mb-6 md:mb-0">One click to start tracking</p>
          <button
            onClick={startSession}
            className="bg-black cursor-pointer h-30 w-30 rounded-full flex flex-col items-center justify-center shadow-2xl md:h-60 md:w-60"
          >
            <img src={Play} alt="Start timer icon" className="w-10 h-10 md:w-20 md:h-20" />
            <h3 className="text-lg text-white md:text-2xl">Start</h3>
          </button>
          <div className="border border-gray-400 rounded-xl max-w-[90%] p-2 mt-10 md:p-3 md:max-w-[45%]">
            <p className="text-sm">
              <b>How it works:</b> Click start when you begin focused work.
              We'll automatically track your session.After you finish, answer a few quick questions to help improve
              your insights.
            </p>
          </div>
        </div>
      )}

      <CompletedPopUp setPopUp={setPopUpActive} isActive={popUpActive}>
        <FlowStateQuestion />
        <FocusQuestion />
        <TypeWorkQuestion />
        <NotesQuestion />
      </CompletedPopUp>
    </div>
  )
}

export default Focus
