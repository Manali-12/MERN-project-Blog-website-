import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "./Components/Layout"

//Pages
import About from "./Pages/About"
import Bloglist from "./Pages/Bloglist"
import Blogs from "./Pages/Blogs"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"


function App() {
  return (
    <div className="App">

      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/blog" exact component={Bloglist}></Route>
            <Route path="/blog/:name" component={Blogs}></Route>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
