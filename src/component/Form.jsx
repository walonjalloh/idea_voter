import PropTypes from 'prop-types'

function Form({ handleSubmit, handleChange, showform}) {
  return (
    <div>
    {showform && (
      <form  action="" onSubmit={handleSubmit} className="flex my-12 flex-1 justify-center border-[4px] bg-white border-black flex-col mx-5 py-4 rounded-xl">
      <label className="text-center font-bold text-2xl text-pretty text-black">Add Idea</label>
      <label htmlFor="title" className="text-2xl font-bold mx-2 text-black ">Title</label>
      <input type="text" name='title' onChange={handleChange} placeholder="Title" required className="border-2 border-black mx-2 bg-inherit rounded-lg py-2 px-2 font-semibold my-1" />
      <label htmlFor="for description" className="text-2xl font-bold mx-2 text-black">Description</label>
      <input type="text" onChange={handleChange}  name="description" placeholder="Description" required className="border-2 border-black mx-2 bg-inherit rounded-lg py-6 px-2 font-semibold"/>
      <button className="border-2 border-black my-4 rounded-full text-black md:mx-56 mx-4 py-2" type="submit">Submit</button>
    </form>
    )}
    
  </div>
  )
}

export default Form

Form.propTypes = {
  handleSubmit : PropTypes.string,
  handleChange : PropTypes.string,
  showform : PropTypes.string
}