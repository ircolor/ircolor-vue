<script lang="ts" setup>
interface VIconProps {
  icon: string
  color?: ''
  tag?:'i'
  attributes?:''
}
//#endregion

//#region PROPS
const props = withDefaults(defineProps<VIconProps>(), {
  color: '',
  attributes:'',
  tag:'i',
})

</script>

<template>
    <component
      :is="props.tag ? props.tag : 'i'"
      class="irc"
      :class="'irc-' + props.icon? 'irc-' + props.icon: ''"
      aria-hidden="true"
      v-bind="props.attributes"
    >
    </component>
  </template>