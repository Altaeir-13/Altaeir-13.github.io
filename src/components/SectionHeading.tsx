export default function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[var(--text)]" style={{ fontFamily: 'var(--font-germania-one)' }}>{title}</h2>
      {subtitle && <p className="mt-4 text-xl text-[var(--muted)] font-sans">{subtitle}</p>}
      <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] mt-6 rounded-full"></div>
    </div>
  )
}
