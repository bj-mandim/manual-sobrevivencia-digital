import { AlertTriangle, CheckCircle } from 'lucide-react'

interface AlertListProps {
  items: string[]
  type: 'danger' | 'success'
}

export const AlertList = ({ items, type }: AlertListProps) => {
  const isWarning = type === 'danger'

  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="shrink-0 mt-0.5">
            {isWarning ? (
              <AlertTriangle className="w-5 h-5 text-brand-red" />
            ) : (
              <CheckCircle className="w-5 h-5 text-brand-green" />
            )}
          </span>
          <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
