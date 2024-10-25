import React from "react";
import Layout from "../Layout/Layout";
import GridItem from "./GridItem";

type TProject = {
  title: string;
  url: string;
  description: string | React.ReactElement;
  private: boolean;
  image?: {
    src: string;
    style: { width: string; height: string; margin: string };
  };
};

interface GridProps {
  items: TProject[];
}

const ProjectGrid: React.FC<GridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
      {items.map((item, index) => (
          <Layout key={index}>
          <GridItem
            title={item.title}
            description={item.description}
            image={item.image}
          />
        </Layout>
      ))}
    </div>
  );
};

export default ProjectGrid;
