export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border border-[var(--border-light)] bg-[var(--bg-secondary)] text-foreground hover:border-[var(--accent-color)] transition-colors cursor-default shadow-sm">
      {skill}
    </span>
  )
}
