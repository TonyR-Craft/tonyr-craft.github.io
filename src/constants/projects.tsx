import { Typography } from "@mui/material";

/** PROJECTS */
export const const_projects = [
  {
    title: "Open Meteo Weather App",
    url: "https://github.com/TonyR-Craft/WeatherApp",
    desription: (
      <Typography>
        Weather Forecast App written in Typescript and Next.JS
      </Typography>
    ),
    private: true,
    image: {
      src: "/images/projects/weather-app.png",
      style: { width: "320px", height: "160px", margin: "0 4px" },
    },
  },
  {
    title: "Classic Space Invaders",
    url: "https://github.com/TonyR-Craft/ClassicSpaceInvaders",
    desription: (
      <Typography>
        Classic Space Invaders Clone written in JAvascript and native HTML
      </Typography>
    ),
    private: true,
    image: {
      src: "/images/projects/classic-space-invaders.png",
      style: { width: "320px", height: "160px", margin: "0 4px" },
    },
  },
  {
    title: "Crypto Dynamic Link Library",
    url: "https://github.com/TonyR-Craft/cypher-library",
    desription: (
      <>
        <Typography variant="h6">
          This is a cypher library written in C++
        </Typography>
        <Typography fontWeight={"bold"} variant="subtitle2">Exported Function Areas:</Typography>
        <Typography variant="body1">- ROT13 Cypher</Typography>
        <Typography variant="body1">- Rail Fence Cypher</Typography>
      </>
    ),
    private: false,
  },
];
