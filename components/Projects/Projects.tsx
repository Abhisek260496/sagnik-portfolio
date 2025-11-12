/* eslint-disable react/no-array-index-key */
/* eslint-disable mui-path-imports/mui-path-imports */
import { cardMock } from "@/json/mock/cardMock";
import { ProjectsWrap } from "@/styles/StyledComponents/ProjectsWrap";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <ProjectsWrap className="cmn_gap">
      <Container fixed>
        <Box className="mainWrap">
          <Typography variant="h2">Portfolio & Project</Typography>
          {/* <Stack direction="row" alignItems="center" justifyContent="right">
            <Button endIcon={<RgtArrwoIcon />} className="btn">See all my portfolio</Button>
          </Stack> */}
          <Box className="project_box">
            <Grid
              container
              spacing={{ md: 5, sm: 3, xs: 4 }}
              justifyContent="center"
            >
              {cardMock.map((data, index) => (
                <Grid item xs={12} md={4} sm={6} key={index}>
                  <ProjectCard
                    image={data.img}
                    title={data.head}
                    sub={data.sub}
                    linkToProject={data?.linkToProject}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ProjectsWrap>
  );
};

export default Projects;
