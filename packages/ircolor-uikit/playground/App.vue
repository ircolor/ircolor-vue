<script setup lang="ts">
// import VButton from '../src/components/VButton/VButton.vue'
import TestIcon from '../src/components/VIcon/Icons/TestIcon.vue'
</script>

<template>
  <main class="flex justify-center items-center h-screen">
    <div>
      <v-button label="پالت رنگی بسازید" iconPosition="bottom" style="fill">
        <template #icon>
          <TestIcon />
        </template>
      </v-button>
    </div>
  </main>
</template>
