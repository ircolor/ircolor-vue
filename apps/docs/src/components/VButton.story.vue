<script setup lang="ts">
import { reactive, ref } from 'vue'
import { logEvent } from 'histoire/client'

const initState = reactive({
  label: 'متن تست',
  variant: 'primary',
  rounded: '2xl',
  type: 'fill',
  iconPosition: 'left',
  hasIcon: false,
  disabled: false
})
</script>
<template>
  <Story title="VButton" :layout="{ type: 'single', iframe: true }">
    <Variant title="Playground" :init-state="initState">
      <template  #default="{ state }">
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
            <VIcon />
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
        v-model="state.iconPosition"
        title="icon position"
        :options="{
          right: 'right',
          left: 'left',
          top: 'top',
          bottom: 'bottom'
        }"
      />
      <HstCheckbox v-model="state.disabled" title="disabled" />
      <HstCheckbox v-model="state.hasIcon" title="hasIcon" />
    </template>
  </Story>
</template>

<style scoped></style>
