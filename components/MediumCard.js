export const MediumCard = ({ className }) => {
  return (
    <div className={"flex flex-col items-center justify-center rounded-2xl p-5 m-auto border shadow-xl text-center transform hover:shadow-lg hover:translate-y-1 transition duration-200 " + className}>
      <div
        className="w-20 md:w-24 xl:w-28 h-20 md:h-24 xl:h-28 mb-6 bg-cover bg-center rounded-full"
        style={{ backgroundImage: "url(/images/medium-photo.jpeg)" }}
      />
      
      <h3 className="mb-2 text-lg md:text-xl xl:text-2xl font-bold">
        Ruan Scherer
      </h3>
      
      <p className="mb-4 text-base md:text-lg xl:text-xl font-medium">
        Full Stack Developer. Passionate about technology. Let's talk?
      </p>
      
      <a
        href="https://medium.com/@ruan.vscherer"
        target="_blank"
        className="text-gray-200 text-base md:text-lg font-medium font-medium shadow-lg rounded-full px-4 py-1 duration-200 hover:opacity-90"
        style={{ backgroundColor: "var(--dark-blue-900)" }}
      >
        Go to Ruan's Medium
      </a>
    </div>
  )
}
