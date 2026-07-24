import { useState } from 'react'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import StepDeparture from './StepDeparture'
import StepStyle from './StepStyle'
import StepDuration from './StepDuration'
import StepBudget from './StepBudget'
import StepVisa from './StepVisa'
import './PlannerWizard.css'

const STEPS = [
  { id: 'departure', label: 'Kalkış' },
  { id: 'style', label: 'Tarz' },
  { id: 'duration', label: 'Süre' },
  { id: 'budget', label: 'Bütçe' },
  { id: 'visa', label: 'Vize' },
]

export default function PlannerWizard({ onCalculate }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState('right')
  const [formData, setFormData] = useState({
    departureCity: 'IST',
    tags: [],
    days: 7,
    budgetLevel: 'orta',
    visaPreference: 'hepsi',
  })

  const updateField = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canNext = () => {
    if (currentStep === 1 && formData.tags.length === 0) return false
    return true
  }

  const goNext = () => {
    if (currentStep < STEPS.length - 1) {
      setDirection('right')
      setCurrentStep((s) => s + 1)
    }
  }

  const goBack = () => {
    if (currentStep > 0) {
      setDirection('left')
      setCurrentStep((s) => s - 1)
    }
  }

  const handleCalculate = () => {
    onCalculate(formData)
  }

  const isLastStep = currentStep === STEPS.length - 1
  const progress = ((currentStep + 1) / STEPS.length) * 100

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepDeparture value={formData.departureCity} onChange={updateField('departureCity')} />
      case 1:
        return <StepStyle value={formData.tags} onChange={updateField('tags')} />
      case 2:
        return <StepDuration value={formData.days} onChange={updateField('days')} />
      case 3:
        return <StepBudget value={formData.budgetLevel} onChange={updateField('budgetLevel')} />
      case 4:
        return <StepVisa value={formData.visaPreference} onChange={updateField('visaPreference')} />
      default:
        return null
    }
  }

  return (
    <div className="planner-wizard">
      {/* Step Indicator */}
      <div className="wizard-steps">
        {STEPS.map((step, i) => (
          <div key={step.id} className="wizard-step-wrapper">
            <div
              className={`wizard-step-circle ${
                i < currentStep ? 'completed' : i === currentStep ? 'active' : ''
              }`}
              onClick={() => {
                if (i < currentStep) {
                  setDirection('left')
                  setCurrentStep(i)
                }
              }}
            >
              {i < currentStep ? '✓' : i + 1}
            </div>
            <span
              className={`wizard-step-label ${
                i === currentStep ? 'active' : ''
              }`}
            >
              {step.label}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={`wizard-step-line ${i < currentStep ? 'completed' : ''}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="wizard-progress">
        <div
          className="wizard-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Content */}
      <div className="wizard-content" key={currentStep} data-direction={direction}>
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="wizard-nav">
        <button
          className="btn btn-secondary"
          onClick={goBack}
          disabled={currentStep === 0}
          type="button"
        >
          <ArrowLeft size={18} />
          Geri
        </button>

        {isLastStep ? (
          <button
            className="btn btn-primary btn-lg wizard-calculate"
            onClick={handleCalculate}
            type="button"
          >
            <Sparkles size={20} />
            Rotaları Hesapla
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={goNext}
            disabled={!canNext()}
            type="button"
          >
            İleri
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
