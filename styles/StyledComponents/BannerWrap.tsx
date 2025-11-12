/* eslint-disable mui-path-imports/mui-path-imports */
import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const BannerWrap = styled(Box)`
  position: relative;

  ::before {
    content: "";
    position: absolute;
    left: -20%;
    top: -50%;
    width: 660px;
    height: 660px;
    z-index: -1;

    background: #4579ff;
    opacity: 0.4;
    filter: blur(192px);
  }
  ::after {
    content: "";
    position: absolute;
    left: 30%;
    top: 20%;
    width: 370px;
    height: 370px;
    z-index: -1;
    background: #4579ff;
    opacity: 0.4;
    filter: blur(192px);
  }
  .dis_float {
    position: absolute;
    font-weight: 700;
    font-size: 120px;
    color: ${primaryColors.white};
    opacity: 0.04;
    right: 0;
    top: 10%;
    text-transform: uppercase;
    @media (max-width: 1199px) {
      font-size: 70px;
    }
    @media (max-width: 899px) {
      font-size: 55px;
    }
    @media (max-width: 599px) {
      font-size: 45px;
    }
    @media (max-width: 479px) {
      font-size: 38px;
    }
  }

  .mainWrap {
    padding: 200px 0 80px;
    position: relative;
    @media (max-width: 1199px) {
      padding: 200px 0 65px;
    }
    @media (max-width: 899px) {
      padding: 180px 0 65px;
    }
    @media (max-width: 599px) {
      padding: 160px 0 40px;
    }
    @media (max-width: 479px) {
      padding: 140px 0 40px;
    }

    .lft_box {
      h1 {
        text-transform: uppercase;
        span {
          color: ${primaryColors.primary};
        }
      }
      button {
        margin-top: 25px;
        @media (max-width: 479px) {
          width: 100%;
        }
      }
    }
    .mainImg_holder {
      display: flex;
      align-items: center;
      justify-content: right;
      @media (max-width: 899px) {
        justify-content: center;
      }

      .image_inner {
        position: relative;
        width: 500px;
        /* overflow: hidden; */
        line-height: 0;
        border-radius: 0 91px;
        figure {
          width: 100%;
          height: 100%;
          line-height: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .Man {
          position: absolute;
          bottom: -1.5px;
          left: 50%;
          transform: translateX(-50%);
          line-height: 0;
          height: 490px;
          width: 100%;
          object-fit: contain;
          @media (max-width: 1199px) {
            height: 340px;
          }

          @media (max-width: 479px) {
            height: 320px;
          }
          @media (max-width: 429px) {
            height: 280px;
          }
          @media (max-width: 389px) {
            height: 260px;
          }
          @media (max-width: 369px) {
            height: 240px;
          }
          @media (max-width: 339px) {
            height: 220px;
          }
        }
      }
    }
    .lower_box {
      max-width: 946px;
      margin: 0 auto;
      padding: 40px 80px;
      border: 1px solid #0066ff;
      text-align: center;
      position: relative;
      margin-top: 100px;
      @media (max-width: 1199px) {
        margin-top: 50px;
      }
      @media (max-width: 899px) {
        margin-top: 40px;
        padding: 30px 55px;
      }
      @media (max-width: 599px) {
        margin-top: 25px;
        padding: 20px 30px;
      }
      .empty1 {
        position: absolute;
        width: 3px;
        height: 3px;
        background: ${primaryColors.white};
        left: -2px;
        top: -2px;
      }
      .empty2 {
        position: absolute;
        width: 3px;
        height: 3px;
        background: ${primaryColors.white};
        left: -2px;
        bottom: -2px;
      }
      .empty3 {
        position: absolute;
        width: 3px;
        height: 3px;
        background: ${primaryColors.white};
        right: -2px;
        bottom: -2px;
      }
      .empty4 {
        position: absolute;
        width: 3px;
        height: 3px;
        background: ${primaryColors.white};
        right: -2px;
        top: -2px;
      }
      h3 {
        line-height: 1.5;
      }
    }
  }
`;
