<script setup lang="ts">
import VAvatar from '@/components/VAvatar/VAvatar.vue'
</script>

<template>
  <main class="flex justify-center items-center h-screen gap-2 bg-slate-100">
    <div class="flex flex-col gap-2">
      <VAvatar username="shahriar eshraghi" src="https://i.pravatar.cc/100" />
      <VAvatar username="hossein askari" />
      <VAvatar username="kimia zohretalab" :letterCount="1" />
      <VAvatar username="Anata kadkhoda zadeh" />
      <VAvatar username="Farid Froozan asl novaday nia" backgroundColor="#000" :letterCount="3" />
      <VAvatar username="شهریار اشراقی" :lighten="100" />
    </div>
  </main>
</template>
