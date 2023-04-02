import './App.css';
import About from './components/About/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import Project from './components/project/project';
import Skill from './components/skill/skill';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <About/>
     <Skill/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
