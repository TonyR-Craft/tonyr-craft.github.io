import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import ProjectSubHeader from "./ProjectSubHeader";


type Props = {
  title: string;
  url: string;
  desc: React.ReactElement<any, any>;
  private: boolean;
  image?: {
    src?: string;
    style?: {
      width: string;
      height: string;
      margin: string;
    };
  };
};

const ProjectDetails = (props: Props) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        p: 1,
      }}
    >
      <CardContent>
        <Grid container direction={"column"} alignItems={"stretch"}>
          <Grid item>
            {props.image?.src && (
              <img
                src={props.image.src}
                alt={props.title}
                style={props.image.style}
              />
            )}
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary" sx={{wordWrap: "break-word"}}>
              {props.desc}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          pr: 2,
        }}
      >
        <CardHeader
          title={props.title}
          subheader={props.private ? "Private Repository" : <ProjectSubHeader title={"View Source"} url={props.url} />}
        />
      </Box>
    </Card>
  );
};

export default ProjectDetails;
