import { makeStyles } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const useStyles = makeStyles({
    content: {
        padding: "8% 10% 10% 25%",
    },
    back: {
        height: "100vh",

    }
});

export default function Layout({ children }) {

    const classes = useStyles();
    return (
        <div className={classes.back}>
            <Navbar />
            <Sidebar />
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}
