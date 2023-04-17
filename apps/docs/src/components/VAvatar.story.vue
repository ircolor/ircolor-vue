<script setup lang="ts">
import { VAvatar } from 'ircolor-uikit/src/components'
const avatarStatesImage = () => ({
  src: 'https://i.pravatar.cc/100',
  username: 'Test user',
  backgroundColor: '',
  letterCount: '2',
  size: 50,
  lighten: 80,
  rounded: 'lg'
})
const avatarStatesName = () => ({
  src: '',
  username: 'Test user',
  backgroundColor: '',
  letterCount: '2',
  size: 50,
  lighten: 80,
  rounded: 'lg'
})
const avatarStatesCustomBackground = () => ({
  src: '',
  username: 'Test user',
  backgroundColor: '#000',
  letterCount: '2',
  size: 50,
  lighten: 80,
  rounded: 'lg'
})
</script>
<template>
  <Story title="VAvatar" :layout="{ type: 'grid', width: '25%' }">
    <Variant title="Image" :init-state="avatarStatesImage" auto-props-disabled>
      <template #default="{ state }">
        <VAvatar
          :src="state.src"
          :username="state.username"
          :backgroundColor="state.backgroundColor"
          :letterCount="state.letterCount"
          :size="state.size"
          :lighten="state.lighten"
          :rounded="state.rounded"
        />
      </template>
    </Variant>
    <Variant title="Name" :init-state="avatarStatesName" auto-props-disabled>
      <template #default="{ state }">
        <VAvatar
          :src="state.src"
          :username="state.username"
          :backgroundColor="state.backgroundColor"
          :letterCount="state.letterCount"
          :size="state.size"
          :lighten="state.lighten"
          :rounded="state.rounded"
        />
      </template>
    </Variant>
    <Variant title="Custom Background" :init-state="avatarStatesCustomBackground" auto-props-disabled>
      <template #default="{ state }">
        <VAvatar
          :src="state.src"
          :username="state.username"
          :backgroundColor="state.backgroundColor"
          :letterCount="state.letterCount"
          :size="state.size"
          :lighten="state.lighten"
          :rounded="state.rounded"
        />
      </template>
    </Variant>
    <template #controls="{ state }">
      <HstText v-model="state.src" title="src" />
      <HstText v-model="state.username" title="username" />
      <HstText v-model="state.backgroundColor" title="backgroundColor" />
      <HstSelect
        v-model="state.letterCount"
        title="letterCount"
        :options="{
          1: '1',
          2: '2',
          3: '3'
        }"
      />
      <HstNumber v-model="state.size" title="size" />
      <HstNumber v-model="state.lighten" title="lighten" />
      <HstSelect
        v-model="state.rounded"
        title="rounded"
        :options="{
          default: 'default',
          lg: 'lg',
          '2xl': '2xl',
          full: 'full'
        }"
      />
    </template>
  </Story>
</template>

<style scoped></style>
