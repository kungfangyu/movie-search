/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-06 18:13:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-12 18:27:45
 * @FilePath: /movie-search/src/pages/MovieDetailPage.tsx
 */
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits, getMovieDetails } from "../api/getMovies";
import { CastMemberI, MovieDetailsI } from "../interface/MovieInterface";

import { AvatarBox } from "../style/AvatarBoxStyle";

const MovieDetailPage: React.FC = () => {
  const [detail, setDetail] = useState<MovieDetailsI | null>(null);
  const [cast, setCast] = useState<CastMemberI[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const handleAddWatchList = () => {
    console.log("Add");
  };

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const [detailsResponse, creditsResponse] = await Promise.all([
          getMovieDetails(Number(id)),
          getMovieCredits(Number(id)),
        ]);
        if (detailsResponse?.data) {
          setDetail(detailsResponse.data);
        }
        if (creditsResponse?.data?.cast) {
          setCast(creditsResponse.data.cast.slice(0, 10)); // 只顯示前10名演員
        }
      } catch (error) {
        console.error("fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <Container
        maxWidth="lg"
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

  if (!detail) {
    return (
      <Container maxWidth="lg">
        <Typography>法加載電影詳情</Typography>
      </Container>
    );
  }

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            left: 0,
            right: 0,
            margin: "0 auto",
            position: "absolute",
            top: "64px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: {
                xs: "16px",
                sm: "32px",
                md: "64px",
                lg: "96px",
              },
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              gap: { xs: "24px", md: "48px" },
            }}
          >
            <Box
              sx={{ width: { xs: "100%", md: "25%" }, mb: { xs: 2, md: 0 } }}
            >
              <Typography mb={2} variant="h3" component="h1" color="white">
                {detail.title}
              </Typography>
              <Card>
                {detail.poster_path && (
                  <CardMedia
                    component="img"
                    image={`https://image.tmdb.org/t/p/w1280${detail.poster_path}`}
                    alt={detail.title}
                  />
                )}
              </Card>
            </Box>
            <Box flex={1} sx={{ ml: { md: 2 } }}>
              <Typography variant="h5" gutterBottom color="white">
                概覽
              </Typography>
              <Typography color="white">{detail.overview} </Typography>

              <Box sx={{ mb: 2, mt: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ mr: 2 }}
                  color="white"
                >
                  用戶評分：
                </Typography>
                <Chip
                  label={`${detail.vote_average?.toFixed(1)}`}
                  color="secondary"
                  sx={{ fontSize: "1.2rem", padding: "16px" }}
                />
              </Box>
              <Typography color="white">
                {detail.release_date}
                {detail.genres && detail.genres.length > 0 && (
                  <>
                    {" • "}
                    {Array.isArray(detail.genres)
                      ? detail.genres
                          .map((genre) =>
                            typeof genre === "string" ? genre : genre.name
                          )
                          .join(", ")
                      : detail.genres}
                  </>
                )}
              </Typography>
              <Box display="flex" alignItems="center" mt={2}>
                <IconButton
                  onClick={handleAddWatchList}
                  sx={{ color: "white", mr: 1, ml: -1 }}
                  aria-label="加入待看清單"
                >
                  <BookmarkAddIcon />
                </IconButton>
                <Typography variant="body2" color="white">
                  加入待看清單
                </Typography>
              </Box>
              <Typography variant="h5" color="white" sx={{ mt: 4 }}>
                主演
              </Typography>
              <AvatarBox>
                {cast.map((actor) => (
                  <Box
                    key={actor.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: 100,
                      flexShrink: 0,
                    }}
                  >
                    <Avatar
                      alt={actor.name}
                      src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                      sx={{ width: 80, height: 80, mb: 1 }}
                    />
                    <Typography
                      variant="body2"
                      color="white"
                      align="center"
                      sx={{ wordBreak: "break-word" }}
                    >
                      {actor.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="gray"
                      align="center"
                      sx={{ wordBreak: "break-word" }}
                    >
                      {actor.character}
                    </Typography>
                  </Box>
                ))}
              </AvatarBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MovieDetailPage;
