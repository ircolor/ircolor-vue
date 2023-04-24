<script setup lang="ts">
import { toRef } from 'vue'
import { useRadius, useDimension } from '../../composables'

interface ColorPaletteProps {
  colors: Array<string>
  width: number
  height: number
  radius: '2xl' | 'lg' | 'full' | 'default'
}
const props = withDefaults(defineProps<ColorPaletteProps>(), {
  colors: () => ['#F3722C', '#F9C74F', '#43AA8B', '#577590'],
  width: 75.25,
  height: 150,
  radius: '2xl'
})

const radiusClass = useRadius(toRef(props, 'radius'))
const sizeStyle = useDimension(toRef(props, 'width'), toRef(props, 'height'))
</script>
<template>
  <div class="flex flex-row overflow-hidden w-min" :class="[radiusClass]">
    <div
      v-for="(color, index) in props.colors"
      :key="index"
      :style="[sizeStyle, 'background-color:' + color]"
    ></div>
  </div>
</template>

