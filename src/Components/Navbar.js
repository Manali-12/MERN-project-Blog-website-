import { React } from 'react';
import { Typography, makeStyles, TextField, createTheme, ThemeProvider, Button } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SearchIcon from '@material-ui/icons/Search';



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
                '&:after': {
                    transition: "none",
                    borderBottom: 0,
                }
            }
        }

    }
});
const useStyles = makeStyles({
    nav: {
        display: "flex",
        margin: "3% 15% 0",

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
        margin: "3% 5% 0 -10%",
        display: "flex",
        flexDirection: "column"
    },
    socio_icons: {
        color: "#295939",
        float: "right",
        margin: "5% 1% 2%",

    },
    search_div: {
        display: "flex"
    },
    btn: {
        backgroundColor: "#295939",
        color: "#FDEFEF",
        '&:hover': {
            color: "#295939",
        }
    },
    btn_link: {
        color: "#FDEFEF",
        '&:hover': {
            color: "#295939",
        }

    }
});

export default function Navbar(props) {
    const { setsearchInput, getRecipe } = props;
    const classes = useStyles();
    function handleChange(e) {
        setsearchInput(e.target.value);
    };
    function handleClick(e) {
        e.preventDefault();
        getRecipe();
    };

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
                        <div className={classes.search_div} >
                            <TextField
                                placeholder="Search by ingredient "
                                variant="filled"
                                className={classes.input}
                                onChange={(e) => handleChange(e)}
                            />
                            <Button onClick={(e) => handleClick(e)} className={classes.btn} >
                                <SearchIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </ThemeProvider>


        </>
    )
}
