export const CustomContainer = ({ children, className }) => {
  return (
    <div className={`container px-5 mx-auto ${className}`}>
      { children }
    </div>
  )
}