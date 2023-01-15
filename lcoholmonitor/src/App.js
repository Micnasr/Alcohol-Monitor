import './App.css';
import Items from './components/Items'

function App() {
  return (
    <>
    <div>
        <ul className = "navbar">
        <li ><a className="active" id="first-nav" href=""><img className="navbar-icon" src="https://img.icons8.com/color/96/null/beer-glass.png"/></a></li>
        <li><a>Alcohol Monitor</a></li>
          <div className="topnav-right">
            <li><a href="https://www.linkedin.com/in/michaelnasr03/">Michael Nasr</a></li>
            <li><a href="https://www.linkedin.com/in/qasim-s-b864b61a9/">Qasim Saadat</a></li>
            <li><a href="https://www.linkedin.com/in/rahim-aziz/">Rahim Aziz</a></li>
          </div>
        </ul>      
      </div>
      <Items />
    </>
  );
}

export default App;
