<script setup lang="ts">
// TODO:
//  1- image YES / NAME YES => image avatar
//  2- image NO / NAME YES => name avatar
//  3- image 404 / NAME YES => name avatar
//  4- image NO / NAME NO => place holder
import { computed, toRef, ref } from 'vue'
import { useDimension, useRadius } from '../../composables'

interface AvatarProps {
  src?: string
  username?: string
  backgroundColor?: string
  letterCount?: 1 | 2 | 3
  size?: number
  lighten?: number
  radius?: '2xl' | 'lg' | 'full' | 'default'
}

const props = withDefaults(defineProps<AvatarProps>(), {
  src: '',
  username: '',
  backgroundColor: '',
  letterCount: 2,
  size: 50,
  lighten: 80,
  radius: 'full'
})

const radiusClass = useRadius(toRef(props, 'radius'))
const sizeStyle = useDimension(toRef(props, 'size'), toRef(props, 'size'))

const imgError = ref(false)
const backgroundColors = [
  '#F44336',
  '#FF4081',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#795548',
  '#9E9E9E',
  '#607D8B'
]

const getInitials = (username: string) => {
  let parts = username.split(/[ -]/)
  let initials = ''
  for (let i = 0; i < props.letterCount; i++) {
    initials += parts[i].charAt(0)
  }
    if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
      initials = initials.replace(/[a-z]+/g, '‌  ')
    }
  initials = initials.slice(0, 3).toUpperCase()
  return initials
}
const randomBackgroundColor = (seed: number, colors: Array<string>) => {
  return colors[seed % colors.length]
}

const onImgError = () => {
  imgError.value = true
}
const lightenColor = (hex: string, amt: number) => {
  // From https://css-tricks.com/snippets/javascript/lighten-darken-color/
  let usePound = false
  if (hex[0] === '#') {
    hex = hex.slice(1)
    usePound = true
  }
  const num = parseInt(hex, 16)
  let r = (num >> 16) + amt
  if (r > 255) r = 255
  else if (r < 0) r = 0
  let b = ((num >> 8) & 0x00ff) + amt
  if (b > 255) b = 255
  else if (b < 0) b = 0
  let g = (num & 0x0000ff) + amt
  if (g > 255) g = 255
  else if (g < 0) g = 0
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

//COMPUTED
const isImage = computed(() => {
  return !imgError.value && props.src ? true : false
})

const backgroundColor = computed(() => {
  if (!isImage.value) {
    return props.backgroundColor || randomBackgroundColor(props.username.length, backgroundColors)
  } else {
    return ''
  }
})

const avatarStyle = computed(() => {
  const style = {
    lineHeight: `${props.size + Math.floor(props.size / 20)}px`
  }
  const imgBackgroundAndFontStyle = {
    background: `transparent url('${props.src}') no-repeat scroll 0% 0% / ${props.size}px ${props.size}px content-box border-box`
  }
  const initialBackgroundAndFontStyle = {
    backgroundColor: backgroundColor.value,
    font: `${Math.floor(props.size / 2.5)}px/${props.size}px Peyda Helvetica, Arial, sans-serif`,
    color: lightenColor(backgroundColor.value, props.lighten)
  }
  const backgroundAndFontStyle = isImage.value
    ? imgBackgroundAndFontStyle
    : initialBackgroundAndFontStyle
  Object.assign(style, backgroundAndFontStyle)
  return style
})
</script>
<template>
  <div>
    <div
      class="flex items-center font-bold justify-center text-center select-none"
      :class="radiusClass"
      :style="[sizeStyle, avatarStyle]"
      aria-hidden="true"
    >
      <img v-if="isImage" style="display: none;" :src="props.src" @error="onImgError" />
      <span v-show="!isImage">{{ getInitials(props.username) }}</span>
    </div>
  </div>
</template>

<style scoped></style>
