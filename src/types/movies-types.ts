import { 
    Collection, Genre, ProductionCompany, SpokenLanguage, ProductionCountry 
} from './common-types';

interface MovieBase {
    adult: boolean
    backdrop_path: string
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface MovieMatch {
    movieId: string
}

export interface MovieListResult extends MovieBase {
    genre_ids: number[]
}

export interface MovieListData {
    page: number
    results: MovieListResult[]
    total_pages: number
    total_results: number
}

// item
export interface MovieData extends MovieBase {
    belongs_to_collection: Collection
    budget: number
    genres: Genre[]
    homepage: string
    imdb_id: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
}