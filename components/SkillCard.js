import { useState } from 'react'
import ReactCardFlip from "react-card-flip"

export const SkillCard = ({ title, skills }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  function handleFlip(event) {
    event.preventDefault()
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName="w-full">
      <div
        className="flex flex-col items-stretch justify-center p-5 h-64 rounded-xl shadow-xl text-center cursor-pointer"
        style={{ backgroundColor: "var(--blue-900)" }}
        onClick={handleFlip}
      >
        <h4 className="text-3xl text-white">{title}</h4>
      </div>

      <div
        className="flex flex-col items-stretch justify-center p-5 h-64 rounded-xl shadow-xl text-center cursor-pointer"
        style={{ backgroundColor: "var(--gray-50)" }}
        onClick={handleFlip}
      >
        <h4 className="text-2xl mb-2">{title}</h4>

        <ul className="list-none">
          {skills?.map((skill, index) => (
            <li key={index} className="text-lg text-gray-700 font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </ReactCardFlip>
  )
}