<script setup lang="ts">
import { toRef } from 'vue'
import { useRadius, useDimension } from '../../composables'

interface VColorPaletteProps {
  colors: Array<string>
  width: number
  height: number
  rounded: '2xl' | 'lg' | 'full' | 'default'
}
const props = withDefaults(defineProps<VColorPaletteProps>(), {
  colors: () => ['#F3722C', '#F9C74F', '#43AA8B', '#577590'],
  width: 75.25,
  height: 150,
  rounded: '2xl'
})

const borderRadius = useRadius(toRef(props, 'rounded'))
const size = useDimension(toRef(props, 'width'), toRef(props, 'height'))
</script>
<template>
  <div class="flex flex-row overflow-hidden w-min" :class="[borderRadius]">
    <div
      v-for="(color, index) in props.colors"
      class="single-color"
      :key="index"
      :style="[size, 'background-color:' + color]"
    ></div>
  </div>
</template>

<style lang="css" scoped>
.single-color {
  width: 75.25px;
  height: 150px;
}
.colors-wrapper {
  width: 100%;
  height: 100px;
}
</style>
