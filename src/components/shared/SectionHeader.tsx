interface SectionHeaderProps {
  label: string
  title: string
  highlight: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ label, title, highlight, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className="section-line" />
        <span className="text-xs font-medium text-text-muted tracking-widest uppercase">{label}</span>
        {centered && <div className="section-line rotate-180" />}
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className="text-text-secondary mt-4 max-w-md mx-auto">{description}</p>
      )}
    </div>
  )
}
