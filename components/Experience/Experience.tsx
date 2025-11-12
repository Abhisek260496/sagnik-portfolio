import assest from "@/json/assest";
import { LitItem } from "@/json/mock/cardMock";
import { ExperienceWrap } from "@/styles/StyledComponents/ExperienceWrap";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Experience = () => {
  return (
    <ExperienceWrap className="cmn_gap">
      <Image
        width={233}
        height={233}
        alt="grid"
        src={assest.grid}
        className="grid"
      />
      <Container fixed>
        <Typography variant="h2">Experience</Typography>
        <Grid
          container
          spacing={{ lg: 10, md: 8, sm: 6, xs: 2 }}
          justifyContent="center"
        >
          <Grid item xs={12} md={7}>
            {/* <Typography variant="h4">
              Lorem ipsum dolor sit amet consectetur .
            </Typography> */}
            <Typography variant="h5">
              React and Next JS Developer | 2023-Present
            </Typography>
            <List>
              {LitItem.map((item) => (
                <ListItem disablePadding>
                  <Typography variant="body1">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={5}>
            <figure>
              <Image
                width={555}
                height={593}
                alt="laptop"
                src={assest.laptop}
              />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </ExperienceWrap>
  );
};

export default Experience;
