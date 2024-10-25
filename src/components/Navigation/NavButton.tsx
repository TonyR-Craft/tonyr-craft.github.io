import { Link } from "react-router-dom";
import { getIcon } from "./NavUtilities";

interface INavButtonProps {
  openInNewTab: boolean;
  targetLink: string;
  label: string;
  iconName: string;
}

const NavButton = ({
  openInNewTab,
  targetLink,
  label,
  iconName,
}: INavButtonProps) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
    >
      <Link
        className="text-foreground rounded-3xl flex items-center justify-center custom-bg pulse"
        to={targetLink}
        target={openInNewTab ? "_blank" : "_self"}
      >
        <span className="relative w-14 h-14 p-4 group-hover:pause hover:text-accent">
          {getIcon({ name: iconName })}
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            {label}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default NavButton;
