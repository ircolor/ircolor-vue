import { computed } from 'vue'
import type { Ref } from 'vue'

export const useDimension = (width: Ref<number>, height?: Ref<number>) =>
  computed(() => {
    return height?.value ? `width:${width.value}px; height:${height.value}px` : `width:${width.value}px; height:${width.value}px`
  })
