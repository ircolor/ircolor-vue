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
          @click="logEvent('click', $event)"
        >
        </v-button>
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.label" title="label" />
        <HstText v-model="state.type" title="type" />
        <HstText v-model="state.variant" title="variant" />
        <HstText v-model="state.iconPosition" title="iconPosition" />
        <HstText v-model="state.icon" title="icon" />
        <HstText v-model="state.rounded" title="rounded" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped></style>
