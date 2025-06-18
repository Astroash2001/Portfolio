import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Code, Layout, Server, Database } from "lucide-react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  skills,
  delay,
  color,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={`h-full bg-background-lighter rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-${color}`}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-${color} bg-opacity-20`}
      >
        <div className={`text-${color}`}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-text-secondary flex items-center">
            <span className={`w-2 h-2 rounded-full bg-${color} mr-2`}></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      skills: [
        "React.js",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
      color: "primary",
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"],
      color: "secondary",
    },
    {
      icon: <Database size={24} />,
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Redis"],
      color: "primary",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Other Skills",
      skills: ["Git & GitHub", "Docker", "CI/CD", "AWS", "Vercel"],
      color: "secondary",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            The technologies, tools, and abilities I've acquired throughout my
            career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={0.2 + index * 0.1}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
