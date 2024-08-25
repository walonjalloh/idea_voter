import { Footer, Hero, Navbar, Page } from "./component/component"
import { useState } from "react";

function App() {

  const [showForm, setShowForm] = useState(false);
  const [isIdeaOpen, setIsIdeaOpen] = useState(false);

  const handleShow = () => {
    setIsIdeaOpen(!isIdeaOpen);
  }

  const handleForm = () => {
    setShowForm(!showForm);
  }


  return (
    <div className="bg-white">
      <Navbar/>
      <Hero handleForm={handleForm} handleShow={handleShow}/>
      <Page showform={showForm} handleShow={isIdeaOpen}/>
      <Footer/>
    </div>
  )
}

export default App