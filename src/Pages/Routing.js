import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Register from './Register';
import Login from './Login'


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