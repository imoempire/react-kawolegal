import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import StartUps from "../Pages/StartUps";
import Login from '../Pages/Login';
import Register from "../Pages/Register";


const Router = () => {
    return ( 
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/startups" component={StartUps} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        </Switch>
        </BrowserRouter>

        
     );
}
 
export default Router;