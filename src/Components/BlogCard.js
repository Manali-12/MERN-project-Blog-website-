import React from 'react'
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography, CardActions, makeStyles } from '@material-ui/core'
import ItemList from '../ItemList';



export default function BlogCard({ blogContent }) {
    console.log(ItemList);
    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={blogContent.title}
                        height="140"
                        image={blogContent.image}
                    ></CardMedia>
                    <CardHeader><Typography variant="h4">{blogContent.header}</Typography></CardHeader>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            {blogContent.details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="secondary">Learn More</Button>
                </CardActions>
            </Card>


        </>
    )
}
