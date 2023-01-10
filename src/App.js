import { Home } from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./Navbar";

import Navbar from "./Navbar";
import { MyWork } from "./Work";
import { About } from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/work">
              <MyWork />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// const Body = styled.div`
//   background-color: var(--peach);
// `;
