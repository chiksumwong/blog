import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Todo from './components/Todo/Todo';
import Dashboard from './components/Dashboard/Dashboard';
import TicTacToeGame from './components/TicTacToe/Game';

const App = (): JSX.Element => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
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
            <Footer />
        </Router>
    );
};

export default App;
