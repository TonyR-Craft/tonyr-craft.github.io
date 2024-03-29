import { SvgIconProps } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

export type ContactLinkProps = {
  title: string;
  url: string;
  logo?: {
    src?: string;
    style?: {
      width: string;
      height: string;
      margin: string;
    };
  };
  icon?: React.ReactElement<SvgIconProps>;
};
const ContactLink = (props: ContactLinkProps) => { 
return (
  <Link href={props.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} >
    {props.logo ? (
      <img src={props.logo.src} alt={props.title} style={props.logo.style}/>
    ) : props.icon ? props.icon : null}
    <Typography variant="body1">{props.title}</Typography>
  </Link>
)};

export default ContactLink;
