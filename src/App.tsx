/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-04 16:10:51
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-06 18:14:28
 * @FilePath: /movie-search/src/App.tsx
 */
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import theme from "./style/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
