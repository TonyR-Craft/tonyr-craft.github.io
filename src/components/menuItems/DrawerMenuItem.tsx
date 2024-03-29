import { Link } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  title: string;
  link: string;
};

const DrawerMenuItem = (props: Props) => {
  return <Link href={props.link} ><MenuItem>{props.title}</MenuItem></Link>;
};

export default DrawerMenuItem;