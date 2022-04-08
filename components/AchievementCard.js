import { useState } from 'react'
import ReactCardFlip from "react-card-flip"

export const AchievementCard = ({ title, subtitle, content, className }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  function handleFlip(event) {
    event.preventDefault()
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      containerClassName={"w-full " + className}
    >
      <div
        className="flex flex-col items-stretch justify-center p-5 h-56 rounded-xl shadow-xl text-center cursor-pointer bg-dark-blue-900"
        style={{ color: "#9fa5f6" }}
        onClick={handleFlip}
      >
        <h4 className="text-xl md:text-2xl xl:text-3xl text-white">{title}</h4>
        <h4 className="text-base md:text-lg xl:text-xl text-gray-400">{subtitle}</h4>
      </div>

      <div
        className="flex flex-col items-stretch justify-center p-5 h-56 rounded-xl shadow-xl text-center cursor-pointer"
        style={{ backgroundColor: "var(--gray-50)" }}
        onClick={handleFlip}
      >
        <p className="text-lg text-gray-700 font-medium">
          {content}
        </p>
      </div>
    </ReactCardFlip>
  )
}