<script lang="ts" setup>
// #region INTERFACE
interface VIconProps {
  icon: string
  color?: ''
  attributes?:''
}
//#endregion

//#region PROPS
const props = withDefaults(defineProps<VIconProps>(), {
  icon: '',
  color: '',
  attributes:'',
})

// #endregion
</script>

<template>
    <component
      :is="props.icon"
      :color="props.color"
      v-bind="props.attributes"
    >
    </component>
</template>