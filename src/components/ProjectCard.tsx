"use client"
import { ArrowUpRight, Github } from "lucide-react"
import { useLocale } from "@/context/LocaleContext"

interface ProjectProps {
  title: string;
  status: string;
  type: string;
  description: string;
  technologies: string[];
  contributions: string[];
  linkDeploy?: string;
  linkGithub?: string;
  index: string;
}

export default function ProjectCard({ 
  title, 
  status, 
  type, 
  description, 
  technologies, 
  contributions, 
  linkDeploy, 
  linkGithub, 
  index 
}: ProjectProps) {
  const { t } = useLocale()
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  return (
    <div className="project-card flex flex-col h-full" data-index={index}>
      <div className="font-mono text-xs text-[var(--accent-magenta)] mb-6 truncate">
        /project/{slug}
      </div>
      
      <div className="font-mono text-xs text-[var(--text-soft)] space-y-1 mb-6">
        <p><strong className="text-[var(--text)]">{t.projects.labels.status}</strong> {status}</p>
        <p><strong className="text-[var(--text)]">{t.projects.labels.type}</strong> {type}</p>
        <p className="leading-snug"><strong className="text-[var(--text)]">{t.projects.labels.stack}</strong> {technologies.join(" · ")}</p>
      </div>

      <h3 className="font-sans font-bold text-xl mb-4 text-[var(--text)]">{title}</h3>
      <p className="font-sans text-sm text-[var(--text-muted)] mb-8 flex-grow">{description}</p>
      
      <div className="mb-8">
        <p className="font-mono text-xs text-[var(--text)] mb-2 uppercase tracking-widest">
          {t.projects.labels.contributions}
        </p>
        <ul className="list-disc list-inside text-sm text-[var(--text-soft)] space-y-1 font-sans">
          {contributions.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-6 mt-auto pt-4 border-t border-[var(--border-strong)] font-mono text-xs">
        {linkDeploy ? (
          <a href={linkDeploy} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text)] hover:text-[var(--accent-green)] transition-colors">
            Deploy <ArrowUpRight className="w-3 h-3" />
          </a>
        ) : (
           <span className="flex items-center gap-2 text-[var(--text-faint)] cursor-not-allowed">
            Deploy <ArrowUpRight className="w-3 h-3" />
          </span>
        )}
        
        {linkGithub ? (
          <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text)] hover:text-[var(--accent-green)] transition-colors">
            GitHub <Github className="w-3 h-3" />
          </a>
        ) : (
           <span className="flex items-center gap-2 text-[var(--text-faint)] cursor-not-allowed">
            GitHub <Github className="w-3 h-3" />
          </span>
        )}
      </div>
    </div>
  )
}