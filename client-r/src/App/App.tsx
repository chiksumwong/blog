import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Home from '.././pages/Home/Home';
import Login from '.././pages/Login/Login';
import Todo from '.././pages/Todo/Todo';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
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
                    <Route path="/login">
                        <Login />
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
