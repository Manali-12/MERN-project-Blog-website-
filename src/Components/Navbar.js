import React from 'react';
import { Typography, Toolbar, makeStyles } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
        backgroundColor: "#295939"
    },
    toolbar: theme.mixins.toolbar,

}));



export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6">
                        Welcome to Kitchen Diaries!
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
