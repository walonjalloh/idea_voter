import { Link } from "react-router-dom"

const Hero = () => {
    return(
        <section className="my-56 md:my-80">
            <div className="flex flex-col ">
                <section>
                <h1 className="text-4xl md:text-6xl text-center font-bold mb-6">Empower Your Ideas. Cast Your Vote. Shape the Future.</h1>
                <p className="text-lg md:text-xl mb-8 text-center">Vote on groundbreaking ideas and help bring the next big innovation to life.</p>
                </section>
                <main className="flex items-center justify-center gap-5 bg-home">
                    <Link to='/addidea'><button className="border-2 border-blue-600 bg-blue-600 px-6 font-bold py-2 text-white rounded-md shadow-xl ">Add Idea</button></Link>
                    <Link to='/voteidea'><button className="border-2 border-black/30 px-4 py-2  text-black font-bold rounded-md shadow-xl ">Vote an idea</button></Link>
                </main>
            </div>
        </section>
    )
}
export default Hero