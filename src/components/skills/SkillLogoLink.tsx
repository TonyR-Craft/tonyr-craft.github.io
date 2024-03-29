import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export type SkillLinkProps = {
  title: string;
  url: string;
  src: string;
  style?: {
    width: string;
    height: string;
    margin: string;
  };
};
const SkillLogoLink = (props: SkillLinkProps) => {
  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Grid item>
        <Link
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src={props.src} alt={props.title} style={props.style} />
        </Link>
      </Grid>
      <Grid item>
        <Typography variant="body1">{props.title}</Typography>
      </Grid>
    </Grid>
  );
};

export default SkillLogoLink;
