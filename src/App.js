import React, { useEffect } from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import Login from './Login'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/userSlice'
import Signup from './Signup'

import { auth } from './firebase'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Section  from './Section';


function App() {

  
 
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (

    // BEM
    <div className="app">
       <Router>
       
         <Switch>
           
          
         <Route exact path="/signup">
            <Signup />
         </Route>
         <Route exact path="/login">
            <Login />
         </Route>
         <Route exact path="/search">
           <Header />
           <SearchPage />
           <Section />
           <Footer />
         </Route>
         <Route exact path="/">
          <Header />
          <Home />
          <Section />
          <Footer />
         </Route>
         
         </Switch>
       </Router>
    </div>
  );
}
     
export default App;
