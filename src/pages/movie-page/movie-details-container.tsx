import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getMovieItemUrl } from '../../api';
import { GenericViewController } 
from '../../components/generic-view-controller';
import { MovieData, MovieMatch } from '../../types/movies-types';
import { getItemView } from './movie-details-view';

export const ItemController = (props: RouteComponentProps<MovieMatch>) => {
  const { movieId } = props.match.params;
  return (
    <GenericViewController<MovieData>
      url={getMovieItemUrl(movieId)}
      viewFn={getItemView(movieId)}
    />
  );
};
