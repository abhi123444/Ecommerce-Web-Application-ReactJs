import './App.css';
import Header from './Components/Header' 
import Popups from './Components/Popups'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home'
import Cart from './Components/Cart'
import Login from './Components/Login'
import Orders from './Components/Orders'
import { useStateValue } from './Components/stateProvider';
import {auth} from './firebase'
import { useEffect } from 'react';
function App() { 
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      auth.onAuthStateChanged(function(data) {
          console.log(data);
          if(data){
              dispatch({
                  type: 'SET_USER',
                  user: data
              })
          }else{
              dispatch({
                  type: 'SET_USER',
                  user: null
              })
          }
          
      })
  },[])
  return (
    <>
      <div className="app" >
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="app_navbar">
                <Header />
                <Popups />
              </div>
              <Home />
            </Route>
            <Route path="/cart">
              <div className="app_navbar">
                <Header />
              </div>
              <Cart />
            </Route>
            <Route path="/order">
              <div className="app_navbar">
                <Header />
              </div>
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
