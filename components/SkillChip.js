export const SkillChip = ({ skillName, backgroundColor }) => {
  return (
    <span
      className="text-sm xl:text-base font-medium rounded-full px-3 py-1"
      style={{ backgroundColor: backgroundColor }}
    >
      {skillName}
    </span>
  )
}