import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and TypeScript",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    github: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"]
  },
  {
    title: "Project 2",
    description: "Full-stack application with Next.js and MongoDB",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["Next.js", "MongoDB", "Node.js", "Express", "TypeScript"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group/pin relative bg-[#13162D] rounded-2xl border border-white/[0.1] shadow-[0_8px_16px_rgb(0_0_0/0.4)] hover:border-white/[0.2] transition-all duration-700 overflow-hidden p-6"
            >
              <div className="relative z-50">
                <div className="relative flex items-center justify-center w-full sm:h-[40vh] h-[30vh] mb-10 overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden rounded-3xl bg-[#13162D]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="font-bold lg:text-2xl md:text-xl text-base text-foreground mb-2 line-clamp-1">
                  {project.title}
                </h3>
                
                <p className="lg:text-xl lg:font-normal font-light text-sm text-[#BEC1DD] line-clamp-2 mb-7">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {project.technologies.map((tech, i) => (
                      <div 
                        key={i}
                        className="border border-white/[0.2] rounded-full bg-[#13162D] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${i * 5}px)` }}
                      >
                        <span className="text-xs text-white/80">{tech[0]}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-3 group"
                    >
                      <span className="font-medium text-[20px] text-purple-500">Check Live Site</span>
                      <ArrowUpRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;