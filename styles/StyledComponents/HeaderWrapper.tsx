import { primaryColors } from "@/themes/_muiPalette";
import { spaceGrotesk } from "@/themes/_muiTheme";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: transparent;
  position: absolute;
  width: 100%;
  z-index: 99;

  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
  .hdr_rgt {
    margin-left: auto;

    .MuiBadge-badge {
      right: 4px;
      top: 5px;
      min-width: 10px;
      height: 10px;
    }
    .cart_icon {
      margin-right: 18px;
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 40px 0;
    transition: all 0.4s;
    @media (max-width: 479px) {
      padding: 25px 0;
    }
  }

  .headerLogo {
    font-size: 32px;
    font-family: ${spaceGrotesk.style.fontFamily};
    font-weight: 700;
    color: ${primaryColors.white};
    @media (max-width: 899px) {
      font-size: 28px;
    }
    @media (max-width: 599px) {
      font-size: 24px;
    }
  }
  .navbar {
    margin-left: auto;
    a {
      margin-right: 45px;
      display: inline-block;
      color: ${primaryColors.secondaryFont};
      font-size: 15px;
      &:hover {
        color: ${primaryColors.primary};
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors.primary};
      }
    }
  }
  button{
    @media (max-width:599px) {
      min-width: 120px;
      padding: 6px 18px;
    }
  }
`;
