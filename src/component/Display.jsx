import Vote from "./Vote"


function Display({ title, description}) {
  return (
    <div className="flex flex-col flex-1  mx-2 rounded-xl border-black border-[4px]  py-4 my-4">
      <div className="flex flex-col justify-center items-center">
        <label className="text-2xl font-bold ">Title</label>
        <h2 className="font-normal font-mono text-2xl my-2 ">{title}</h2>
        <label className="text-2xl font-bold">Description</label>
        <p className="font-normal font-mono text-3xl ">{description}</p>
      </div>
      <div className="flex items-center justify-center my-2">
        <Vote/>
      </div>
    </div>
  )
}

export default Display