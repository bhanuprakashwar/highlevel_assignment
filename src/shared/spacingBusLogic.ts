import { ref } from 'vue'

type BoxSide = 'top' | 'right' | 'bottom' | 'left'

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

export const handleMarginUpdate = ({
  side,
  selectedOption,
  currentValue,
}: {
  side: BoxSide
  selectedOption: { label: string; value: string }
  currentValue: string
}) => {
  switch (selectedOption.value) {
    case '20px':
      margins.value[side] = '20px'
      break
    case 'all':
      const newValue = currentValue || margins.value[side]
      margins.value.top = newValue
      margins.value.bottom = newValue
      margins.value.left = newValue
      margins.value.right = newValue
      break
    case 'autoCurrent':
      margins.value[side] = 'auto'
      break
    case 'autoAll':
      margins.value.top = 'auto'
      margins.value.bottom = 'auto'
      margins.value.left = 'auto'
      margins.value.right = 'auto'
      break
    case 'unsetCurrent':
      margins.value[side] = ''
      break
    case 'unsetAll':
      margins.value.top = ''
      margins.value.bottom = ''
      margins.value.left = ''
      margins.value.right = ''
      break
  }
}

export const handlePaddingUpdate = () => {}
