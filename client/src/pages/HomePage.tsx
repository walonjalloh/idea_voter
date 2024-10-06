import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <main className="bg-blue-50 max-h-full">
      <Navbar />
      <Hero />
      <Footer/>
    </main>
  );
};
export default HomePage