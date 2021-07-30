import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles({
    footerText: {
        margin: "auto 45% 0 45%",
        justifyContent: "spaceBetween"

    }
})

export default function Footer() {
    const classes = useStyles();
    const year = new Date().getFullYear();
    console.log(year);
    const footer = `© ${year} Kitchen Diaries`;
    return (
        <div className={classes.footerText}>
            <Typography variant="body2" color="textSecondary">
                {footer}
            </Typography>
        </div>
    )
}
