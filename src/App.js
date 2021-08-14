import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "./Components/Layout"

//Pages
// import About from "./Pages/About"
import Bloglist from "./Pages/Bloglist"
import Blogs from "./Pages/Blogs"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"

import details from './Details';
function App() {

  const [recipeList, setrecipeList] = useState(details);
  console.log(recipeList)
  return (
    <div className="App">

      <Router>
        <Layout setrecipeList={setrecipeList}>
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/blogs" exact ><Bloglist recipeList={recipeList} /></Route>
            <Route path="/blogs/:name" component={Blogs}></Route>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
