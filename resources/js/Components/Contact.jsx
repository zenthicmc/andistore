import { chakra, Stack, useColorModeValue, Container, Link, Box, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Container maxW="5xl" p="6">
      <Banner />
    </Container>
  );
};

const Banner = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={5}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      rounded="lg"
      boxShadow="md"
      bg={useColorModeValue('gray.100', 'gray.700')}
      p={{ base: 8, md: 16 }}
    >
      <Box>
        <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
          Need Some Help?
        </chakra.h1>
        <chakra.h2
          fontSize="xl"
          lineHeight={1.2}
          fontWeight="500"
          bgGradient="linear(to-l, teal.400,teal.600)"
          bgClip="text"
        >
          Get in touch with us in this account
        </chakra.h2>
      </Box>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: '100%', sm: 'auto' }}
      >
        <Button
          as={Link}
          href="#"
          color="white"
          variant="solid"
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
          bgGradient="linear(to-l, teal.400,teal.600)"
          _hover={{ bgGradient: 'linear(to-l, teal.400,teal.600)', opacity: 0.9 }}
        >
          Discord
        </Button>
        <Button
          as={Link}
          href="#"
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          bg={useColorModeValue('gray.200', 'gray.600')}
          _hover={{ bg: useColorModeValue('gray.300', 'gray.500') }}
          lineHeight={1}
        >
          Whatsapp
        </Button>
      </Stack>
    </Stack>
  );
};

export default Contact;