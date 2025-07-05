import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education/index";
import Skills from "./components/Skills/";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div style={{ height: "64px" }}></div>
      <ToastContainer />
      <Hero />
      <About />
      <Education />

      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
