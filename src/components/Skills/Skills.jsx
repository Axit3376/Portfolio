import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-[#8245ec]"></div>
      <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-400">
        A focused overview of the tools and technologies I use to build modern products.
      </p>
    </div>

    <div className="grid gap-6 xl:grid-cols-3">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="rounded-[32px] border border-gray-700/80 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="mb-6 text-center text-2xl font-semibold text-white">
            {category.title}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-3 rounded-[28px] border border-gray-800/70 bg-[#11131b] px-4 py-6 text-center transition hover:border-[#8245ec] hover:bg-[#161826]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 shadow-inner shadow-black/20">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-100">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
