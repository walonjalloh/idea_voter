
import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AddIdeaPage from "./pages/AddIdeaPage"
import ViewIdeaPage from "./pages/ViewIdeaPage"


function App(){
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/addidea' element={<AddIdeaPage/>}/>
      <Route path='/viewidea' element={<ViewIdeaPage/>}/>
    </Routes>
  )
}
export default App