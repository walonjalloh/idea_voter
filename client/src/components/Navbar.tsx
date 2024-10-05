import { Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpened, setIsOpended] = useState<boolean | null>(false)

    const handleOpen = () => {
        setIsOpended(!isOpened)
    }
    return(
        <header className="sticky top-0 z-50 mx-4 my-2 ">
            <nav className="">
                <div className="flex items-center justify-between w-full">
                    <Link to='/'><div className="text-2xl font-extrabold text-blue-700 shadow-2xl">Idea Voter</div></Link>
                    <div className="hidden md:flex gap-5 ">
                        <Link to='/signin'><button className="border-2 border-blue-600 bg-blue-600 text-white font-bold px-4 rounded-md py-2 shadow-xl">Sign in</button></Link>
                        <Link to='/signup'><button className="border-2 border-black/30 px-4 py-2 rounded-md text-black font-bold shadow-xl">Sign up</button></Link>
                    </div>
                    <div className="md:hidden">
                        <Menu onClick={handleOpen}/>
                    </div>
                </div>
            </nav>
            <div className="md:hidden w-full">
            {isOpened && (
                <div className="flex flex-col gap-2 mt-4  w-full">
                    <Link to='/signin'><button className="border-2 border-blue-600 bg-blue-600 text-white font-bold px-4 rounded-md py-2 shadow-xl w-full">sign in</button>
                    </Link>
                    <Link to='/signup'>                    <button className="border-2 border-black/30 px-4 py-2 rounded-md text-black font-bold shadow-xl w-full">sign up</button>
                    </Link>
                </div>
            )}
            </div>
        </header>
    )
}
export default Navbar