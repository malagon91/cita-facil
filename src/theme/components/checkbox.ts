import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontSize: 'xs'
  },
  container: {
    opacity: 1
  }
})
const config = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    size: 'md'
  }
})

export const Checkbox = config;
