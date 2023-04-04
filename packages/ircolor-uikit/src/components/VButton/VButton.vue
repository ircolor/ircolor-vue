<script setup lang="ts">
import { computed } from 'vue'
import { VIcon } from '../VIcon'
//#region INTERFACES
interface VButtonProps {
  label?: string
  variant?: 'primary' | 'secondary' | 'danger' | 'warning'
  iconPosition?: 'right' | 'left' | 'top' | 'bottom'
  icon?: string
  type?: 'fill' | 'outline'
  rounded?: '2xl' | 'lg' | 'full'
  disabled?: boolean
}
//#endregion

//#region PROPS
const props = withDefaults(defineProps<VButtonProps>(), {
  label: '',
  icon: '',
  variant: 'primary',
  rounded: '2xl',
  type: 'fill',
  iconPosition: 'left',
  disabled: false
})
// #endregion

//#region COMPUTED
const roundedClass = computed(() => {
  let roundedValue = ''
  switch (props.rounded) {
    case '2xl':
      roundedValue = 'rounded-2xl'
      break
    case 'lg':
      roundedValue = 'rounded-lg'
      break
    case 'full':
      roundedValue = 'rounded-full'
      break

    default:
      roundedValue = 'rounded'
      break
  }
  return roundedValue
})

const typeClass = computed(() => {
  let buttonType = ''
  if (props.type === 'fill') {
    switch (props.variant) {
      case 'secondary':
        buttonType = 'bg-white text-neutral-800'
        break
      case 'warning':
        buttonType = 'bg-warning text-neutral-800'
        break
      case 'danger':
        buttonType = 'bg-danger text-neutral-800'
        break
      default:
        buttonType = 'bg-primary text-neutral-800'
        break
    }
    return buttonType
  }
  if (props.type === 'outline') {
    switch (props.variant) {
      case 'secondary':
        buttonType = 'bg-transparent border border-stone-300 text-neutral-800'
        break
      case 'warning':
        buttonType = 'bg-transparent border border-warning text-neutral-800'
        break
      case 'danger':
        buttonType = 'bg-transparent border border-danger text-neutral-800'
        break
      default:
        buttonType = 'bg-transparent border border-primary text-neutral-800'
        break
    }
    return buttonType
  }
})

const iconPositionClass = computed(() => {
  let iconPosition = ''
  switch (props.iconPosition) {
    case 'top':
      iconPosition = 'flex-col-reverse'
      break
    case 'bottom':
      iconPosition = 'flex-col'
      break
    case 'left':
      iconPosition = 'flex-row-reverse'
      break

    default:
      iconPosition = ''
      break
  }
  return iconPosition
})

const onlyIconClass = computed(() => {
  // when only we have icon
  return props.label ? 'py-3.5 px-5' : 'p-3.5'
})
//#endregion
</script>

<template>
  <button
    :class="[roundedClass, typeClass, iconPositionClass, onlyIconClass]"
    class="flex items-center gap-2 justify-between font-medium w-full"
  >
    {{ props.label }}
    <VIcon :icon="props.icon"></VIcon>
  </button>
</template>

<style lang="scss" scoped></style>
