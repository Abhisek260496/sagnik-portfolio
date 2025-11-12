/* eslint-disable react/jsx-no-useless-fragment */
import { primaryColors } from "@/themes/_muiPalette";
import ButtonIcon from "@/ui/Icons/ButtonIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Link from "next/link";

const FooterWrap = styled(Box)`
  .ftr-list {
    display: flex;
    align-items: center;
    padding: 0;
    @media (max-width: 1199px) {
      justify-content: center;
      margin: 8px 0;
      flex-wrap: wrap;
    }
    li {
      width: auto;
      margin-right: 35px;
      @media (max-width: 899px) {
        margin: 0 17px;
      }
      &:last-child {
        margin-right: 0;

        @media (max-width: 899px) {
          margin-right: 17px;
        }
      }
      a {
        font-weight: 400;
        font-size: 15px;
        color: var(--color3A4950);
        text-transform: capitalize;
        &:hover {
          color: var(--black);
        }
        &.active {
          color: var(--black);
        }
      }
    }
  }
  .ftr-logo {
    margin-right: 28px;
    line-height: 0;
    @media (max-width: 1199px) {
      max-width: 180px;
      margin: 0 auto;
    }
  }
  .social-list {
    display: flex;
    align-items: center;
    padding: 0;
    margin-left: 50px;
    @media (max-width: 1199px) {
      justify-content: center;
      margin-left: 0px;
      margin-bottom: 15px;
    }
    li {
      width: auto;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
      img {
        &:hover {
          filter: brightness(0);
        }
        @media (max-width: 991px) {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .copy {
    margin-left: auto;

    font-size: 14px;
    color: var(--color3A4950);

    a {
      color: var(--color3A4950);
      &:hover {
        color: var(--black);
      }
    }
  }
  .ftr-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 36px 20px 76px;
    background: ${primaryColors.secondary};
    border-radius: 50px 50px 0px 0px;
    @media (max-width: 1199px) {
      padding: 28px 20px 60px;
    }
    @media (max-width: 899px) {
      padding: 25px 20px 50px;
      border-radius: 30px 30px 0px 0px;
    }
    @media (max-width: 599px) {
      padding: 25px 20px 35px;
      border-radius: 20px 20px 0px 0px;
    }
    button {
      margin-left: 30px;
      padding: 0;
      min-width: auto;
      height: auto;
      :hover {
        background: transparent;
        transform: scale(1.05);
      }
    }
    h2 {
      color: ${primaryColors.black};
      font-weight: 500;
      text-transform: capitalize;
    }
  }
  ul {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 899px) {
      margin-top: 40px;
    }
    @media (max-width: 599px) {
      margin-top: 25px;
    }
    @media (max-width: 599px) {
      margin-top: 18px;
    }
    li {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      :hover {
        svg {
          path {
            fill: ${primaryColors.primary};
          }
        }
        a {
          color: ${primaryColors.primary};
        }
      }
      svg {
        cursor: pointer;
        @media (max-width: 599px) {
          width: 25px;
        }
        @media (max-width: 479px) {
          width: 20px;
        }
      }
      a {
        color: #11111e;
        font-size: 30px;
        font-weight: 500;
        margin-left: 15px;
        @media (max-width: 1199px) {
          font-size: 26px;
        }
        @media (max-width: 899px) {
          font-size: 24px;
        }
        @media (max-width: 599px) {
          font-size: 20px;
        }
        @media (max-width: 479px) {
          font-size: 16px;
        }
        /* :hover{
          color:${primaryColors.primary};
        } */
      }
      :not(:last-child) {
        margin-bottom: 20px;
        @media (max-width: 599px) {
          margin-bottom: 12px;
        }
        @media (max-width: 479px) {
          margin-bottom: 8px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterWrap>
        <Container fixed>
          <Box className="ftr-wrapper">
            <Stack direction="row" alignItems="center">
              <Typography variant="h2">Contact me</Typography>
              <IconButton>
                <ButtonIcon />
              </IconButton>
            </Stack>
            <List>
              <ListItem disablePadding>
                <PhoneIcon />
                <Link href="tel:+91-6290435205">+6290435205</Link>
              </ListItem>
              <ListItem disablePadding>
                <MailIcon />
                <Link href="mailto:sagnikbanerjee1998@gmail.com">
                  sagnikbanerjee1998@gmail.com
                </Link>
              </ListItem>
            </List>
          </Box>
        </Container>
      </FooterWrap>
    </>
  );
};

export default Footer;
