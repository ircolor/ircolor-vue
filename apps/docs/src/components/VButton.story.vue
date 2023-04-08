<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'

const label = ref('Click me')
const variant = ref('danger')
const type = ref('outline')
const iconPosition = ref('')
const icon = ref('')
const rounded = ref('')
const disabled = ref(false)
const hasIcon = ref(false)
</script>
<template>
  <Story title="Button">
    <Variant title="number field" auto-props-disabled>
      <template #default="{ state }">
        <v-button
          :label="label"
          :type="type"
          :variant="variant"
          :iconPosition="iconPosition"
          :icon="icon"
          :rounded="rounded"
          :disabled="disabled"
          :hasIcon="hasIcon"
          @click="logEvent('click', $event)"
        >
        </v-button>
      </template>
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
            danger: 'danger',
            secondary: 'secondary',
            warning: 'warning'
          }"
        />
        <HstSelect
          v-model="state.iconPosition"
          title="iconPosition"
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
            '2xl': '2xl',
            lg: 'lg',
            full: 'full'
          }"
        />
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstCheckbox v-model="state.hasIcon" title="hasIcon" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped></style>
