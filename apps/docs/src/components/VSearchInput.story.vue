<script setup lang="ts">
import { VSearchInput } from 'ircolor-uikit/src/components/index'
const searchInputStates = () => ({
  label: 'search',
  iconPosition: 'right',
  rounded: '2xl',
  hasBorder: true,
  hasIcon: true,
  width: 100,
  height: 40
})
</script>
<template>
  <Story title="VSearchInput" >
    <Variant title="Playground" :init-state="searchInputStates" auto-props-disabled>
      <template #default="{ state }">
        <VSearchInput
          :width="state.width"
          :height="state.height"
          :rounded="state.rounded"
          :label="state.label"
          :iconPosition="state.iconPosition"
          :hasBorder="state.hasBorder"
          :hasIcon="state.hasIcon"
        />
      </template>
    </Variant>
    <template #controls="{ state }">
      <HstText v-model="state.label" title="label" />
      <HstNumber v-model="state.width" title="width" />
      <HstNumber v-model="state.height" title="height" />
      <HstSelect
        v-model="state.rounded"
        title="rounded"
        :options="{
          default: 'default',
          lg: 'lg',
          '2xl': '2xl',
          full: 'full'
        }"
      />
      <HstSelect
        v-model="state.iconPosition"
        title="icon position"
        :options="{
          right: 'right',
          left: 'left',
        }"
      />
      <HstCheckbox v-model="state.hasIcon" title="hasIcon" />
      <HstCheckbox v-model="state.hasBorder" title="hasBorder" />
    </template>
  </Story>
</template>

<style scoped></style>
