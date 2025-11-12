/* eslint-disable mui-path-imports/mui-path-imports */
import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const ProjectCardWrap = styled(Box)`
  .innerWrap {
    position: relative;
    ::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(
        1.25deg,
        rgba(0, 0, 0, 0.88) 49.95%,
        rgba(0, 0, 0, 0) 91.71%
      );
      width: 100%;
      height: 45%;
      z-index: 2;
    }
    figure {
      width: 100%;
      height: 500px;
      line-height: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .floatingBox {
      position: absolute;
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%);
      width: 80%;
      z-index: 3;
      h3 {
        margin-bottom: 18px;
      }
      p {
        font-size: 21px;
        color: rgb(255, 255, 255, 0.59);
      }
      button {
        min-width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 1px solid ${primaryColors.white};
        margin-top: auto;
        transition: all 0.2s ease !important;
        :hover {
          background-color: transparent;
          svg {
            transform: scale(1.3);
          }
        }
      }
    }
  }
`;
