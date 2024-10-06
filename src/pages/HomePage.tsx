/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-04 17:06:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-06 16:34:01
 * @FilePath: /movie-search/src/pages/HomePage.tsx
 */

import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import getPopularMovies from "../api/getMovies";
import MovieCard from "../components/MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        const results = data.data.results;
        console.log(data.data.results);
        setMovies(results);
      } catch (error) {
        console.error("fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  // if (error) {
  //   return (
  //     <Container>
  //       <Typography color="error">{error}</Typography>
  //     </Container>
  //   );
  // }

  return (
    <>
      <Container sx={{ marginTop: "64px", padding: "5px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Popular Movies
        </Typography>
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
