import React from "react";

interface GridItemProps {
  title: string;
  description: string | React.ReactElement;
  image?: {
    src: string;
    style: { width: string; height: string; margin: string };
  };
}

const GridItem: React.FC<GridItemProps> = ({ title, description, image }) => {
  return (
    <div className="p-5 rounded-md flex-col items-center justify-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-2">
        {typeof description === "string" ? <p>{description}</p> : description}
      </div>
      {image && (
        <img
          src={image.src}
          alt={title}
          style={image.style}
          className="mt-4"
        />
      )}
    </div>
  );
};

export default GridItem;
