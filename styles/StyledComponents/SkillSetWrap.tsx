/* eslint-disable mui-path-imports/mui-path-imports */
import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const SkillSetWrap = styled(Box)`
  position: relative; 
 
  ::before{
    content: "";
    left: -10%;
     top: 0;
     width: 503px;
     height: 503px;;
background: #4579FF;
opacity: 0.4;
filter: blur(192px);
position: absolute;;

  }
  h2 {
    text-align: center;
  }
  .skillWrap {
    margin-top: 45px;
    .skillCard {
      height: 100%;
      padding: 40px 30px;

      background: linear-gradient(
        143.28deg,
        rgba(255, 255, 255, 0.07) -3.73%,
        rgba(255, 255, 255, 0.007) 111.35%
      ) !important;
      backdrop-filter: blur(27px);
      /* Note: backdrop-filter has minimal browser support */
      border: 0.8px solid;
      border-image: linear-gradient(
        180deg,
        rgb(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0.1) 79%
      );
      border-image-slice: 1;

      i {
        height: 66px;
        width: 66px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.08);
      }
      h5 {
        color: ${primaryColors.secondary};
        margin-top: 15px;
      }
      p {
        font-size: 20px;
        margin-top: 12px;
      }
    }
  }
`;
