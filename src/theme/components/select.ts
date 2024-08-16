import { type ChakraStylesConfig } from 'chakra-react-select';

export const SelectChakraStyles: ChakraStylesConfig = {
  control: (provided: any) => ({
    ...provided,
    fontSize: 'xs',
  }),
  multiValue: (provided: any) => ({
    ...provided,
    fontSize: 'xs',
    fontWeight: 'semibold'
  }),
  noOptionsMessage: (provided: any) => ({
    ...provided,
    fontSize: 'xs'
  }),
  option: (provided: any) => ({
    ...provided,
    fontSize: 'xs'
  }),
  loadingMessage: (provided: any) => ({
    ...provided,
    fontSize: 'xs'
  }),
  container: (provided: any) => ({
    ...provided,
    width: '100%'
  })
};
