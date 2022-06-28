import './App.css';
import Title from './components/Title';
import Skills from './components/Skills'
import Projects from './components/Projects';
import About from './components/About';
import Tech from './components/Tech';


function App() {
  return (
    <div>
      <Title />
      <Skills />
      <Tech />
      <Projects />
      <About />
    </div>
  );
}

export default App;