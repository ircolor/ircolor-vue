<!-- ? This component is useless until finding a suitable solution to use the icon font -->

<script lang="ts" setup>
// #region INTERFACE
interface IconProps {
  icon: string
  tag?: 'i'
  color?: ''
  attributes?: ''
}
//#endregion

//#region PROPS
const props = withDefaults(defineProps<IconProps>(), {
  tag: 'i',
  color: '',
  attributes: ''
})

// #endregion
</script>

<template>
  <component
    :is="props.tag ? props.tag : 'i'"
    class="irc"
    :class="'irc-' + props.icon ? 'irc-' + props.icon : ''"
    :color="props.color"
    v-bind="props.attributes"
    aria-hidden="true"
  >
  </component>
</template>
