"use client";
import { Tilt } from "react-tilt";
import Image, { StaticImageData } from "next/image";

type Tag = {
  name: string;
  color: string;
};

type ProjectsProps = {
  index: number;
  name: string;
  description: string;
  image: string | StaticImageData;
  source_code_link: string;
  Live_demo_link: string;
  tags: Tag[];
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  Live_demo_link,
}: ProjectsProps) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] ">
          <div className="w-full h-full">
            <Image
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl  "
            />
          </div>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(Live_demo_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={"/demo.png"}
                alt="source code"
                width={20}
                height={20}
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={"/github.png"}
                alt="source code"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] min-h-[90px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tagItem: Tag) => (
            <p
              key={`${name}-${tagItem.name}`}
              className={`text-[14px] ${tagItem.color}`}
            >
              #{tagItem.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};
export default ProjectCard;
