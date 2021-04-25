import React from 'react';
import { Link } from 'react-router-dom';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    })
);

const Header = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Space
                    </Typography>
                    <Button component={Link} to="/">
                        Home
                    </Button>
                    <Button component={Link} to="/sign_in">
                        Sign In
                    </Button>
                    <Button component={Link} to="/sign_up">
                        Sign Up
                    </Button>
                    <Button component={Link} to="/todo">
                        Todo
                    </Button>
                    <Button component={Link} to="/dashboard">
                        Dashboard
                    </Button>
                    <Button component={Link} to="/tic-tac-to-game">
                        TicTacToeGame
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
