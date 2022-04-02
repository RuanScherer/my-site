export const SkillChip = ({ skillName, backgroundColor }) => {
  return (
    <span
      className="text-sm xl:text-base font-semibold rounded-full shadow px-4 py-2"
      style={{ backgroundColor: backgroundColor }}
    >
      {skillName}
    </span>
  )
}