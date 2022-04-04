export const SkillChip = ({ skillName, backgroundColor }) => {
  return (
    <span
      className="text-sm xl:text-base font-semibold rounded-full shadow px-4 py-2 transition transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
      style={{ backgroundColor: backgroundColor }}
    >
      {skillName}
    </span>
  )
}