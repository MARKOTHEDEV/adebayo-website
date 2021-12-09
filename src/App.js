
import './pages/About/assets/plugins/css/bootstrap.min.css';
import './pages/About/assets/css/styles.css';
import './pages/About/assets/css/responsive.css';
import './App.css'
import Footer from './component/footer';
import Nav from './component/nav';
import Resources from './component/resources';
import Events from './pages/Events/Events';
import HomePage from './pages/Homepage/HomePage';
import Registration from "./pages/Registration/Registration"
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom'
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Preloader from './component/Preloader';
import {useState,useContext} from "react"
import { GlobalProvider,GlobalContext } from './context/GlobalState';

function App() {
const {isLoading} = useContext(GlobalContext);
// console.log(isLoading)
  return (

    <GlobalProvider>
      
        <Router>
    <div className="App">
          <Nav />
          <Preloader show={isLoading}/>
          <Switch >
              <Route exact path='/' >
                <HomePage />
              </Route>
              
                <Route path='/events'>
                  <Events />
                </Route>

                <Route path='/resources'>
                  <Resources />
                </Route>

                <Route path='/contact'>
                  <Contact/>
                </Route>

                <Route path='/about' >
                  <About />
                </Route>

                <Route path="/registration/:registration_for">
                  <Registration />
                </Route>
          </Switch>
            <Footer />
        </div>
        </Router>
    </GlobalProvider>
    
  );
}

export default App;
