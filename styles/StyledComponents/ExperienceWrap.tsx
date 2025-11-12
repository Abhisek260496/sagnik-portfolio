/* eslint-disable mui-path-imports/mui-path-imports */
import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const ExperienceWrap = styled(Box)`
position: relative;
margin-bottom: 45px;
@media (max-width:1199px) {
    margin-bottom: 35px ;
    }
    @media (max-width:899px) {
        margin-bottom: 30px ;
    }
    @media (max-width:599px) {
        margin-bottom: 25px ;
    }
.grid{
    position: absolute;
    right: 12%;
    top: 3.2%;
    @media (max-width: 1199px) {
        right: 2%;
        top: -3.4%;
    }
    @media (max-width: 1199px) {
        width: 20%;
        right: 2%;
        top: 2%;
    }
}
h2{
    padding-bottom: 20px;
    border-bottom: 1px solid transparent; /* Transparent border to apply gradient */
    border-image: linear-gradient(180deg, rgb(255, 255, 255,0.8) 0%, rgba(255, 255, 255, 0.1) 100%);
  border-image-slice: 1;
    
}
h4{
    color: ${primaryColors.primary};
    font-weight: 500;
    margin-top: 30px;
}
h5{
    color: rgb(255, 255, 255,0.59);
    font-weight: 500;
    margin-top: 5px;
}
ul{
    margin-top: 40px;
    li{
      padding-left: 30px;
      position: relative;
      ::before{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: ${primaryColors.secondary};
      }
   
        :not(:last-child){
            padding-bottom: 35px;
            ::after{
        content: "";
        position: absolute;
        left: 4px;
        top: 19px;
        width: 1px;
        height: 65%;
        background-color: ${primaryColors.secondary};
        opacity: 0.4;
       
       
      }
        }
    }
}
figure{
    width: 100%;
    line-height: 0;
    position: relative;
    z-index: 2;
    @media (max-width:899px) {
        margin-top: -100px;
    }
    @media (max-width:479px) {
        margin-top: -70px;
    }
    ::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
      width: 546px;
      height: 546px;

background: #4579FF;
opacity: 0.4;
z-index: -1;
filter: blur(192px);

    }
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}
`