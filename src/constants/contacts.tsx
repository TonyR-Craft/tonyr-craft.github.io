import { Email, EmailOutlined } from "@mui/icons-material";

/** CONTACTS */
export const const_contacts = [
  {
    title: "TonyR-Craft",
    url: "https://github.com/TonyR-Craft",
    logo: {
      dark: "/images/gitHub/github-mark-white.svg",
      light: "/images/gitHub/github-mark.svg",
      style: { width: "48px", height: "48px", margin: "0 4px" },
    },
  },
  {
    title: "RType64",
    url: "https://www.codewars.com/users/RType64",
    logo: {
      dark: "/images/codeWars/logo-light.png",
      light: "/images/codeWars/logo-dark.png",
      style: { width: "48px", height: "59px", margin: "0 4px" },
    },
  },
  {
    title: "anr3008",
    url: "mailto:anr3008@yahoo.co.uk",
    icon: {
      dark: <Email sx={{ width: "48px", height: "59px", margin: "0 4px" }} />,
      light: <EmailOutlined sx={{ width: "48px", height: "59px", margin: "0 4px" }} />
    }
  },
];
