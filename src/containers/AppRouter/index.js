import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import App from "../../containers/App";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;