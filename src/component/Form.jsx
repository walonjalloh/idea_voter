

function Form() {
  return (
    <form action="/" className="flex  h-[400px] flex-1 justify-center flex-col mx-auto my ">
      <label htmlFor="title" className="text-2xl font-bold ">Title</label>
      <input type="text" placeholder="Title" required className="border-2 border-black mx-2 bg-inherit rounded-lg py-2 px-2 font-semibold my-1" />
      <label htmlFor="for description" className="text-2xl font-bold">Description</label>
      <input type="text" placeholder="Description" required className="border-2 border-black mx-2 bg-inherit rounded-lg py-6 px-2 font-semibold"/>
      <button className="border-2 border-white my-4 rounded-full mx-4 py-2" type="submit">Submit</button>
    </form>
  )
}

export default Form