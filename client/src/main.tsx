import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import { IdeaProvider } from './context/ideaContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
     <IdeaProvider>
     <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
     </IdeaProvider>
    </Router>
  </StrictMode>,
)
