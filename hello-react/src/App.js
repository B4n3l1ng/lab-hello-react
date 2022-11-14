import "./App.css";
import menuTopLeft from "./images/ironhack-logo-xs.png";
import menuTopRight from "./images/menu-top-xs.png";
import declarative from "./images/icon1.png";
import components from "./images/icon2.png";
import singleway from "./images/icon3.png";
import jsx from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header-img">
          <img src={menuTopLeft} alt="Top Left menu img" />
          <img src={menuTopRight} alt="Top Right menu img" />
        </div>
        <div className="App-header-text">
          <h1>Say Hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <button className="Button">Awesome!</button>
        </div>
      </div>
      <div className="App-footer">
        <div className="Section">
          <img
            src={declarative}
            alt="declarative icon"
            className="Footer-img"
          />
          <div className="Footer-text">
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
        </div>
        <div className="Section">
          <img src={components} alt="components icon" className="Footer-img" />
          <div className="Footer-text">
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
        </div>
        <div className="Section">
          <img src={singleway} alt="Single Way icon" className="Footer-img" />
          <div className="Footer-text">
            <h2>Single-Way</h2>
            <p>A set of ummutable values are passed to the components.</p>
          </div>
        </div>
        <div className="Section">
          <img src={jsx} alt="JSX icon" className="Footer-img" />
          <div className="Footer-text">
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
