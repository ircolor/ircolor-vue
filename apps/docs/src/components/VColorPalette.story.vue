<script setup lang="ts">
import { VColorPalette } from 'ircolor-uikit/src/components/index'
const colorPaletteStates = () => ({
  colors: ['#F3722C', '#F9C74F', '#43AA8B', '#577590'],
  width: 75.25,
  height: 150,
  radius: '2xl'
})
</script>
<template>
  <Story title="VColorPalette" :layout="{ type: 'grid', width: '80%' }">
    <Variant title="Playground" :init-state="colorPaletteStates" auto-props-disabled>
      <template #default="{ state }">
        <VColorPalette :width="state.width" :height="state.height" :radius="state.radius" :colors="state.colors" />
      </template>
    </Variant>
    <template #controls="{ state }">
      <HstNumber v-model="state.width" title="width" />
      <HstNumber v-model="state.height" title="height" />
      <HstSelect
        v-model="state.radius"
        title="radius"
        :options="{
          default: 'default',
          lg: 'lg',
          '2xl': '2xl',
          full: 'full'
        }"
      />
    </template>
  </Story>
</template>

<style scoped></style>
