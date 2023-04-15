export const roundedClass = (rounded: string) => {
  let roundedValue = ''
  switch (rounded) {
    case '2xl':
      roundedValue = 'rounded-2xl'
      break
    case 'lg':
      roundedValue = 'rounded-lg'
      break
    case 'full':
      roundedValue = 'rounded-full'
      break

    default:
      roundedValue = 'rounded'
      break
  }
  return roundedValue
}

export const sizeClass = (width: number, height?: number) => {
  return height ? `w-${width} h-${height}` : `w-${width} h-${width}`
}
