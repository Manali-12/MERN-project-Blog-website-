import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    cover: {
        backgroundImage: `url(${`https://st3.depositphotos.com/10614052/33692/i/450/depositphotos_336922420-stock-photo-bowl-with-boiled-rice-and.jpg`})`,
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    cover_part: {
        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(253,239,239,1) 73%)",
        height: "100%",
        width: "100%",
    },
    content: {
        color: "#295939",
        fontSize: "70px",
        textAlign: "right",
        maxWidth: "50%",
        margin: "0 3% 0 auto",
        padding: "12% 0"
    },
    content_part: {
        color: "#FF7600",
    }
});

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.cover}>
            <div className={classes.cover_part}>
                <Typography variant="h5" className={classes.content}>Count <span className={classes.content_part}>memories</span>, not calories.</Typography></div>


        </div>
    )
}
