<script setup lang="ts">
import { logEvent } from 'histoire/client'
import { VButton } from 'ircolor-uikit/src/components'
import { TestIcon } from 'ircolor-uikit/src/components'
const buttonStates = () => ({
  label: 'متن تست',
  variant: 'primary',
  rounded: 'default',
  type: 'fill',
  iconPosition: 'left',
  hasIcon: false,
  disabled: false
})
</script>
<template>
  <Story title="VButton" :layout="{ type: 'grid', width: '25%' }">
    <Variant title="Playground" :init-state="buttonStates" auto-props-disabled>
      <template #default="{ state }">
        <VButton
          :label="state.label"
          :type="state.type"
          :variant="state.variant"
          :iconPosition="state.iconPosition"
          :rounded="state.rounded"
          :disabled="state.disabled"
          :hasIcon="state.hasIcon"
          @click="logEvent('click', $event)"
        >
          <template #icon v-if="state.hasIcon">
            <TestIcon />
          </template>
        </VButton>
      </template>
    </Variant>
    <template #controls="{ state }">
      <HstText v-model="state.label" title="label" />
      <HstSelect
        v-model="state.type"
        title="type"
        :options="{
          fill: 'fill',
          outline: 'outline'
        }"
      />
      <HstSelect
        v-model="state.variant"
        title="variant"
        :options="{
          primary: 'primary',
          secondary: 'secondary',
          danger: 'danger',
          warning: 'warning'
        }"
      />
      <HstSelect
        v-model="state.iconPosition"
        title="icon position"
        :options="{
          right: 'right',
          left: 'left',
          top: 'top',
          bottom: 'bottom'
        }"
      />
      <HstSelect
        v-model="state.rounded"
        title="rounded"
        :options="{
          default: 'default',
          lg: 'lg',
          '2xl': '2xl',
          full: 'full',
        }"
      />
      <HstCheckbox v-model="state.disabled" title="disabled" />
      <HstCheckbox v-model="state.hasIcon" title="hasIcon" />
    </template>
  </Story>
</template>

<style scoped></style>
