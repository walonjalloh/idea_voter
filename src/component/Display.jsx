import Vote from "./Vote"
import PropTypes from 'prop-types'

function Display({ title, description, isDataDisplayed}) {
  return (
    <div className="flex flex-col flex-1  mx-2 rounded-xl border-black border-[4px]  py-4 my-4">
      {isDataDisplayed && (
         <div className="flex flex-col justify-center items-center">
         <label className="text-2xl font-bold ">Title</label>
         <h2 className="font-normal font-mono text-2xl my-2 text-center">{title}</h2>
         <label className="text-2xl font-bold">Description</label>
         <p className="font-normal font-mono text-3xl text-center ">{description}</p>
       </div>
      )}
     <div className="flex items-center justify-center my-2">
         <Vote/>
       </div>
    </div>
  )
}

export default Display

Display.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isDataDisplayed : PropTypes.string
}