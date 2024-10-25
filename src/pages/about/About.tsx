import HomeButton from "../../components/Navigation/HomeButton";
import Title from "../../components/Title/Title";
import Details from "./Details";

const About = () => {
  return (
    <>
      <HomeButton />
      <Title title={"About"}></Title>
      <Details />
    </>
  );
};

export default About;
