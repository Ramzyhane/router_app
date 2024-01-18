
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Topnav from "./components/Topnav";
import Sidemenu from "./components/Sidemenu";
import MainActivity from "./components/MainActivity";


import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";



const App = ()=> {
  return(
    <Router>
      <Topnav />
      <div className="row">
         <Sidemenu />
         <MainActivity >
            <Routes>
              <Route path="/"  element={<Homepage />}/>
              <Route path="/about"  element={<About />}/>
              <Route path="/products"  element={<Products />}/>
              <Route path="/contact"  element={<Contact />}/>
            </Routes>
         </MainActivity>
      </div>
    </Router>
  )
}
export default App;