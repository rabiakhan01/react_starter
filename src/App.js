import './App.css';
import '../src/assets/fonts/fonts.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
function App() {
  return (
    <div className='pl-20'>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
    </div>
  );
}

export default App;