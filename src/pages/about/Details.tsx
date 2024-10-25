import { getSkillsFromSkillIconApiArray } from "../../data/skills";
import Layout from "../../components/Layout/Layout";
import { Tabs, Tab } from "../../components/TabControl/TabControl";
import {
  funHeading,
  funParagraphs,
  generalHeading,
  generalParagraphs,
  projectHeading,
  projectParagraphs,
} from "../../data/about";
import "./Details.css";

const Details = () => {
  const general = () => {
    return (
      <>
        <h2 className="text-xl md:text-2xl text-left w-full pb-2">
          {generalHeading}
        </h2>
          {generalParagraphs.map((str, index) => (
            <p className="text-sm pb-2" key={index}>
              {str}
            </p>
          ))}
      </>
    );
  };

  const projects = () => {
    return (
      <>
        <h2 className="text-xl md:text-2xl text-left w-full pb-2">
          {projectHeading}
        </h2>
        <p className="text-sm pb-2">{projectParagraphs.slice(0,1)}</p>
        <ul>
          {projectParagraphs.map((str, index) => (
            index > 0 && <li className="text-sm" key={index}>
              {str}
            </li>
          ))}
        </ul>
      </>
    );
  };

  const fun = () => {
    return (
      <>
        <h2 className="text-xl md:text-2xl text-left w-full pb-2">
          {funHeading}
        </h2>
        <p className="text-sm pb-2">{funParagraphs.slice(0,1)}</p>
        <ul>
          {funParagraphs.map((str, index) => (
            index > 0 && <li className="text-sm" key={index}>
              {str}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <section>
      <div>
        <Tabs className="pb-2">
          <Tab label={"General"} children={general()}></Tab>
          <Tab label={"Projects"} children={projects()}></Tab>
          <Tab label={"Fun"} children={fun()}></Tab>
        </Tabs>

        <Layout className="lg:col-span-4 md:gap-8 flex flex-wrap p-5">
          <div className="flex flex-wrap">
            {getSkillsFromSkillIconApiArray().map((src) => (
              <img className="m-2" src={`${src}`} loading="lazy" key={src} />
            ))}
          </div>
        </Layout>
      </div>
    </section>
  );
};

export default Details;
