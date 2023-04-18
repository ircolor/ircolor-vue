<script setup lang="ts">
import { useRadius, useDimension, usePosition } from '../../composables'
import { toRef, ref, computed, reactive } from 'vue'
import { TestIcon } from '../VIcon'

interface VSearchInputProps {
  label: string
  iconPosition?: 'right' | 'left'
  rounded?: '2xl' | 'lg' | 'full' | 'default'
  hasBorder?: boolean
  hasIcon?: boolean
  width: number
  height: number
  canExpand: boolean
}
const props = withDefaults(defineProps<VSearchInputProps>(), {
  label: 'search',
  iconPosition: 'right',
  rounded: '2xl',
  hasBorder: true,
  hasIcon: true,
  width: 100,
  height: 40,
  canExpand: true
})
let increasedWidth = toRef(props, 'width')
const searchedText = ref('')
const radiusClass = useRadius(toRef(props, 'rounded'))
let size = useDimension(increasedWidth, toRef(props, 'height'))
const position = usePosition(toRef(props, 'iconPosition'))

const borderClass = computed(() => {
  if (props.hasBorder) {
    return 'border border-solid border-gray-100'
  }
  return 'shadow-2xl'
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
const state = reactive({
  width: 0
})
const focusHandler = () => {
  if (props.canExpand) {
    state.width = props.width + 100
    size = useDimension(toRef(state, 'width'), toRef(props, 'height'))
  }
}
const blurHandler = () => {
  if (props.canExpand) {
    state.width = props.width
    size = useDimension(toRef(state, 'width'), toRef(props, 'height'))
  }
}
</script>
<template>
  <div class="input-container" :class="[borderClass, radiusClass, position]" :style="size">
    <slot v-if="props.hasIcon" name="icon">
      <TestIcon></TestIcon>
    </slot>
    <input
      type="text"
      v-model="searchedText"
      :placeholder="props.label"
      :dir="placeholderClass"
      @focus="focusHandler"
      @blur="blurHandler"
    />
  </div>
</template>

<style scoped>
input[type='text'] {
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
}
.input-container {
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: white;
}
</style>
