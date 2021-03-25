import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getMovieListUrl } from '../../api';
import { GenericViewController } 
from '../../components/generic-view-controller';
import { MovieListData, MovieMatch } from '../../types/movies-types';
import { LAYOUTS } from '../../types/layout-types';
import {
  SORTS,
  GENRERS,
  LANGUAGES,
  OptionsType,
} from '../../types/common-types';

import { getOptions, findSort, findLayout } from '../../utils/helpers';
import { MovieListingView } from './movie-listing-view';

export const ListController = (props: RouteComponentProps<MovieMatch>) => {
  const {
    page = 1,
    layout = LAYOUTS[0],
    sort = SORTS[0],
    genrer = GENRERS[0].id,
    language = LANGUAGES[0].id,
  } = getOptions(props);

  const onChangeGenerer = (genererId: number) => () =>
    changeOption({ genrer: genererId });

  const onChangeLanguage = (languageId: string) => () =>
    changeOption({ language: languageId });

  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeOption({ sort: findSort(e.target.value) });
  };

  const onChaneLayout = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeOption({ layout: findLayout(e.target.value) });
  };

  const changeOption = (newOptions: Partial<OptionsType>) => {
    const { history } = props;

    const newPage = newOptions.page || page;
    const newLayout = newOptions.layout || layout;
    const newSort = newOptions.sort || sort;
    const newGenerer =
      newOptions.genrer !== undefined ? newOptions.genrer : genrer;
    const newLanguage =
      newOptions.language !== undefined ? newOptions.language : language;

    if (history) {
      const search = [
        newPage && `page=${newPage}`,
        newLayout && `layout=${newLayout}`,
        newSort && `sort=${newSort}`,
        newGenerer && `genrer=${newGenerer}`,
        newLanguage && `language=${newLanguage}`,
      ]
        .filter((s) => s)
        .join('&');

      history.push({ pathname: '/', search: search && `?${search}` });
    }
  };
  return (
    <React.Fragment>
      <div className='list-content'>
        <div className='content'>
          <div className='left'>
            <div className='filter_panel card'>
              <div className='name'>
                <h2>Filters</h2>
              </div>
              <div className='filter'>
                <h3>Genrer</h3>
                <ul className='multi_select text'>
                  {GENRERS.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={`no_click ${
                          genrer === item.id ? 'selected' : ''
                        }`}
                        onClick={onChangeGenerer(item.id)}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className='filter'>
                <h3>Language</h3>
                <ul className='multi_select text'>
                  {LANGUAGES.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={`no_click ${
                          language === item.id ? 'selected' : ''
                        }`}
                        onClick={onChangeLanguage(item.id)}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <br />
            <div className='filter_panel card'>
              <div className='name'>
                <h2>Sort By</h2>
              </div>
              <div className='filter'>
                <select className='k-dropdown' onChange={onChangeSort}>
                  {SORTS.map((s, i) => (
                    <option key={i} value={s} selected={s === sort}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <br />
            <div className='filter_panel card'>
              <div className='name'>
                <h2>Layout Type</h2>
              </div>
              <div className='filter'>
                <br />
                {LAYOUTS.map((item, i) => {
                  return (
                    <label key={i} className='k-radio-label'>
                      <input
                        className='k-radio'
                        type='radio'
                        value={item}
                        checked={layout === item}
                        onChange={onChaneLayout}
                      />
                      {item.toUpperCase()}
                    </label>
                  );
                })}
                <br />
              </div>
            </div>
          </div>
          <div className='right'>
            <GenericViewController<MovieListData>
              url={getMovieListUrl(page, sort, genrer, language)}
              viewFn={MovieListingView(layout)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
