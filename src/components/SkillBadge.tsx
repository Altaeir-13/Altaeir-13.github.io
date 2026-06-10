export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-[var(--text)] hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] hover:shadow-[var(--shadow-soft)] transition-all cursor-default shadow-sm">
      {skill}
    </span>
  )
}
