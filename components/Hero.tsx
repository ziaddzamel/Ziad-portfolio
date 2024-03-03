import Image from "next/image";
const Hero = () => {
  return (
    <section className={` w-full p-32 sm:px-16 px-6  mx-auto bg-primary `}>
      <div className="flex items-center justify-between flex-col lg:flex-row  ">
        <div
          className={` max-w-7xl pt-10   flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className="heroHeadText text-white">
              Hi,I m <span className="text-[#915eff]"> Ziad</span>
            </h1>
            <p className={" heroSubText mt-2 text-white-100"}>
              {" "}
              I build scalable and responsive <br className="sm:block hidden" />
              web applications using modern <br className="sm:block hidden" />
              front-end technologies.
            </p>
          </div>
        </div>
        <Image src={"/hero.png"} alt="hero" width={500} height={600} />
      </div>
    </section>
  );
};

export default Hero;
