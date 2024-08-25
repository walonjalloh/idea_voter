import { Footer, Hero, Navbar, Page } from "./component/component"
import { useState } from "react";

function App() {

  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="bg-white">
      <Navbar/>
      <Hero handleForm={handleForm}/>
      <Page showform={showForm}/>
      <Footer/>
    </div>
  )
}

export default App