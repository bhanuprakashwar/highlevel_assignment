<template>
  <div class="dropdown" ref="dropdownRef">
    <div class="dropdown-box">
      <input
        class="dropdown-input"
        type="text"
        :placeholder="value ? '' : '0px'"
        v-model="inputValue"
        @keydown.enter.prevent="handleManualInput"
      />
      <font-awesome-icon icon="chevron-down" size="xs" class="chevron" @click="toggleDropdown" />
      <div v-if="show" class="dropdown-list">
        <div
          v-for="option in options"
          class="dropdown-item"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  side: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['updateSpacing'])
const dropdownRef = ref<HTMLElement | null>(null)
const show = ref(false)
const inputValue = ref(props.value)
const toggleDropdown = () => {
  show.value = !show.value
}
const options = [
  {
    label: 'Set this value to 20px',
    value: '20px',
  },
  {
    label: 'Set all value to this value',
    value: 'all',
  },
  {
    label: 'Set this value to auto',
    value: 'autoCurrent',
  },
  {
    label: 'Set all values to auto',
    value: 'autoAll',
  },
  {
    label: 'Unset this value',
    value: 'unsetCurrent',
  },
  {
    label: 'Unset all values',
    value: 'unsetAll',
  },
]
const selectOption = (option: { label: string; value: string }) => {
  emit('updateSpacing', {
    side: props.side,
    type: props.type,
    selectedOption: option,
    currentValue: inputValue.value,
  })
  show.value = false
}
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    show.value = false
  }
}

function isValidCSSValue(property: string, value: string): boolean {
  const el = document.createElement('div')
  el.style[property as any] = value
  return el.style[property as any] === value
}
const handleManualInput = () => {
  const trimmed = inputValue.value.trim()
  const cssProperty = props.type === 'margin' ? 'margin' : 'padding'
  if (isValidCSSValue(cssProperty, trimmed)) {
    emit('updateSpacing', {
      side: props.side,
      type: props.type,
      selectedOption: { label: 'Manual input', value: trimmed },
      currentValue: trimmed,
    })
  } else {
    inputValue.value = ''
    emit('updateSpacing', {
      side: props.side,
      type: props.type,
      selectedOption: { label: 'Unset', value: 'unsetCurrent' },
      currentValue: '',
    })
  }
}

watch(
  () => props.value,
  (newVal) => {
    inputValue.value = newVal
  },
)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
}
.dropdown-input {
  height: 17px;
  width: 30px;
  border: none;
  background-color: transparent;
}
.chevron {
  cursor: pointer;
}
.dropdown-box {
  position: relative;
}
.dropdown-list {
  position: absolute;
  width: 145px;
  height: 145px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px #00000029;
  border-radius: 5px;
  z-index: 1000;
}
.dropdown-item {
  display: flex;
  align-items: center;
  height: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 8px;
  color: #485350;
  padding-left: 10px;
}
.dropdown-item:hover {
  background: #f0eeee;
}
</style>
