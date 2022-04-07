export const Recommendation = ({ name, role, content }) => {
  return (
    <div className="px-2">
      <div className="p-6 rounded-xl text-center" style={{ backgroundColor: "#9FA5F644" }}>
        <img 
          className="w-5 md:w-6 xl:w-8 mx-auto mb-2"
          src="/images/quote.svg" 
          alt="Quote"
        />
        <h2 className="text-lg md:text-xl xl:text-2xl font-bold">{name}</h2>
        <span className="text-sm md:text-base xl:text-lg font-semibold">{role}</span>
        <p className="text-sm md:text-base xl:text-lg font-medium leading-relaxed mt-4">{content}</p>
      </div>
    </div>
  )
}
