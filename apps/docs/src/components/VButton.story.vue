<script setup lang="ts">
import { reactive, ref } from 'vue'
import { logEvent } from 'histoire/client'

const state = reactive({
  label: 'متن تست',
  variant: 'primary',
  rounded: '2xl',
  type: 'fill',
  iconPosition: 'left',
  hasIcon: false,
  disabled: false
})
// const label = ref('Click me')
// const variant = ref('danger')
// const type = ref('outline')
// const iconPosition = ref('')
// const icon = ref('')
// const rounded = ref('')
// const disabled = ref(false)
// const hasIcon = ref(false)
</script>
<template>
  <Story title="VButton" :layout="{ type: 'single', iframe: true }">
    <Variant title="default" :state="state">
        <v-button
          :label="state.label"
          :type="state.type"
          :variant="state.variant"
          :iconPosition="state.iconPosition"
          :rounded="state.rounded"
          :disabled="state.disabled"
          :hasIcon="state.hasIcon"
          @click="logEvent('click', $event)"
        >
          <template #icon>
            <TestIcon />
          </template>
        </v-button>

      <template #controls>
        Content: <input type="text" v-model="state.label" />
        Disabled: <input type="checkbox" v-model="state.disabled" />
      </template>
      <!-- <template #controls="{ state }">
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
      </template> -->
    </Variant>
  </Story>
</template>

<style scoped></style>
