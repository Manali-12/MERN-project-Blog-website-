import React from 'react';
import { Typography, makeStyles, TextField, createTheme, ThemeProvider } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const theme = createTheme({
    overrides: {
        MuiInputBase: {
            input: {
                backgroundColor: "#FDEFEF",
                color: "#4AA96C",
                opacity: 1,
                textAlign: "right",
                width: "380px",
                height: "15px",
                fontWeight: 500,

            }
        },
        MuiFilledInput: {
            underline: {
                backgroundColor: "#FDEFEF",

            }
        }

    }
});
const useStyles = makeStyles({
    nav: {
        marginLeft: "240px",
        padding: "3% 5%",
        display: "flex",
    },
    heading: {
        color: "#295939",
        fontWeight: 600,
        maxWidth: "80%",
        float: "left",
    },
    heading_part: {
        color: "#FF7600"
    },
    form_div: {
        margin: "6% 5% 0 -10%"
    },
    socio_icons: {
        color: "#295939",
        float: "right",
        margin: "5% 1% 2%",

    }

});



export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={classes.nav}>
                    <Typography variant="h2" className={classes.heading}>
                        Know all the <span className={classes.heading_part} >Asian Reciepes</span> here!
                    </Typography>
                    <div className={classes.form_div}>
                        <div >
                            <InstagramIcon className={classes.socio_icons} />
                            <FacebookIcon className={classes.socio_icons} />
                            <WhatsAppIcon className={classes.socio_icons} />
                        </div>
                        <div>
                            <TextField placeholder="Search reciepes" variant="filled" className={classes.input} />
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}
