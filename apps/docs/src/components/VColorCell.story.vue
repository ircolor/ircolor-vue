<script setup lang="ts">
import { VColorCell } from 'ircolor-uikit/src/components/index'

const VColorCellState = () => ({
  color: '#95E1D3',
  width: 50,
  height: 50,
  radius: 'default'
})
</script>
<template>
  <Story title="VColorCell" :layout="{ type: 'grid', width: '80%' }">
        <Variant title="Playground" :init-state="VColorCellState" auto-props-disabled>
          <template #default="{ state }">
            <VColorCell :color="state.color" :width="state.width" :height="state.height" :radius="state.radius">
            </VColorCell>
          </template>
        </Variant>
        <template #controls="{ state }">
          <HstText v-model="state.color" title="color" />
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

<style lang="scss" scoped></style>
