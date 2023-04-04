<script lang="ts" setup>
import TestIcon from './Icons/TestIcon.vue';
// #region INTERFACE
interface VIconProps {
  icon: any,
  color?: ''
  attributes?:''
}
//#endregion

//#region PROPS
const props = withDefaults(defineProps<VIconProps>(), {
  icon: TestIcon,
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