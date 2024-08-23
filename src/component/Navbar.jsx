import { logo } from "../assets/assets"



function Navbar() {
  return (
    <header className="0">
      <nav className="flex justify-between mx-2">
        <div className="flex justify-center  items-center">
          <img src={logo} alt="logo" className="w-12 h-12 md:h-[100px] md:w-[100px] bg-inherit mx-2" />
          <p className="md:text-2xl font-bold ">Idea Voter</p>
        </div>
        <div className="flex justify-center items-center">
          <button className="border border-black rounded-full px-6 font-bold">Add Idea</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar  