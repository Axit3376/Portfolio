import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          Selected projects that highlight my work in machine learning, web development, and data-driven applications.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group w-full max-w-[320px] cursor-pointer overflow-hidden rounded-[28px] border border-gray-700 bg-[#08090f] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(130,69,236,0.14)]"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-5 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-gray-700 bg-[#11131b] px-2 py-1 text-[11px] font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-950 rounded-3xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative border border-gray-800">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-[#8245ec]"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-full flex justify-center bg-gray-900 px-4 py-4 max-h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-w-full max-h-72 object-contain rounded-2xl shadow-xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="text-3xl font-semibold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-gray-700 bg-[#11131b] px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-[#1f1f2a]"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp ? selectedProject.webapp : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#8245ec] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9b4ffb]"
                    onClick={(e) => {
                      if (!selectedProject.webapp) {
                        e.preventDefault();
                        window.alert("This project is not deployed yet. Please refer to GitHub.");
                        window.open(selectedProject.github, "_blank", "noopener,noreferrer");
                      }
                    }}
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
