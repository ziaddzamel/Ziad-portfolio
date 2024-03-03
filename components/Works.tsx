import { projects } from "@/constants";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <section id="work" className="sm:px-16 px-6 sm:py-16 py-6">
      <div>
        <h2 className={"sectionSubText"}>My work</h2>
        <p className={"sectionHeadText"}>Projects.</p>
      </div>
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
