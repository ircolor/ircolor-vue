<script setup lang="ts">
import { VColorCube } from 'ircolor-uikit/src/components/index'

const vColorCubeState = () => ({
  color: '#95E1D3',
  width: 12,
  height: 12,
  rounded: 'lg'
})
</script>
<template>
  <Story title="vColorCube" :layout="{ type: 'grid', width: '25%' }">
    <Variant title="Playground" :init-state="vColorCubeState" auto-props-disabled>
      <template #default="{ state }">
        <VColorCube :color="state.color" :width="state.width" :height="state.height" :rounded="state.rounded">
        </VColorCube>
      </template>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped></style>
