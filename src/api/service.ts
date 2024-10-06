/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-04 16:41:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-06 16:19:36
 * @FilePath: /movie-search/src/api/service.ts
 */
import request from "axios";

const BaseURL = "https://api.themoviedb.org/3/";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBjOTlmNDMyYjQ3ZDAzYWU5OTdlNzliNDg0YTA1MCIsIm5iZiI6MTcyODAzMTYyNi4xMDM3MzMsInN1YiI6IjY2ZmY5Y2YyNzgzMGMxMzAxZTdjYWUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GU_0KUiT0PxTzWJzBEt6-Vneza6QswH9WJD2CjIA4d0";

const service = request.create({
  baseURL: BaseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    if (token != null && typeof token != "undefined") {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
