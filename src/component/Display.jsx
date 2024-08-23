import Vote from "./Vote"


function Display() {
  return (
    <div className="flex flex-col flex-1 border-2 border-black mx-4 py-4 my-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold font-mono text-2xl my-2">Title</h2>
        <p className="font-bold font-mono text-3xl my-2">Descriptions</p>
      </div>
      <div className="flex items-center justify-center my-2">
        <Vote/>
      </div>
    </div>
  )
}

export default Display