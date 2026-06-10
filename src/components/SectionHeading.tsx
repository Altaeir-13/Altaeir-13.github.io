export default function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-germania-one)' }}>{title}</h2>
      {subtitle && <p className="mt-4 text-xl text-gray-600 font-sans">{subtitle}</p>}
      <div className="h-1 w-20 bg-[var(--accent-color)] mt-6"></div>
    </div>
  )
}
