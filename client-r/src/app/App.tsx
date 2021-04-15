import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Todo from '../pages/Todo/Todo';
import Dashboard from '../pages/Dashboard/Dashboard';
import TicTacToeGame from '../pages/TicTacToe/Game';

export default class App extends React.Component {
    render() {
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
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/tic-tac-to-game">TicTacToeGame</Link>
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
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/tic-tac-to-game">
                            <TicTacToeGame />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
