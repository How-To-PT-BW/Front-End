import React, { useState, Fragment }from 'react';
import './App.css';
import LoginForm from './components/Login';
import SignUpForm from './components/Signup';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import DraftForm from './components/DraftAnArticle';
import TopBarBlock from './styledComponents/topbarblock';
import Step from './components/Step';


// staging

function App() {
  const [steps,setSteps] = useState([])
  return (
    
    
    <Router>
      <TopBarBlock/>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/DraftAnArticle">Create</Link>
      </nav>
      <div>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <ProtectedRoute exact path="/draft" component={DraftForm} />
          <Route path="/DraftAnArticle" render={props => <DraftForm {...props}/>}/>
          <Route exact path="/Step/:id" render={props => <Step {...props} steps={steps} setSteps={setSteps}/>}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
