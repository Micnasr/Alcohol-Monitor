import './App.css';
import Items from './components/Items'

function App() {
  return (
    <>
    <div>
        <ul class = "navbar">
        <li ><a class="active" id="first-nav" href=""><img class="navbar-icon" src="https://img.icons8.com/color/96/null/beer-glass.png"/></a></li>
        <li><a>Is it safe to drive?</a></li>
          <div class="topnav-right">
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
