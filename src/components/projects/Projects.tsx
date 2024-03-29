import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProjectDetails from "./ProjectDetails";
import { const_projects } from "../../constants/projects";
export default function Projects() {
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
        id="projects"
        sx={{
          pt: { xs: 10, sm: 16 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" color="text.primary">
            Projects
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here's a list of stuff that I'm currently working on... so far.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {const_projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex" }}
            >
              <ProjectDetails
                title={project.title}
                url={project.url}
                desc={project.desription}
                private={project.private}
                image={
                  project.image
                    ? {
                        src: project.image?.src,
                        style: project.image?.style,
                      }
                    : undefined
                }
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
