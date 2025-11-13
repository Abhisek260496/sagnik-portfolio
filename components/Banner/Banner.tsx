/* eslint-disable react/no-unescaped-entities */
/* eslint-disable mui-path-imports/mui-path-imports */
import assest from "@/json/assest";
import { BannerWrap } from "@/styles/StyledComponents/BannerWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import UpArrIcon from "@/ui/Icons/UpArrIcon";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Banner = () => {
  return (
    <BannerWrap>
      <Typography className="dis_float">Web developer</Typography>
      <Container fixed>
        <Box className="mainWrap">
          <Grid container alignItems="center" rowSpacing={{ sm: 4, xs: 4 }}>
            <Grid item xs={12} md={6}>
              <Box className="lft_box">
                <Typography variant="h1">
                  I am Sagnik,
                  <br />A <span>Frontend developer</span>
                </Typography>
                <CustomButtonPrimary
                  variant="contained"
                  color="primary"
                  endIcon={<UpArrIcon />}
                  href="mailto:sagnikbanerjee1998@gmail.com"
                >
                  Get in touch
                </CustomButtonPrimary>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="mainImg_holder">
                <Box className="image_inner">
                  <figure>
                    <Image
                      width={500}
                      height={400}
                      alt="backBanner"
                      src={assest.backBanner}
                    />
                  </figure>
                  <Image
                    width={402}
                    height={300}
                    alt="Man"
                    src={assest.Man}
                    className="Man"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className="lower_box">
            <Typography variant="h4">
              Hello! I'm Sagnik Banerjee, a passionate frontend developer with 3
              years of experience in creating modern and responsive web
              applications. I specialize in crafting intuitive user interfaces
              using the latest technologies and frameworks. My goal is to blend
              design with functionality to deliver seamless user experiences.
            </Typography>
            <Box className="empty1"> </Box>
            <Box className="empty2"> </Box>
            <Box className="empty3"> </Box>
            <Box className="empty4"> </Box>
          </Box>
        </Box>
      </Container>
    </BannerWrap>
  );
};

export default Banner;
