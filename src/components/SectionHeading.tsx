export default function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-tighter text-[var(--text)] font-display">{title}</h2>
      {subtitle && <p className="mt-4 text-xl text-[var(--muted)] font-sans">{subtitle}</p>}
      <div className="flex items-center gap-2 mt-6">
        <div className="h-1.5 w-16 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-green)] rounded-none"></div>
        <span className="font-mono text-xs text-[var(--muted)] opacity-50">sys.log</span>
      </div>
    </div>
  )
}
