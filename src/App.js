import logo from './logo.svg';
import './App.css';
import '../src/assets/fonts/fonts.css';
import imageSource from '../src/assets/images/images';
import color, { blackColor, blue, greenColor, greenTheme, oliveColor, theme, whiteColor } from './utils/colors';
function App() {
  return (
    <div className="App">
      <nav style = {{
        color: oliveColor,
        backgroundColor: greenColor
      }}>
        <h1>Hello from navbar</h1>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React app using the tailwind css
        </a>
      </header>
      <h2>Header after the font applied</h2>
      <img src={imageSource.image1} alt='' />
      <footer >
        <h2 style={{
          backgroundColor: greenColor,
          color: oliveColor
        }}>All rights reserved by @maqware solutions</h2>
      </footer>
    </div>
  );
}

export default App;
