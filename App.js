import React from "react";
import {Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Signin from "./Components/Signin";
import Mutton from "./Components/Mutton";
import Nav from "./Components/Nav";
import './Components/Foof.css';
function App(){
  return(
    <div>
      <ul>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/signin' element={<Signin />}></Route>
        <Route exact path='/mutton' element={<Mutton />}></Route>
        <Route exact path='/nav' element={<Nav />}></Route>
      </Routes>
    </div>
  )
}
export default App;