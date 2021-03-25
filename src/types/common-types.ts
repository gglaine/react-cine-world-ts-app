import { Layout } from './layout-types';

export interface Collection {
  backdrop_path: string
  id: number
  name: string
  poster_path: string
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  iso_639_1: string
  name: string
}

export type ImageWidth = "w200" | "w400";


export type Sort = "popularity.desc" | "popularity.asc"
  | "release_date.desc" | "release_date.asc"
  | "vote_average.desc" | "vote_average.asc";

export const SORTS: Sort[] = [
  "popularity.desc", "popularity.asc"
  , "release_date.desc", "release_date.asc"
  , "vote_average.desc", "vote_average.asc"
];

export interface OptionsType {
  page: number | undefined
  layout: Layout | undefined
  sort: Sort | undefined
  genrer: number | undefined
  language: string | undefined
}


export const GENRERS = [{
  id: 0,
  name: 'All',
}, {
  id: 28,
  name: 'Action',
},
{
  id: 18,
  name: 'Drama',
},
{
  id: 16,
  name: 'Animation',
},
{
  id: 53,
  name: 'Thriller',
}];

export const LANGUAGES = [{
  id: '',
  name: 'All',
}, {
  id: 'de',
  name: 'German',
}, {
  id: 'en',
  name: 'English',
}, {
  id: 'es',
  name: 'Spanish',
}];