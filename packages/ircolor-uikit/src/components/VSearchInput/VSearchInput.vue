<script setup lang="ts">
import { useRadius, useDimension, usePosition } from '../../composables'
import { toRef, ref, computed } from 'vue'
import { TestIcon } from '../VIcon'

interface VSearchInputProps {
  label: string
  iconPosition?: 'right' | 'left'
  rounded?: '2xl' | 'lg' | 'full' | 'default'
  hasBorder?: boolean
  hasIcon?: boolean
  width: number
  height: number
}
const props = withDefaults(defineProps<VSearchInputProps>(), {
  label: 'search',
  iconPosition: 'right',
  rounded: '2xl',
  hasBorder: true,
  hasIcon: true,
  width: 100,
  height: 40
})
const searchedText = ref('')
const radiusClass = useRadius(toRef(props, 'rounded'))
let size = useDimension(toRef(props, 'width'), toRef(props, 'height'))
const position = usePosition(toRef(props, 'iconPosition'))

const borderClass = computed(() => {
  if (props.hasBorder) {
    return 'border border-solid border-gray-100'
  }
  return 'shadow-2xl'
})
const iconClass = computed(() => {
  if (props.hasIcon) {
    if (props.iconPosition === 'right') {
      return 'right'
    } else {
      return 'left'
    }
  }
  return ''
})
const placeholderClass = computed(() => {
  if (props.hasIcon) {
    if (props.iconPosition === 'right') {
      return 'ltr'
    } else {
      return 'rtl'
    }
  }
  return ''
})
</script>
<template>
  <div class="relative inline-block" :class="position" :style="size">
    <slot v-if="props.hasIcon" name="icon">
      <TestIcon :class="iconClass"></TestIcon>
    </slot>
    <input
      type="text"
      v-model="searchedText"
      :placeholder="props.label"
      :style="size"
      :class="[borderClass, radiusClass]"
      :dir="placeholderClass"
    />
  </div>
</template>

<style scoped>
input[type='text'] {
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
  padding: 10px;
}
.right {
  position: absolute;
  right: 10px;
  top: 10px;
}
.left {
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>
