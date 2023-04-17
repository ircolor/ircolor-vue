<script setup lang="ts">
import { toRef } from 'vue'
import { useRadius, useDimension } from '../../composables'

interface VColorCubeProps {
  color: string
  width: number
  height: number
  rounded: '2xl' | 'lg' | 'full' | 'default'
}



const props = withDefaults(defineProps<VColorCubeProps>(), {
  color: '#95E1D3',
  width: 12,
  height: 12,
  rounded: 'lg'
})

const borderRadius = useRadius(toRef(props, 'rounded'))
const backgroundColor = toRef(props, 'color')
const size = useDimension(toRef(props, 'width'), toRef(props, 'height'))
</script>

<template>
  <div class="cube-color" :class="[borderRadius]" :style="size"></div>
</template>

<style lang="css" scoped>
.cube-color {
  background-color: v-bind('backgroundColor');
}
</style>
