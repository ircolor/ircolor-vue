<script setup lang="ts">
import VButton from './components/VButton.vue'
import TestIcon from './assets/icons/TestIcon.vue';
</script>

<template>
  <main class="flex justify-center items-center h-screen">
    <div class="w-50">
      <v-button label="پالت رنگی بسازید" type="fill">
        <template #icon>
          <TestIcon/>
        </template>
      </v-button>
    </div>
  </main>
</template>
