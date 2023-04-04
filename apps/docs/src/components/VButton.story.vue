<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'

const label = ref('Click me')
</script>
<template>
  <Story title="Button">
    <div>
      <v-button :label="label" type="fill" variant="danger" @click="logEvent('click', $event)"> </v-button>
    </div>
  </Story>
</template>

<style scoped></style>
