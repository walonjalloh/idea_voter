import { logo } from "../assets/assets"
import Button from "./Button"


function Navbar() {
  return (
    <header className="bg-gradient-to-r from-red-300 to-blue-400">
      <nav className="flex justify-between mx-16">
        <div className="flex justify-center  items-center">
          <img src={logo} alt="logo" className="h-[100px] w-[100px] bg-inherit mx-2" />
          <p className="text-2xl font-bold ">Idea Voter</p>
        </div>
        <div className="flex justify-center items-center"><Button/></div>
      </nav>
    </header>
  )
}

export default Navbar  