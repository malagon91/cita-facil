// app/page.tsx
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function Home() {
  return (
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mb={6}>
          Bienvenido a Next.js con Chakra UI
        </Heading>
        <Text fontSize="lg" mb={6}>
          Esta es una configuración básica para empezar a trabajar con Next.js y Chakra UI.
        </Text>
        <Button colorScheme="teal" size="lg">
          Comienza aquí
        </Button>
      </Box>
  );
}
