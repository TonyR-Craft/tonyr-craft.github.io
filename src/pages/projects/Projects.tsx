import ProjectGrid from "../../components/Grid/ProjectGrid";
import HomeButton from "../../components/Navigation/HomeButton";
import Title from "../../components/Title/Title";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <>
      <HomeButton />
      <Title title={"Projects"} subtitle={"..very much a work in progress"}></Title>
      <ProjectGrid items={projects} />
    </>
  );
};

export default Projects;
