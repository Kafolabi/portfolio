import './App.css';
// import './components/Navigation.js'
import Navigation from './components/Navigation.js';
import Home from './components/Home.js'
import About from './components/About';
import Skills from './components/Skills.js';

function App() {
  return (
<div>
  <div className='container-fluid'>
    <Navigation />
    <Home />
    <About />
    <Skills />
    </div>
    </div>
  );
}

export default App;
