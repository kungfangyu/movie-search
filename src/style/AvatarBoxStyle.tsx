/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-12 18:23:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-12 18:25:18
 * @FilePath: /movie-search/src/style/AvatarBoxStyle.tsx
 */
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const AvatarBox = styled(Box)({
  display: "flex",
  gap: 2,
  marginTop: 2,
  maxWidth: "900px",
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
    borderRadius: "4px",
  },
  scrollbarWidth: "thin",
  scrollbarColor: "transparent transparent",
  "&:hover": {
    scrollbarColor: "rgba(255, 255, 255, 0.5) transparent",
  },
});
