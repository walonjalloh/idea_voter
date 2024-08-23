import { Footer, Navbar, Page } from "./component/component"


function App() {
  return (
    <div className="relative container mx-auto my-auto h-screen bg-gradient-to-r from-red-300 to-blue-40">
      <Navbar/>
      <Page/>
      <Footer/>
    </div>
  )
}

export default App