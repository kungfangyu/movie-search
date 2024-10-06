/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-04 16:41:33
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-06 16:22:12
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
      language: "en-US",
      page: 1,
    },
  });
};

export default getPopularMovies;
