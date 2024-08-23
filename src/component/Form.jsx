

function Form({ handleSubmit }) {

 
  


  return (
    <form onSubmit={handleSubmit} className="flex my-12 flex-1 justify-center border-2  border-black flex-col mx-5 py-4 my ">
      <label htmlFor="title" className="text-2xl font-bold mx-2 ">Title</label>
      <input type="text" name='title'placeholder="Title" required className="border-2 border-black mx-2 bg-inherit rounded-lg py-2 px-2 font-semibold my-1" />
      <label htmlFor="for description" className="text-2xl font-bold mx-2">Description</label>
      <input type="text" name="description" placeholder="Description" required className="border-2 border-black mx-2 bg-inherit rounded-lg py-6 px-2 font-semibold"/>
      <button className="border-2 border-black my-4 rounded-full md:mx-56 mx-4 py-2" type="submit">Submit</button>
    </form>
  )
}

export default Form