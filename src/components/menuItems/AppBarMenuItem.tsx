import { Link } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  title: string;
  link: string;
};

const AppBarrMenuItem = (props: Props) => {
  return (
    <MenuItem>
      <Link href={props.link}>{props.title}</Link>
    </MenuItem>
  );
};

export default AppBarrMenuItem;
