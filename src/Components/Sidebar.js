import { createTheme, Drawer, List, ListItem, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
const drawerWidth = 240;
const theme = createTheme({
    typography: {
        h6: {
            fontSize: "20px"
        }
    }
});

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: "#E8EFEB"

    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: "#FDEFEF"

    },
    items: {
        textDecoration: "none",
        color: "#295939",
        fontSize: "20px"
    },
    iconStyle: {
        padding: "0 10px 0 0",
        marginBottom: "-4px",
    }
}));

export default function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Drawer variant="permanent"
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <List className={classes.content}>
                        <ListItem>
                            <Link to="/" className={classes.items}>

                                <Typography variant="h6">
                                    <HomeRoundedIcon className={classes.iconStyle} />
                                    Home
                                </Typography>
                            </Link>
                        </ListItem>
                        {/* <ListItem >
                            <Link to="/about" className={classes.items}>
                                <Typography variant="h6">
                                    <InfoRoundedIcon className={classes.iconStyle} />
                                    About
                                </Typography>
                            </Link>
                        </ListItem> */}
                        <ListItem>
                            <Link to="/blog" className={classes.items}>
                                <Typography variant="h6">
                                    <WebRoundedIcon className={classes.iconStyle} />
                                    Explore
                                </Typography>
                            </Link>
                        </ListItem>
                    </List>

                </Drawer>
            </ThemeProvider>
        </div>
    )
}
