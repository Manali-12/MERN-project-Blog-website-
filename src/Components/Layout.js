import { makeStyles } from '@material-ui/core'
import { React, useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Bloglist from '../Pages/Bloglist';
import Axios from "axios";
import { API_ID, API_KEY } from "../key";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    content: {
        height: "60vh",
        margin: "4% 15% 0"
    },
    back: {
        height: "100vh",


    }
});


export default function Layout(props) {
    const { children, setrecipeList } = props;
    const history = useHistory();

    const classes = useStyles();
    const [searchInput, setsearchInput] = useState("");
    const [searchInfo, setsearchInfo] = useState();

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${API_ID}&app_key=${API_KEY}&diet=balanced&cuisineType=Asian&imageSize=REGULAR`
    async function getRecipe() {
        await Axios.get(url).then((res) => setsearchInfo(res));
        history.push("/blogs");
    }
    setrecipeList(searchInfo);
    // console.log(searchInfo)
    return (
        <div className={classes.back}>
            <Navbar setsearchInput={setsearchInput} getRecipe={getRecipe} />
            {/* <Sidebar /> */}
            <div className={classes.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
