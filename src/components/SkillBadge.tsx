export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="font-mono text-xs border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-[var(--text-soft)] px-3 py-1.5 hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] transition-all cursor-default select-none">
      {skill}
    </span>
  )
}
