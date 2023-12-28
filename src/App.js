import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar';
import Sides  from './components/Sides';
import Intro  from './components/Intro';
import About  from './components/About';
import Experience  from './components/Experience';
import Projects  from './components/Projects';
import Contact  from './components/Contacts';
import Footer  from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       
      </header>
      <Navbar/>
      <main>
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
      
      <Sides/>
      


    </div>
  );
}

export default App;
