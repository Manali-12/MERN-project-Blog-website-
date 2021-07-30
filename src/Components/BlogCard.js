import React from 'react'
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography, CardActions } from '@material-ui/core'
import { Link } from 'react-router-dom';
export default function BlogCard({ blogContent }) {
    console.log(blogContent);
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
                    <CardHeader><Typography variant="h4" >{blogContent.header}</Typography></CardHeader>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" >
                            {blogContent.details[0].substring(0, 80)}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/blog/${blogContent.name}`}> <Button color="secondary">Learn More</Button></Link>
                </CardActions>
            </Card>


        </>
    )
}
