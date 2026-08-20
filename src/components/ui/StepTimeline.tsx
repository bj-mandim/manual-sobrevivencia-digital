import { Passo } from '../../types'

interface StepTimelineProps {
  steps: Passo[]
}

export const StepTimeline = ({ steps }: StepTimelineProps) => {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, i) => (
        <li key={step.numero} className="flex gap-4">
          {/* Line + number */}
          <div className="flex flex-col items-center">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-navy text-white font-bold text-sm shrink-0 z-10">
              {step.numero}
            </span>
            {i < steps.length - 1 && (
              <span className="w-0.5 flex-1 bg-gray-200 my-1" />
            )}
          </div>

          {/* Content */}
          <div className={`pb-6 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
            <h4 className="font-bold text-navy text-sm sm:text-base leading-snug">{step.titulo}</h4>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">{step.descricao}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
