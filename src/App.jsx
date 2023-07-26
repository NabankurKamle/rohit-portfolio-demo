import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Stories from "./components/Stories";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center pt-6 sm:pt-16 pb-5 px-4  md:px-32 font-Helvetica relative overflow-hidden w-[100vw] min-h-[100vh] mainBg">
      {/* <div className="fixed top-40 right-80 bg-red-500 rounded-full w-40 h-40 opacity-40" /> */}
      <Navigation />
      <div
        style={{ borderRadius: "16px 16px 0 0" }}
        className="bg-[#0F0F0Fcf] w-full backdrop-blur-[10px] py-6 sm:py-10 px-3 sm:px-5 md:p-12"
      >
        <Hero />
        <Services />
        <Testimonials />
        <Works />
        <Education />
        <Skills />
        <Portfolio />
        <Stories />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
