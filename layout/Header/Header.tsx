/* eslint-disable no-console */

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import UpArrIcon from "@/ui/Icons/UpArrIcon";
import { Container } from "@mui/system";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed>
          <Toolbar>
            <Link href="/" className="headerLogo">
              Web Developer
            </Link>

            <Box className="hdr_rgt">
              <CustomButtonPrimary
                variant="contained"
                color="primary"
                endIcon={<UpArrIcon />}
                href="mailto:avishek.rakshit98@gmail.com"
              >
                Contact
              </CustomButtonPrimary>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />
    </HeaderWrap>
  );
}
