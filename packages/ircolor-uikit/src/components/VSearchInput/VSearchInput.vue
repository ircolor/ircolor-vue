<script setup lang="ts">
import { useRadius, usePosition } from '../../composables'
import { toRef, computed, ref } from 'vue'
import { TestIcon } from '../VIcon'

interface SearchInputProps {
  placeholder: string
  iconPosition?: 'right' | 'left'
  radius?: '2xl' | 'lg' | 'full' | 'default'
  hasIcon?: boolean
  width: number
  height: number
  isExpandable: boolean
  textDirection: 'rtl' | 'ltr' | 'center'
  modelValue: string
  expandLength: number
}
const props = withDefaults(defineProps<SearchInputProps>(), {
  placeholder: 'search',
  iconPosition: 'right',
  radius: '2xl',
  hasIcon: true,
  width: 100,
  height: 40,
  isExpandable: true,
  modelValue: '',
  textDirection: 'ltr',
  expandLength: 100
})
const DYNAMIC_LENGTH = ref(0)
const RADIUS_CLASS = useRadius(toRef(props, 'radius'))
const SIZE = computed<string>(() => {
  return `width:${props.width + DYNAMIC_LENGTH.value}px; height:${props.height}px`
})
const POSITION_CLASS = usePosition(toRef(props, 'iconPosition'))

const expandInputLength = () => {
  if (props.isExpandable) {
    DYNAMIC_LENGTH.value = props.expandLength
  }
}

const shrinkInputLength = () => {
  if (props.isExpandable) {
    DYNAMIC_LENGTH.value = 0
  }
}
const emit = defineEmits(['update:modelValue'])
const TEXT = computed<string>({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
<template>
  <div class="search-input" :class="[RADIUS_CLASS, POSITION_CLASS]" :style="SIZE">
    <input
      type="text"
      v-model="TEXT"
      :placeholder="props.placeholder"
      :dir="props.textDirection"
      @focus="expandInputLength"
      @blur="shrinkInputLength"
      :class="{ 'text-center': props.textDirection === 'center' }"
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
.search-input {
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
