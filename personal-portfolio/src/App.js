import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import  Auth from "./components/Authentification/Auth";
import { AboutUs, Chef, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import Login from "./components/Authentification/Login"
import Register from "./components/Authentification/Register"

import  Footer from "./container/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomOrd from './container/Laurels/CustomOrd';
import Reservation from './container/Gallery/Reservation';

function App() {
  return (
    <Router>
    <div className="App">
<Routes>
  
<Route exact path="/" element={<>  
<NavBar />
<Header />
    <AboutUs />
    <Gallery />

    <SpecialMenu />
    <Laurels />
      <Footer /></>}/>
    
  
    <Route exact path= "/auth" element={<> <Auth></Auth> </>} />
    <Route exact path="/login" element={<> <NavBar></NavBar> <Login/><Footer></Footer> </>} />
    <Route exact path="/register" element={<><NavBar></NavBar> <Register/> <Footer></Footer> </>} />
    <Route exact path="/custom" element={<><NavBar></NavBar> <CustomOrd/> <Footer></Footer> </>} />
    <Route exact path="/reservation" element={<><NavBar></NavBar> <Reservation/> <Footer></Footer> </>} />



    </Routes>
    </div>
    </Router>
  );
}

export default App;
