import { Box, Typography, useTheme, useMediaQuery,img} from "@mui/material";
import Form from "./Form";
import p2 from "C:/Users/MMD/Downloads/mern-social-media-master/mern-social-media-master/client/src/scenes/loginPage/p2.png"
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
      <a ><img src={p2} className="p2" alt="horse" />
      </a> 
      </Box> 
      


      
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Bienvenue dans TunEd, le forum pour tous les collégiens / lycéens <br></br>
          Merci d'entrer vos informations :
        </Typography>
        <Form />
      </Box>




    </Box>
  );
};

export default LoginPage;
