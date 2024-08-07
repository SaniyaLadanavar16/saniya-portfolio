import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import DynamicHeightComponent from "./components/DynamicHeight";
function App() {
  return (
    <div className="app z-[-1]">
      <Navbar />
      <DynamicHeightComponent>
        <Hero />
      </DynamicHeightComponent>
      <DynamicHeightComponent>
        <About />
      </DynamicHeightComponent>
      <DynamicHeightComponent>
        <Skills />
      </DynamicHeightComponent>
      <DynamicHeightComponent>
        <Projects />
      </DynamicHeightComponent>
      <DynamicHeightComponent>
        <Contacts />
      </DynamicHeightComponent>
      <Footer />
    </div>
  );
}

export default App;
