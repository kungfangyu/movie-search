/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-06 17:03:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-06 17:06:18
 * @FilePath: /movie-search/src/api/searchMovies.ts
 */
import service from "./service";

const API_KEYS = "aa0c99f432b47d03ae997e79b484a050";

export const searchMovies = async (query: string, page: number) => {
  return await service({
    url: "/search/movie",
    method: "get",
    params: {
      api_key: API_KEYS,
      query,
      page,
    },
  });
};
