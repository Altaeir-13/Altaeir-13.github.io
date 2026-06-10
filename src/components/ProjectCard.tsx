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
  statusLabel?: string;
  contributionsLabel?: string;
}

export default function ProjectCard({ title, status, type, description, technologies, contributions, linkDeploy, linkGithub, statusLabel, contributionsLabel }: ProjectProps) {
  const isMainProject = title.includes("FADIR") || title.includes("SAMU") || title.includes("Adoção");

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`project-card group flex flex-col h-full cursor-default relative overflow-hidden ${isMainProject ? 'border-[var(--accent-green)] shadow-[0_0_15px_var(--accent-green-soft)]' : ''}`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-xs text-[var(--accent-pink)]">
          /project/{title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
        </span>
        <div className="flex items-center gap-2">
          {statusLabel && <span className="font-mono text-[10px] text-[var(--muted)]">{statusLabel}:</span>}
          <span className="badge">
            {status}
          </span>
        </div>
      </div>
      <h3 className="card-title mb-2 font-display text-3xl">{title}</h3>
      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-green)] mb-4 block">[{type}]</span>
      <p className="text-sm text-[var(--text-soft)] mb-6 font-sans">{description}</p>
      
      <div className="mb-6 flex-grow">
        <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-2 text-[var(--text)]">{contributionsLabel || "Contribuições:"}</h4>
        <ul className="list-disc list-inside text-sm text-[var(--muted)] space-y-1 font-sans">
          {contributions.map((item, idx) => (
            <li key={idx} className="leading-snug text-xs">{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {technologies.map((tech) => (
          <span key={tech} className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] before:content-['>_'] before:text-[var(--accent-pink)] before:mr-1">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-6 pt-4 border-t border-[var(--border)] mt-auto font-mono">
        {linkDeploy ? (
          <a href={linkDeploy} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--text)] hover:text-[var(--accent-green)] transition-colors">
             Deploy <ArrowUpRight className="w-3 h-3" />
          </a>
        ) : (
           <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted)] cursor-not-allowed">
             Deploy <ArrowUpRight className="w-3 h-3" />
          </span>
        )}
        
        {linkGithub ? (
          <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--text)] hover:text-[var(--accent-pink)] transition-colors">
             GitHub <Github className="w-3 h-3" />
          </a>
        ) : (
           <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted)] cursor-not-allowed">
             GitHub <Github className="w-3 h-3" />
          </span>
        )}
      </div>
    </motion.div>
  )
}