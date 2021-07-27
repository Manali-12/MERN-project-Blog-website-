import { makeStyles, Grid, Paper } from '@material-ui/core'
import React from 'react';
import BlogCard from '../Components/BlogCard';
import ItemList from '../ItemList';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})
export default function Bloglist() {
    const classes = useStyles();
    return (
        <>

            {ItemList.map((item) =>
                <Grid container spacing={2} className={classes.root} >
                    <Grid item xs={12} md={6} lg={6} justifyContent="center">
                        <Paper ><BlogCard blogContent={item} /></Paper>
                    </Grid>
                </Grid>
            )}

        </>
    )
}
