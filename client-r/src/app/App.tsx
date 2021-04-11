import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Todo from '../pages/Todo/Todo';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sign_in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/sign_up">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route path="/sign_in">
                        <SignIn />
                    </Route>
                    <Route path="/sign_up">
                        <SignUp />
                    </Route>
                    <Route path="/todo">
                        <Todo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
