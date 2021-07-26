import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography, CardActions } from '@material-ui/core'
import React from 'react';

export default function Bloglist() {
    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Daal Makhani"
                        height="140"
                        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fdal-makhani-by-pankaj-bhadouria%2Frs53097626.cms&psig=AOvVaw0difwzQW7ntMwkrTTbiv_Z&ust=1627400336483000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPChpemIgfICFQAAAAAdAAAAABAD"

                    ></CardMedia>
                    <CardHeader><Typography variant="h4">Lajawab Dal-Makhani</Typography></CardHeader>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            Dal makhani recipe | restaurant style dal makhani recipe with detailed photo and video recipe. an ideal dal recipe which taste’s great when served with jeera rice or roti. Basically it is prepared with the combination of black urad dal and rajma beans or kidney beans. both the grains are slow cooked in a pot and added with cream or malai which adds the richness to this black dal recipe.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="secondary">Learn More</Button>
                </CardActions>
            </Card>

        </div>
    )
}
