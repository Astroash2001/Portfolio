import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "RAG-DOC-Q-A",
      description:
        "A Retrieval-Augmented Generation (RAG) based question-answering system that allows users to upload PDF documents and ask natural language questions. The system retrieves relevant document chunks and generates accurate answers using OpenAI's language models.",
      image: "rag.png",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Pinecone",
        "OpenAI API",
        "LangChain",
      ],
      githubUrl: "https://github.com/Astroash2001/RAG-DOC-Q-A",
      liveUrl: "https://github.com/Astroash2001/RAG-DOC-Q-A",
    },
    {
      id: 2,
      title: "Cineverse",
      description:
        "Cineverse refers to an expansive universe of films, often used to describe interconnected cinematic worlds, where multiple movies or franchises exist within the same narrative universe, similar to the Marvel Cinematic Universe (MCU).",
      image: "cineverse.png",
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TMDb API",
      ],
      githubUrl: "https://github.com/Astroash2001/Cineverse",
      liveUrl: "https://cineverse-gules-beta.vercel.app/",
    },
    {
      id: 3,
      title: "United AI",
      description:
        "United AI is a free online tool that uses AI to instantly summarize PDFs, texts, paragraphs, articles, audio, and video content. It extracts key points, abstracts, and summaries, making long documents easier to understand quickly and efficiently.",
      image: "united.png",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "OpenAI API",
        "PDF.js",
        "ffmpeg",
      ],
      githubUrl: "https://united-ai.vercel.app/",
      liveUrl: "https://united-ai.vercel.app/",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-background-light">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A selection of my recent works, showcasing my skills and expertise
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="relative overflow-hidden aspect-video"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 
                      hover:scale-110"
                  />

                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        className="absolute inset-0 bg-background bg-opacity-80 flex items-center justify-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.a
                          href={project.githubUrl}
                          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          href={project.liveUrl}
                          className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-background-lighter rounded-full text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-sm text-primary hover:text-primary-hover transition-colors duration-300"
                    >
                      <Eye size={16} className="mr-1" />
                      Live Preview
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
