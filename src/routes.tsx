import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import { ListController } from "./pages/movie-page/movie-listing-container";
import { ItemController } from "./pages/movie-page/movie-details-container";

export const Routes = () => {
  return <BrowserRouter>
    <React.Fragment>
     <Header />
      <Route path="/" exact={true} component={ListController} />
      <Route path="/:movieId" component={ItemController} />
    </React.Fragment>
  </BrowserRouter>;
};