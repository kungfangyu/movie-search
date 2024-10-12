/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-12 16:24:13
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-12 18:16:16
 * @FilePath: /movie-search/src/interface/MovieInterface.ts
 */
export interface MovieI {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export interface MovieDetailsI {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  backdrop_path: string;
  overview: string;
  genres: GenresI[];
}

interface GenresI {
  id: string;
  name: string;
}

export interface CastMemberI {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}
