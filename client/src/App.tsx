import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Signin from "./components/Sigin";
import SignUp from "./components/SignUp";
import AuthLayout from "./components/AuthLayout";
import AddIdea from "./components/AddIdea";
import ViewIdea from "./components/ViewIdea";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>

          {/* Non Protected Route  */}
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Hero />} />
          <Route path="/viewidea" element={<ViewIdea />} />

            {/* Protcted Route  */}
          <Route element={<AuthLayout />}>
            <Route path="/addidea" element={<AddIdea />} />
          </Route>

        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
