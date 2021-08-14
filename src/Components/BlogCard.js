import React from 'react'
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, useTheme, createTheme, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    heading: {
        color: "#0A1931",
        fontSize: "1.5rem",
        padding: "0 0 10px 0"
    },
    card: {
        justifyContent: "spa"
    }
})

export default function BlogCard({ blogContent }) {

    const classes = useStyles();

    return (

        <>
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={blogContent.recipe.label}
                        height="140"
                        image={blogContent.recipe.image}
                    ></CardMedia>

                    <CardContent>
                        <Typography variant="h6" className={classes.heading} >{blogContent.recipe.label}</Typography>
                        <Typography variant="body1" color="textSecondary" >
                            {blogContent.recipe.ingredientLines[0]}, {blogContent.recipe.ingredientLines[1]}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/blog/${blogContent.recipe.label}`}> <Button color="secondary">Learn More</Button></Link>
                </CardActions>
            </Card>
        </>


    )
}
