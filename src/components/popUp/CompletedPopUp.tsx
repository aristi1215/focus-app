import { useState } from 'react'

export const CompletedPopUp = ({
  children,
  isActive,
  setPopUp,
}: {
  children: React.ReactNode[]
  isActive: boolean
  setPopUp: (val: boolean) => void
}) => {
  const [step, setStep] = useState(0)
  const totalSteps = children.length
  const finishSession = () => {
    setPopUp(false)
    setStep(0)
  }

  const isFirst = step === 0
  const isLast = step === totalSteps - 1

  return (
    <>
      {isActive ? (
        <>
          <div
            className={`bg-black fixed top-0 left-0 h-screen w-screen z-10 opacity-55`}
          ></div>

          <div
            className={`rounded-xl min-h-79 max-w-md border border-black absolute bg-white text-black flex flex-col items-center justify-center gap-3 overflow-hidden z-20 p-6`}
          >
            <header className="flex flex-col w-full items-center justify-center">
              <h3 className="font-semibold text-xl">Session Complete!🎉</h3>
              <div className="flex gap-3">
                {[...Array(totalSteps)].map((_,i) => (
                  <div className={`w-8 h-1.5 rounded-2xl mt-8 ${step==i ? "bg-black" : "bg-[#E5E5E5]"}`}></div>
                ))}
              </div>
            </header>

            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out mt-6"
                style={{ transform: `translateX(-${step * 100}%)` }}
              >
                {children.map((child, index) => (
                  <div key={index} className={`w-full shrink-0`}>
                    {child}
                  </div>
                ))}
              </div>
            </div>

            <footer className="w-full flex justify-between">
              {!isFirst && (
                <button onClick={() => setStep(step - 1)} className="w-full cursor-pointer">
                  Back
                </button>
              )}

              <button
                onClick={isLast ? finishSession : () => setStep(step + 1)}
                className={`w-full text-white rounded-xl h-9 cursor-pointer  ${isFirst ? "bg-[#8B8B8B]" : "bg-black"}`}
              >
                {isLast ? 'Finish' : 'Next'}
              </button>
            </footer>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}
