import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import itemList from '../ItemList';
import BlogCard from '../Components/BlogCard';
import NotFound from './NotFound';



const useStyles = makeStyles({
    other_blogs: {
        margin: "2%",
    },
    others_block: {
        display: "flex",
    },
    blog_title: {
        marginBottom: "3%",
    },
    other_title: {
        margin: "3% 0",
    },
    blog_details: {
        margin: "2%",
    }
})

export default function Blogs({ match }) {
    const classes = useStyles();
    const name = match.params.name;
    const blog = itemList.find((item) => item.name === name);
    const otherBlogs = itemList.filter((item) => item.name !== name);
    if (!blog) { return <NotFound /> };

    // console.log(otherBlogs);

    return (
        <>
            <Typography variant="h2" className={classes.blog_title}>
                {blog.title}
            </Typography>
            <div className={classes.others_block}>
                <div><img src={blog.image}></img></div>
                <Typography variant="body1" className={classes.blog_details}>{blog.details}</Typography>

            </div>

            <Typography variant="h5" className={classes.other_title}>Few Other Blogs you may be interested in - </Typography>
            <div className={classes.others_block}>
                {otherBlogs.map((item) => {
                    return <div className={classes.other_blogs}><BlogCard blogContent={item} /></div>
                })}
            </div>

        </>
    )
}
