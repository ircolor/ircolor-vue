<script setup lang="ts">
// import VButton from '../src/components/VButton/VButton.vue'
import TestIcon from './components/VIcon/TestIcon.vue'
</script>

<template>
  <main class="flex justify-center items-center h-screen gap-2 bg-slate-100">
    <div class="flex flex-col gap-2">
      <p>Fill</p>
      <v-button class="w-52" label="پالت رنگی بسازید" variant="primary" disabled hasIcon>
        <template #icon>
          <TestIcon />
        </template>
      </v-button>

      <v-button class="w-52" label="پالت رنگی بسازید" variant="secondary">
      </v-button>

      <v-button class="w-52" label="پالت رنگی بسازید" variant="danger">
      </v-button>

      <v-button class="w-52" label="پالت رنگی بسازید" variant="warning"> </v-button>
    </div>
    <div class="flex flex-col gap-2">
      <p>outline</p>
      <v-button class="w-52" label="پالت رنگی بسازید" type="outline" variant="primary" hasIcon>
        <template #icon>
          <TestIcon />
        </template>
      </v-button>
      <v-button class="w-52" label="پالت رنگی بسازید" type="outline" variant="secondary"> </v-button>
      <v-button class="w-52" label="پالت رنگی بسازید" type="outline" variant="danger"> </v-button>
      <v-button class="w-52" label="پالت رنگی بسازید" type="outline" variant="warning"> </v-button>
    </div>
  </main>
</template>
