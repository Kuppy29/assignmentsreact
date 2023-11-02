// import logo from './logo.svg';
import './App.css';
// import { Route, Routes, Link } from 'react-router-dom';
// import Home from './Components/Home';
// import Books from './Components/Books';
// import Data from './Components/Data';

import Assignment from './Assignment/Assignment';

// import ClickEvent from './Online_React/ClickEvent';
// import HideShowPass from './Online_React/HideShow';
// import HideShow from './Online_React/HideShow';
import Profile from './Online_React/Profile';
// import State from './Online_React/State';

function App() {
  return (
    
    <>
    <Assignment />
    


    {/* <nav>
      <ul>
        <li>
          <Link to="/" onClick={Home}>Home</Link>
        </li>
        <li>
          <Link to="/" onClick={Books}>Books</Link>
        </li>
        <li>
          <Link to="/" onClick={Data}>Data</Link>
        </li>
      </ul>
    </nav> */}

   {/* <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/' element={<Books />}></Route>
    <Route path='/' element={<Data />}></Route>
   </Routes> */}


   {/* <Profile  text = "Hello  Props"  /> */}
   {/* <Profile  text = {{name:'peter'}} />        => yeh object type hai */}
    {/* <Profile  text = {{name:'peter'}} data = "Profile Data" /> */}

    {/* Class component me props kaise use kre */}
    {/* <Profile text = {{name:'Burce'}} data = "Burce Data" /> */}


     {/* <Profile /> */}
    {/* <State /> */}
    {/* <HideShowPass /> */}
    {/* <ClickEvent /> */}


    </>
  );
}

export default App;
