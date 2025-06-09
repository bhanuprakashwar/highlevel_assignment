// types/spacing.ts

type BoxSide = 'top' | 'right' | 'bottom' | 'left'
type SpacingType = 'margin' | 'padding'

interface SelectedOption {
  label: string
  value: string
}

export interface SpacingEmitPayload {
  changed: {
    [key in SpacingType]?: Partial<Record<BoxSide, string>>
  }
  value: {
    margin: Record<BoxSide, string>
    padding: Record<BoxSide, string>
  }
}

export interface UpdatePayload {
  type: SpacingType
  side: BoxSide
  selectedOption: SelectedOption
  currentValue: string
}
