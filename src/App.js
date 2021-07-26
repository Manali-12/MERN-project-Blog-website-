import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "./Components/Layout"

//Pages
import About from "./Pages/About"
import Bloglist from "./Pages/Bloglist"
import Blogs from "./Pages/Blogs"
import Home from "./Pages/Home"


function App() {
  return (
    <div className="App">

      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/bloglist" component={Bloglist}></Route>
            <Route path="/blog" component={Blogs}></Route>
          </Switch>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
