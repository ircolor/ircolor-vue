<script setup lang="ts">
import { VSearchInput } from 'ircolor-uikit/src/components/index'
const searchInputStates = () => ({
  placeholder: 'search',
  iconPosition: 'right',
  radius: '2xl',
  outlineStyle: 'border',
  hasIcon: true,
  width: 100,
  height: 40,
  expandable: true,
  textDirection: 'ltr',
  modelValue: 'searched text',
  expandLength: 100
})
</script>
<template>
  <Story title="VSearchInput" :layout="{ type: 'grid', width: '80%' }">
    <Variant title="Playground" :init-state="searchInputStates" auto-props-disabled>
      <template #default="{ state }">
        <VSearchInput
          :width="state.width"
          :height="state.height"
          :radius="state.radius"
          :placeholder="state.placeholder"
          :iconPosition="state.iconPosition"
          :outlineStyle="state.outlineStyle"
          :hasIcon="state.hasIcon"
          :expandable="state.expandable"
          :textDirection="state.textDirection"
          v-model="state.modelValue"
          :expandLength="state.expandLength"
        />
      </template>
    </Variant>
    <template #controls="{ state }">
      <HstText v-model="state.placeholder" title="placeholder" />
      <HstText v-model="state.modelValue" title="modelValue" />
      <HstNumber v-model="state.width" title="width" />
      <HstNumber v-model="state.expandLength" title="expandLength" />
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
      <HstSelect
        v-model="state.iconPosition"
        title="icon position"
        :options="{
          right: 'right',
          left: 'left'
        }"
      />
      <HstCheckbox v-model="state.hasIcon" title="hasIcon" />
      <HstCheckbox v-model="state.expandable" title="expandable" />
      <HstSelect
        v-model="state.textDirection"
        title="textDirection"
        :options="{
          rtl: 'rtl',
          ltr: 'ltr',
          center: 'center'
        }"
      />
      <HstSelect
        v-model="state.outlineStyle"
        title="outlineStyle"
        :options="{
          border: 'border',
          shadow: 'shadow'
        }"
      />
    </template>
  </Story>
</template>

<style scoped></style>
