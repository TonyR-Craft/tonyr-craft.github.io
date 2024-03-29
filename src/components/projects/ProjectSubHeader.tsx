import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export type ProjectSubHeaderProps = {
  title: string;
  url: string;
};
const ProjectSubHeader = (props: ProjectSubHeaderProps) => {
  return (
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
      <Typography variant="body1">{props.title}</Typography>
    </Link>
  );
};

export default ProjectSubHeader;
