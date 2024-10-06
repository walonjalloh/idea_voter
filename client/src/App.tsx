
import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AddIdeaPage from "./pages/AddIdeaPage"
import ViewIdeaPage from "./pages/ViewIdeaPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"


function App(){
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/addidea' element={<AddIdeaPage/>}/>
      <Route path='/viewidea' element={<ViewIdeaPage/>}/>
      <Route path='/signin' element={<SignInPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
  )
}
export default App