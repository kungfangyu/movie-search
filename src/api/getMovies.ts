/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-04 16:41:33
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-12 18:15:41
 * @FilePath: /movie-search/src/api/getMovies.ts
 */
import service from "./service";

const API_KEYS = "aa0c99f432b47d03ae997e79b484a050";

const getPopularMovies = async () => {
  return await service({
    url: "/movie/popular",
    method: "get",
    params: {
      api_key: API_KEYS,
      language: "zh-TW",
      page: 1,
    },
  });
};

const getMovieDetails = async (movieId: number) => {
  return await service({
    url: `/movie/${movieId}`,
    method: "get",
    params: {
      api_key: API_KEYS,
      language: "zh-TW",
    },
  });
};

const getMovieCredits = async (movieId: number) => {
  return await service({
    url: `/movie/${movieId}/credits`,
    method: "get",
    params: {
      api_key: API_KEYS,
      language: "zh-TW",
    },
  });
};

export { getMovieCredits, getMovieDetails, getPopularMovies };
