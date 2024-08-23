import Vote from "./Vote"


function Display({ title, description }) {
  return (
    <div className="flex flex-col flex-1 border-2 border-black mx-4 py-4 my-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold font-mono text-2xl my-2 border-2 px-12 rounded-full border-gray-300">{title}</h2>
        <p className="font-bold font-mono text-3xl my-2 border-2 border-gray-300 px-14 rounded-full">{description}</p>
      </div>
      <div className="flex items-center justify-center my-2">
        <Vote/>
      </div>
    </div>
  )
}

export default Display