import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    size: 'lg',
    fontSize: 'sm',
    _disabled: {
      bgColor: 'gray.100',
      color: 'gray.700',
      opacity: 1
    }
  }
});

export const Input = defineMultiStyleConfig({ baseStyle });
