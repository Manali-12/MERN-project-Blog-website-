import { createTheme, Drawer, List, ListItem, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'


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
        padding: theme.spacing(8),
        backgroundColor: "#F7FBE1"

    },
    items: {
        textDecoration: "none",
        color: "#295939",
        fontSize: "20px"
    },
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
                                    Home
                                </Typography>
                            </Link>
                        </ListItem>
                        <ListItem >
                            <Link to="/about" className={classes.items}>                            <Typography variant="h6">
                                About                            </Typography>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/blogs" className={classes.items}>                            <Typography variant="h6">
                                Blogs                            </Typography>
                            </Link>
                        </ListItem>
                    </List>

                </Drawer>
            </ThemeProvider>
        </div>
    )
}
