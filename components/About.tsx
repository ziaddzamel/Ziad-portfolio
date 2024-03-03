"use client";
import { Tilt } from "react-tilt";
import { technologies } from "@/constants";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="sm:px-16 px-6 sm:py-16 py-6">
      <div>
        <h2 className={"sectionSubText"}>Introduction</h2>
        <p className={"sectionHeadText"}>Overview.</p>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <Tilt className="w-28 h-28" key={technology.name}>
            <Image
              src={technology.icon}
              alt={technology.name}
              width={200}
              height={200}
            />
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default About;
