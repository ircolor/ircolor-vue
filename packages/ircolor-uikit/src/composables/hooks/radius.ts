import { computed } from 'vue'
import type { Ref } from 'vue'

export const useRadius = (props: Ref<string>) => 
  computed(() => {
    let radiusValue: string = ''
    switch (props.value) {
      case '2xl':
        radiusValue = 'rounded-2xl'
        break
      case 'lg':
        radiusValue = 'rounded-lg'
        break
      case 'full':
        radiusValue = 'rounded-full'
        break

      default:
        radiusValue = 'rounded'
        break
    }
    return radiusValue
  })
