<template>
  <div class="dropdown" ref="dropdownRef">
    <label v-if="label" class="dropdown-label">{{ label }}</label>
    <div class="dropdown-box">
      <input
        class="dropdown-input"
        type="text"
        :placeholder="label ? '' : '0px'"
        :value="selected"
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
defineProps({
  label: {
    type: String,
  },
})
const dropdownRef = ref<HTMLElement | null>(null)
const selected = ref('')
const show = ref(false)
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
  selected.value = option.value
  show.value = false
}
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    show.value = false
  }
}
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
