<script setup lang="ts">
import { useRadius, useDimension, usePosition } from '../../composables'
import { toRef, computed, ref } from 'vue'
import { TestIcon } from '../VIcon'

interface VSearchInputProps {
  placeholder: string
  iconPosition?: 'right' | 'left'
  radius?: '2xl' | 'lg' | 'full' | 'default'
  outlineStyle?: 'border' | 'shadow'
  hasIcon?: boolean
  width: number
  height: number
  expandable: boolean
  placeholderDirection: 'rtl' | 'ltr' | 'center'
  modelValue: string
  expandLength: number
}
const props = withDefaults(defineProps<VSearchInputProps>(), {
  placeholder: 'search',
  iconPosition: 'right',
  radius: '2xl',
  outlineStyle: 'border',
  hasIcon: true,
  width: 100,
  height: 40,
  expandable: true,
  modelValue: '',
  placeholderDirection: 'ltr',
  expandLength: 100
})
let increaseValue = ref(0)
const radiusClass = useRadius(toRef(props, 'radius'))
let size = computed(() => {
  return `width:${props.width + increaseValue.value}px; height:${props.height}px`
})
const position = usePosition(toRef(props, 'iconPosition'))

const outlineStyleClass = computed(() => {
  if (props.outlineStyle === 'border') {
    return 'border border-solid border-gray-100'
  }
  return 'shadow-2xl'
})
const expandInputLength = () => {
  if (props.expandable) {
    increaseValue.value = props.expandLength
  }
}

const shrinkInputLength = () => {
  if (props.expandable) {
    increaseValue.value = 0
  }
}
const emit = defineEmits(['update:modelValue'])
const message = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
<template>
  <div class="input-container" :class="[outlineStyleClass, radiusClass, position]" :style="size">
    <input
      type="text"
      v-model="message"
      :placeholder="props.placeholder"
      :dir="props.placeholderDirection"
      @focus="expandInputLength"
      @blur="shrinkInputLength"
      :class="{ 'text-center': props.placeholderDirection === 'center' }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <slot v-if="props.hasIcon" name="icon">
      <TestIcon></TestIcon>
    </slot>
  </div>
</template>

<style scoped>
input[type='text'] {
  outline: none;
  box-sizing: border-box;
  transition: width 5s;
  padding: 10px 5px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: black;
}
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  background-color: white;
}
.text-center {
  text-align: center;
}
</style>
