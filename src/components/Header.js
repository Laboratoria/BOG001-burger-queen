import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    nav: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    marca: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.nav}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <HomeIcon fontSize="large" />
                </IconButton>
                <Typography variant="h5" className={classes.marca}>
                    BURGER Labs
                </Typography>
                <Button color="inherit">Hola ___________
                    <AccountCircleIcon />
                </Button>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default Header;