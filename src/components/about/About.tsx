import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Skills from "../skills/Skills";
import { const_subSections } from "../../constants/sections";

const About = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedSection = const_subSections[selectedItemIndex];

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
        id="about"
        sx={{
          pt: { xs: 10, sm: 14 },
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography component="h2" variant="h4" color="text.primary">
                About me, myself and I.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 2, sm: 4 } }}
              >
                Here's a brief overview about me and what I'm about.
              </Typography>
            </div>
            <Grid
              container
              item
              gap={1}
              sx={{ display: { xs: "auto", sm: "auto" } }}
            >
              {const_subSections.map(({ title }, index) => (
                <Chip
                  key={index}
                  label={title}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    borderColor: (theme) => {
                      if (theme.palette.mode === "light") {
                        return selectedItemIndex === index
                          ? "primary.light"
                          : "";
                      }
                      return selectedItemIndex === index ? "primary.light" : "";
                    },
                    background: (theme) => {
                      if (theme.palette.mode === "light") {
                        return selectedItemIndex === index ? "none" : "";
                      }
                      return selectedItemIndex === index ? "none" : "";
                    },
                    backgroundColor:
                      selectedItemIndex === index ? "primary.main" : "",
                    "& .MuiChip-label": {
                      color: selectedItemIndex === index ? "#fff" : "",
                    },
                  }}
                />
              ))}
            </Grid>
            <Box
              component={Card}
              variant="outlined"
              sx={{
                display: { xs: "auto", sm: "auto" },
                mt: 4,
              }}
            >
              <Box sx={{ px: 2, py: 2 }}>
                 {selectedSection.description}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "flex", sm: "flex" }, width: "100%" }}
          >
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                display: { xs: "flex", sm: "flex" },
              }}
            >
              <Skills />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
