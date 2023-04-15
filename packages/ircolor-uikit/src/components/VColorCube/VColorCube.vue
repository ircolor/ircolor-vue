<script setup lang="ts">
import { ref } from 'vue';
import { roundedClass, sizeClass } from '../../shared/computed'
//#region INTERFACES
interface VColorCubeProps {
  color?: string
  width?: number
  height?: number
  rounded?: '2xl' | 'lg' | 'full'
}

//#endregion

//#region PROPS
const props = withDefaults(defineProps<VColorCubeProps>(), {
  color: '#95E1D3',
  width: 12,
  height: 12,
  rounded: 'lg'
})
// #endregion

const borderRadius = ref(roundedClass(props.rounded))
const size = ref(sizeClass(props.width, props.height))
</script>

<template>
  <div class="cube-color" :class="[borderRadius, size]">
  salam</div>
</template>

<style lang="css" scoped>
.cube-color {
  background-color: v-bind('props.color');
}
</style>
