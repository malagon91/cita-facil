'use client';
import React from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import CustomTheme from '../theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={CustomTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
