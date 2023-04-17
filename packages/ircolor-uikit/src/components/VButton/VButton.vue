<script setup lang="ts">
// NOTE: This component is useless until finding a suitable solution to use the icon font
// import { VIcon } from '../VIcon';
import { computed, toRef } from 'vue'
import { useRadius } from '../../composables'

//#region INTERFACES
interface VButtonProps {
  label?: string
  variant?: 'primary' | 'secondary' | 'danger' | 'warning'
  iconPosition?: 'right' | 'left' | 'top' | 'bottom'
  type?: 'fill' | 'outline'
  rounded?: '2xl' | 'lg' | 'full' | 'default'
  hasIcon?: boolean
  disabled?: boolean
}
//#endregion

//#region PROPS
const props = withDefaults(defineProps<VButtonProps>(), {
  label: '',
  variant: 'primary',
  rounded: 'default',
  type: 'fill',
  iconPosition: 'left',
  hasIcon: false,
  disabled: false
})
// #endregion

//#region COMPUTED
const radiusClass = useRadius(toRef(props, 'rounded'))


const typeClass = computed(() => {
  let buttonType = ''
  if (props.type === 'fill') {
    switch (props.variant) {
      case 'secondary':
        buttonType = 'border-2 border-white bg-white text-neutral-800'
        break
      case 'warning':
        buttonType = 'border-2 border-warning bg-warning text-neutral-800'
        break
      case 'danger':
        buttonType = 'border-2 border-danger bg-danger text-neutral-800'
        break
      default:
        buttonType = 'border-2 border-primary bg-primary text-neutral-800'
        break
    }
    return buttonType
  }
  if (props.type === 'outline') {
    switch (props.variant) {
      case 'secondary':
        buttonType = 'bg-transparent border-2 border-neutral-700 text-neutral-800'
        break
      case 'warning':
        buttonType = 'bg-transparent border-2 border-warning text-neutral-800'
        break
      case 'danger':
        buttonType = 'bg-transparent border-2 border-danger text-neutral-800'
        break
      default:
        buttonType = 'bg-transparent border-2 border-primary text-neutral-800'
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

const withIconClass = computed(() => {
  return props.hasIcon ? 'flex items-center gap-2 justify-between' : ''
})

const onlyIconClass = computed(() => {
  // when only we have icon
  return props.label ? 'py-3.5 px-5' : 'p-3.5'
})
//#endregion
</script>

<template>
  <button
    :class="[radiusClass, typeClass, iconPositionClass, onlyIconClass, withIconClass]"
    class="w-full font-medium"
    :disabled="props.disabled"
  >
    {{ props.label }}
    <!-- ? Test Icon -->
    <slot v-if="props.hasIcon" name="icon" />

    <!-- <VIcon icon="heart"></VIcon> -->
  </button>
</template>

<style lang="scss" scoped></style>
