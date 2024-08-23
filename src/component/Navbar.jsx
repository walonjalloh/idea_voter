import Button from "./Button"


function Navbar() {
  return (
    <header>
      <nav className="flex justify-between mx-16">
        <div>logo</div>
        <div><Button/></div>
      </nav>
    </header>
  )
}

export default Navbar