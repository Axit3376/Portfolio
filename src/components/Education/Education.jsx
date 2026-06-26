import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          My academic journey in AI, data science, and computer engineering.
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="rounded-3xl border border-gray-700 bg-gray-900/80 p-6 md:flex md:items-start md:gap-6"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0b0c14] border border-gray-700 md:mb-0">
              <img
                src={edu.img}
                alt={edu.school}
                className="h-16 w-16 rounded-xl object-cover"
              />
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-400 mt-1">{edu.school}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span>{edu.date}</span>
                <span className="font-medium text-gray-300">{edu.grade}</span>
              </div>
              <p className="text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
