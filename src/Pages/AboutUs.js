import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";
import aboutus from "./aboutus.png";

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Créateur de CV:</h2>
        <hr style={{ marginBottom: "30px", width: "250px" }} />
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="2px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            Notre site est votre ressource incontournable pour tout ce qui
            concerne les CV en français. Que vous soyez à la recherche de
            conseils pour rédiger un CV percutant, des stratégies pour décrocher
            le poste de vos rêves, des astuces pour vous démarquer en entretien,
            ou des modèles prêts à l'emploi, nous avons tout ce dont vous avez
            besoin pour réussir dans votre carrière professionnelle.
            <br/>
            <br/>
            Rejoignez-nous et donnez un nouvel élan à votre parcours
            professionnel avec des conseils pratiques, des exemples concrets et
            des ressources indispensables. Nous sommes là pour vous accompagner
            à chaque étape, que ce soit pour améliorer la présentation de votre
            expérience, choisir les bons mots-clés, ou préparer des réponses
            percutantes aux questions d'entretien.
            <br/>
            <br/>
            Chez nous, vous trouverez une
            communauté engagée, des experts prêts à partager leurs
            connaissances, et un ensemble d'outils pour maximiser l'impact de
            votre candidature. N'hésitez plus, faites partie de notre plateforme
            et boostez votre carrière dès aujourd'hui!
          </Typography>
          <Stack>
            <img className="about-img" src={aboutus} alt="img" />
          </Stack>
        </Stack>
        <Box mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Partage avec tes amis
          </Typography>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="dark"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
