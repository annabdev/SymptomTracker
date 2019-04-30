import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import Register from './Register';


function Routing() {
    return (
        <Router>
            <Switch>

                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                

            </Switch>
        </Router>
    );
}

export default Routing;