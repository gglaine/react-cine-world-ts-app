import { Sort, SORTS, ImageWidth, GENRERS, LANGUAGES } from "../types/common-types";

const APIKEY = "4a203abe54a397a3160c4eb42e275f70"

export const getMovieListUrl = (
	page: number = 1,
	sortBy: Sort = SORTS[0],
	genrer = GENRERS[0].id,
	language = LANGUAGES[0].id,
) => {
	const search: string[] = [
		`page=${page}`,
		`sort_by=${sortBy}`,
	]
	if (genrer) {
		search.push(`with_genres=${genrer}`);
	}
	if (language) {
		search.push(`with_original_language=${language}`);
	}
	return `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&` +
		`${search.filter((s) => s)
      .join('&')}`;

};

export const getMovieItemUrl = (movieId: string = "") =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}`;

export const getImageUrl = (
  imagePath: string = "/",
  width: ImageWidth = "w200"
) => `https://image.tmdb.org/t/p/${width}${imagePath}`;

