import { makeStyles } from '@material-ui/core'
import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const useStyles = makeStyles({
    content: {
        padding: "3% 10% 10% 20%",
        minHeight: "58vh"
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
            <Footer />
        </div>
    )
}
