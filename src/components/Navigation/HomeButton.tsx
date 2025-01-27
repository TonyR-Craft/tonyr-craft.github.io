import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getIcon } from "./NavUtilities";

const NavLink = motion.create(Link);
const HomeButton = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      to={"/"}
      target={"_self"}
      className="text-foreground rounded-3xl flex items-center justify-center
        custom-bg fixed top-4 left-4 w-fit self-start z-50
        "
      aria-label={"home"}
    >
      <span className="relative  w-14 h-14 p-4  hover:text-accent">
        {getIcon({ name: "home" })}
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          Home
        </span>
      </span>
    </NavLink>
  );
};

export default HomeButton;
