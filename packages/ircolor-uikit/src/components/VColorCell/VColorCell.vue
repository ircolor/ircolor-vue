<script setup lang="ts">
import { toRef } from 'vue'
import { useRadius, useDimension } from '../../composables'

interface ColorCubeProps {
  color: string
  width: number
  height: number
  radius: '2xl' | 'lg' | 'full' | 'default'
}



const props = withDefaults(defineProps<ColorCubeProps>(), {
  color: '#95E1D3',
  width: 12,
  height: 12,
  radius: 'lg'
})

const radiusClass = useRadius(toRef(props, 'radius'))
const sizeStyle = useDimension(toRef(props, 'width'), toRef(props, 'height'))
const backgroundColor = toRef(props, 'color')
</script>

<template>
  <div class="cube-color" :class="[radiusClass]" :style="sizeStyle"></div>
</template>

<style lang="css" scoped>
.cube-color {
  background-color: v-bind('backgroundColor');
}
</style>
