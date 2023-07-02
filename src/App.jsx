import "./App.css";
import Background from "./components/Background";
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
      {/* <Background /> */}
      <Navigation />
      <div
        style={{ borderRadius: "16px 16px 0 0" }}
        className="bg-[#00000070] w-full backdrop-blur-xl py-6 sm:py-10 px-3 sm:px-5 md:p-12"
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
