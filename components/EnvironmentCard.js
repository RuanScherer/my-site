export const EnvironmentCard = ({ icon: Icon, iconBackgroundColor, name, description }) => {
  return (
    <article className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-xl transform hover:shadow-lg hover:translate-y-1 transition duration-200">
      <div
        className="flex items-center justify-center p-3 mx-auto rounded-full"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        <Icon size="25" />
      </div>
      <h3 className="text-lg md:text-xl leading-5 font-bold mt-4">{name}</h3>
      <p className="text-base md:text-lg mt-1">{description}</p>
    </article>
  )
}
