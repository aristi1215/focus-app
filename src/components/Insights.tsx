import { useState } from 'react'
import RobotAi from '/icons/robotAI.svg'
import { LuSend } from 'react-icons/lu'

export const Insights = () => {
  const [userMessage, setUserMessage] = useState('')

  const [chatBotMessages, setChatBotMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm your Focus AI assistant. I can help you understand your cognitive performance metrics and provide personalized recommendations. Try asking me about your focus patterns, best times to work, or how to improve your concentration!",
    },
  ])

  const sendMessage = (message: string) => {
    if (message.trim()) {
      setChatBotMessages([
        ...chatBotMessages,
        { sender: 'user', text: message },
      ])
      setUserMessage('') // Limpiar input
    }
  }
  // useEffect(() => {
  //   console.log(chatBotMessages)
  // }, [chatBotMessages])

  return (
    <div className="px-6 md:px-30 ">
      <h2 className="mt-4 text-lg md:mt-8 font-semibold md:text-2xl text-center">
        AI Insights
      </h2>
      <p className="text-sm md:text-[15px] text-gray-600  text-center">
        Get personalized recommendations based on your data
      </p>
      <div className="border border-[#E5E5E5] rounded-xl p-6 shadow-sm mt-4">
        <div className="overflow-y-scroll h-[60vh]">
          {chatBotMessages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 mb-4 ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`rounded-lg max-w-[95%] flex p-2 text-start ${message.sender === 'bot' ? 'bg-gray-100' : 'bg-black text-white'}`}>
                {message.sender === 'bot' && (
                  <img
                    src={RobotAi}
                    alt="AI Assistant"
                    className="w-6 h-6 p-1 bg-gray-200 rounded-full md:h-8 md:w-8 md:p-2 mr-3"
                  />
                )}
                <div>
                  <p className="text-sm md:text-[15px]">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`mt-1 ${chatBotMessages.length > 1 ? 'hidden' : ''}`}
        >
          <p className="text-gray-600 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            <button className="text-xs md:text-sm bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full cursor-pointer">
              What's my overall average?
            </button>
            <button className="text-xs md:text-sm bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full cursor-pointer">
              What's my best time to focus?
            </button>
            <button className="text-xs md:text-sm bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full cursor-pointer">
              How can I improve my concentration?
            </button>
            <button className="text-xs md:text-sm bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full cursor-pointer">
              Tell me about my flow state?
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 ">
            <textarea
              name="user-input"
              id="user-input"
              placeholder="Type your message here..."
              className="border border-[#E5E5E5] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full resize-none mt-3"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            ></textarea>
            <button
              onClick={() => sendMessage(userMessage)}
              className="hover:bg-black text-white bg-gray-400 p-2 rounded-lg px-4 py-2 mt-2 cursor-pointer"
            >
              <LuSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
