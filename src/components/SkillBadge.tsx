export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="badge hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] transition-all cursor-default select-none">
      {skill}
    </span>
  )
}
