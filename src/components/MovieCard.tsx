/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-06 16:05:56
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-06 18:17:24
 * @FilePath: /movie-search/src/components/MovieCard.tsx
 */
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const handleAddToWatchlist = () => {
    // Add logic for handling add to watchlist here
  };

  return (
    <Link to={`/movie/${movie.id}`}>
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
              評分: {movie.vote_average}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
              {movie.release_date}
            </Typography>
            <IconButton
              aria-label="加入待看清單"
              onClick={handleAddToWatchlist}
            >
              <BookmarkAddIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
