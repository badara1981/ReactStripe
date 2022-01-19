
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import success from "./Success";
import Pay from "./Pay";
const App = () => {
      return (
            <Router>
                  <Switch>
                        <Route path="/pay">
                              <pay />
                        </Route>
                        <Route path="/success">
                              <Success />
                        </Route>
                  </Switch>
            </Router>
      );
};

export default App;