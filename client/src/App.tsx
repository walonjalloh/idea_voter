
import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AddIdeaPage from "./pages/AddIdeaPage"


function App(){
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/addidea' element={<AddIdeaPage/>}/>
    </Routes>
  )
}
export default App