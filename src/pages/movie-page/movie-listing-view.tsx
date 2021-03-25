import * as React from "react";
import { Link } from "react-router-dom";
import { MovieListData, } from "../../types/movies-types";
import { Layout, } from "../../types/layout-types";

import { MovieListRow } from "./movie-listing-row-view";

export const MovieListingView = (layout:Layout) => (data:MovieListData) => {
  const { results = [] } = data;
  return <div className={`page_wrapper layout-${layout}`}>
    { results.map((result, i) =>
        <Link to={`/${result.id || ""}`} key={i}>
          <MovieListRow item={result} layout={layout} />
        </Link>
    )}
  </div>
}
