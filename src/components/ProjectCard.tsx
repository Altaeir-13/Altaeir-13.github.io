"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"

interface ProjectProps {
  title: string;
  status: string;
  type: string;
  description: string;
  technologies: string[];
  contributions: string[];
  linkDeploy?: string;
  linkGithub?: string;
}

export default function ProjectCard({ title, status, type, description, technologies, contributions, linkDeploy, linkGithub }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card-container group flex flex-col h-full cursor-default"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="card-label">{type}</span>
        <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-black/20 rounded-full font-bold">
          {status}
        </span>
      </div>
      <h3 className="card-title mb-4">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6 flex-grow">
        <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Principais Contribuições:</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {contributions.map((item, idx) => (
            <li key={idx} className="leading-snug text-xs">{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {technologies.map((tech) => (
          <span key={tech} className="text-[10px] font-bold uppercase tracking-wider bg-black/5 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-black/10 mt-auto">
        {linkDeploy ? (
          <a href={linkDeploy} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold hover:text-[var(--accent-color)] transition-colors">
            Deploy <ArrowUpRight className="w-4 h-4" />
          </a>
        ) : (
           <span className="flex items-center gap-1 text-sm font-bold text-gray-400 cursor-not-allowed">
            Deploy <ArrowUpRight className="w-4 h-4" />
          </span>
        )}
        
        {linkGithub ? (
          <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold hover:text-[var(--accent-color)] transition-colors">
            GitHub <Github className="w-4 h-4" />
          </a>
        ) : (
           <span className="flex items-center gap-1 text-sm font-bold text-gray-400 cursor-not-allowed">
            GitHub <Github className="w-4 h-4" />
          </span>
        )}
      </div>
    </motion.div>
  )
}