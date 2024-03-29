import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContactDetails from "../contacts/ContactDetails";
const Home = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <Box
      id="home"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(#2a7f2b, #FFF)"
            : "linear-gradient(#0A360B, #090E10)",
        backgroundSize: "100% 30%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 10, sm: 12 }
        }}
      >
        <Stack spacing={1} >
          <Typography
            component="h3"
            variant="h3"
            sx={{
              display: "flex",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            {`${greeting}, my name is Tony.`}
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            I'm a Software Developer with over twenty years experience of
            software applications and infrastructure technologies.<br/>
            I create, maintain and support applications that help customers solve their business challenges
            and bring their technical strategies to life. In my spare time I
            enjoy competative coding; challenging myself, and others, to tackle
            new skills, technologies and opportunities.
          </Typography>
        </Stack>
        <ContactDetails />
      </Container>
    </Box>
  );
}

export default Home;