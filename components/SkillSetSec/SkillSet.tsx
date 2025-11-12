/* eslint-disable react/no-array-index-key */
/* eslint-disable mui-path-imports/mui-path-imports */
import { skillList } from "@/json/mock/cardMock";
import { SkillSetWrap } from "@/styles/StyledComponents/SkillSetWrap";
import { Box, Container, Grid, Typography } from "@mui/material";

const SkillSet = () => {
  return (
    <SkillSetWrap className="cmn_gap">
      <Container fixed>
        <Box className="main_Wrap">
          <Typography variant="h2">Skill Set</Typography>
        </Box>
        <Box className="skillWrap">
          <Grid container spacing={3.5}>
            {skillList.map((data, index) => (
              <Grid item xs={12} md={4} sm={6} key={index}>
                

                <Box className="skillCard">
                  <i>{data.icon}</i>
                  <Typography variant="h5">{data.name}</Typography>
                  <Typography variant="body1">{data.progress}</Typography>
                </Box>

              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </SkillSetWrap>
  );
};

export default SkillSet;
