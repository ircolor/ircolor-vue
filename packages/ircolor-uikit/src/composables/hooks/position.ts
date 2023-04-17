import { computed } from 'vue'
import type { Ref } from 'vue'

export const usePosition = (position: Ref<string>) =>
  computed(() => {
    let iconPosition: string = ''
    switch (position.value) {
      case 'top':
        iconPosition = 'flex-col-reverse'
        break
      case 'bottom':
        iconPosition = 'flex-col'
        break
      case 'left':
        iconPosition = 'flex-row-reverse'
        break
      default:
        iconPosition = ''
        break
    }
    return iconPosition
  })
