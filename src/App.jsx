import { Footer, Navbar, Page } from "./component/component"


function App() {
  return (
    <div className=" mx-auto my-auto bg-gradient-to-r from-red-300 to-blue-40">
      <Navbar/>
      <Page/>
      <Footer/>
    </div>
  )
}

export default App