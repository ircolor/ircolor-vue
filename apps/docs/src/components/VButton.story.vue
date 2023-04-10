<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'

const label = ref('پالت رنگی بسازید')
const variant = ref('secondary')
const type = ref('fill')
const iconPosition = ref('')
const icon = ref('')
const className = ref('w-52')
const rounded = ref('')
const disabled = ref(false)
const hasIcon = ref(false)
</script>
<template>
  <Story title="Button">
    <Variant title="number field" auto-props-disabled>
      <template #default>
        <v-button
          :label="label"
          :type="type"
          :variant="variant"
          :iconPosition="iconPosition"
          :icon="icon"
          :class="className"
          :rounded="rounded"
          :disabled="disabled"
          :hasIcon="hasIcon"
          @click="logEvent('click', $event)"
        >
        </v-button>
        <!-- <v-button class="w-52" label="پالت رنگی بسازید" variant="secondary">
      </v-button> -->
      </template>
      <template #controls>
        <HstText v-model="label" title="label" />
        <HstText v-model="className" title="class" />
        <HstSelect
          v-model="type"
          title="type"
          :options="{
            fill: 'fill',
            outline: 'outline'
          }"
        />
        <HstSelect
          v-model="variant"
          title="variant"
          :options="{
            primary: 'primary',
            danger: 'danger',
            secondary: 'secondary',
            warning: 'warning'
          }"
        />
        <HstSelect
          v-model="iconPosition"
          title="iconPosition"
          :options="{
            right: 'right',
            left: 'left',
            top: 'top',
            bottom: 'bottom'
          }"
        />
        <HstSelect
          v-model="rounded"
          title="rounded"
          :options="{
            '2xl': '2xl',
            lg: 'lg',
            full: 'full'
          }"
        />
        <HstCheckbox v-model="disabled" title="disabled" />
        <HstCheckbox v-model="hasIcon" title="hasIcon" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped></style>
