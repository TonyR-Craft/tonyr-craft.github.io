import {
    FiHome,
    FiUser,
    FiBookOpen,
    FiPhone,
    FiGithub,
    FiCode,
    FiMail,
  } from "react-icons/fi";
  
  interface IconProps {
    name: string;
  }
  
  export const getIcon = ({ name }: IconProps) => {
    const validNames = [
      "home",
      "about",
      "projects",
      "contact",
      "github",
      "codewars",
      "email",
    ];
    if (validNames.includes(name)) {
      switch (name) {
        case "home":
          return <FiHome className="w-full h-auto" strokeWidth={1.5} />;
        case "about":
          return <FiUser className="w-full h-auto" strokeWidth={1.5} />;
        case "projects":
          return <FiBookOpen className="w-full h-auto" strokeWidth={1.5} />;
        case "contact":
          return <FiPhone className="w-full h-auto" strokeWidth={1.5} />;
        case "github":
          return <FiGithub className="w-full h-auto" strokeWidth={1.5} />;
        case "codewars":
          return <FiCode className="w-full h-auto" strokeWidth={1.5} />;
        case "email":
          return <FiMail className="w-full h-auto" strokeWidth={1.5} />;
      }
    }
    return <FiHome className="w-full h-auto" strokeWidth={1.5} />;
  };
  