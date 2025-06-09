import { ref } from 'vue'
import type { SpacingEmitPayload, UpdatePayload } from './spacingTypes'

export const margins = ref({
  left: 'auto',
  right: 'auto',
  top: 'auto',
  bottom: 'auto',
})

export const paddings = ref({
  left: '20px',
  right: '20px',
  top: '20px',
  bottom: '20px',
})

let emitFunction: ((payload: SpacingEmitPayload) => void) | null = null

export const setEmitFunction = (emitFn: ((payload: SpacingEmitPayload) => void) | null) => {
  emitFunction = emitFn
}

export const handleSpacingUpdate = ({
  type,
  side,
  selectedOption,
  currentValue,
}: UpdatePayload) => {
  const targetRef = type === 'margin' ? margins : paddings
  let changedValue: { [key: string]: string } = {}

  switch (selectedOption.value) {
    case '20px':
      targetRef.value[side] = '20px'
      changedValue[side] = '20px'
      break
    case 'all':
      const newValue = currentValue || targetRef.value[side]
      targetRef.value.top = newValue
      targetRef.value.bottom = newValue
      targetRef.value.left = newValue
      targetRef.value.right = newValue
      changedValue = {
        top: newValue,
        bottom: newValue,
        left: newValue,
        right: newValue,
      }
      break
    case 'autoCurrent':
      targetRef.value[side] = 'auto'
      changedValue[side] = 'auto'
      break
    case 'autoAll':
      targetRef.value.top = 'auto'
      targetRef.value.bottom = 'auto'
      targetRef.value.left = 'auto'
      targetRef.value.right = 'auto'
      changedValue = {
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
      }
      break
    case 'unsetCurrent':
      targetRef.value[side] = ''
      changedValue[side] = ''
      break
    case 'unsetAll':
      targetRef.value.top = ''
      targetRef.value.bottom = ''
      targetRef.value.left = ''
      targetRef.value.right = ''
      changedValue = {
        top: '',
        bottom: '',
        left: '',
        right: '',
      }
      break
    default:
      targetRef.value[side] = selectedOption.value
      changedValue[side] = selectedOption.value
      break
  }

  if (emitFunction) {
    emitFunction({
      changed: { [type]: changedValue },
      value: { margin: { ...margins.value }, padding: { ...paddings.value } },
    })
  }
}
