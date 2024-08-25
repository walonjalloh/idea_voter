import PropTypes from 'prop-types'

function Hero({handleForm,handleShow}) {

  
  return (
    <section className=" flex flex-col justify-center items-center bg-hero-image bg-cover bg-no-repeat bg-center h-[600px]">
        <div className=" flex flex-col">
            <h1 className="font-extrabold text-center text-4xl md:text-7xl bg-gradient-to-b from-blue-400 to-green-900 text-transparent bg-clip-text my-10 ">Spark Innovation. Vote Your Ideas.</h1>
            <p className="font-bold text-md bg-gradient-to-r from-green-700 to-orange-500 text-transparent bg-clip-text  text-2xl md:text-4xl my-10 text-center">Discover the power of collective wisdom. Submit your ideas and let the community decide.</p>
        </div>
        <div>
          <a href="#form"><button className="border border-black bg-black text-white/70 px-4 py-2 lg:text-3xl rounded mx-2" onClick={handleForm}>Submit Your Idea</button></a>
          <a href='#show'><button className='border border-black bg-black text-white/70 px-4 py-2 lg:text-3xl rounded' onClick={handleShow} >View Ideas </button></a>
        </div>
    </section>
  )
}

export default Hero

Hero.propTypes = {
  handleForm : PropTypes.func.isRequired, 
  handleShow : PropTypes.func
}