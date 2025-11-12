/* eslint-disable mui-path-imports/mui-path-imports */
import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const ProjectsWrap = styled(Box)`

.mainWrap{
    h2{
        text-align: center;
        margin-bottom: 30px;
        
    }
    .project_box{
        margin-top: 24px;
    }
    .btn{
        background: transparent;
        padding: 0;
        font-size: 21px;
        color: ${primaryColors.white};
        min-width: auto;
        @media (max-width: 599px) {
font-size: 18px;
        }
        @media (max-width: 479px) {
font-size: 15px;
        }
        &:hover{
            color: ${primaryColors.primary};
            svg{
                path{
                    fill: ${primaryColors.primary} !important;
                }
            }
        }
    }
}
`