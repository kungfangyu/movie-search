/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-06 16:05:56
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-06 16:33:44
 * @FilePath: /movie-search/src/components/MovieCard.tsx
 */
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

interface MovieCardProps {
  movie: {
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        sx={{ aspectRatio: "2/3", height: "300px" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {movie.title}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Rating: {movie.vote_average}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(movie.release_date).getFullYear()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
