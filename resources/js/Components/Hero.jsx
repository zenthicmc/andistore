import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';
import { MdBolt } from 'react-icons/md';
import * as Scroll from 'react-scroll';

const Hero = () => {
  const ScrollLink = Scroll.Link;

  return (
    <Container maxW="100%" py={24}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px" marginRight={'10'}>
          <ScrollLink activeClass="active" to="products" spy={true} smooth={true} offset={50} duration={500}>
            <HStack
              p={1}
              rounded="full"
              fontSize="sm"
              w="max-content"
              bg={useColorModeValue('gray.300', 'gray.600')}
            >
              <Box
                py={1}
                px={2}
                lineHeight={1}
                rounded="full"
                color="white"
                bgGradient="linear(to-l, teal.400,teal.600)"
              >
                What's new
              </Box>
              <HStack spacing={1} alignItems="center" justifyContent="center">
                <Text lineHeight={1}>See our recent products</Text>
                <Icon as={GoChevronRight} w={4} h={4} />
              </HStack>
            </HStack>
          </ScrollLink>
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
            Beli produk digital original hanya di <br />
            <chakra.span color="teal">Blox Fruit Store</chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            Bloc Fruit Store adalah toko online yang menjual produk digital original.
          </Text>
          <ScrollLink activeClass="active" to="products" spy={true} smooth={true} offset={50} duration={500}>
            <HStack
              spacing={{ base: 0, sm: 2 }}
              mb={{ base: '3rem !important', sm: 0 }}
              flexWrap="wrap"
            >
              <chakra.button
                w={{ base: '100%', sm: 'auto' }}
                h={12}
                px={6}
                color="white"
                size="lg"
                rounded="md"
                mb={{ base: 2, sm: 0 }}
                zIndex={5}
                lineHeight={1}
                bgGradient="linear(to-l, teal.400,teal.600)"
                _hover={{ bgGradient: 'linear(to-l, teal.400,teal.600)', opacity: 0.9 }}
              >
                <chakra.span> Explore Product </chakra.span>
                <Icon as={MdBolt} h={4} w={4} ml={1} />
              </chakra.button>
            </HStack>
          </ScrollLink>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            minW={{ base: 'auto', md: '30rem' }}
            objectFit="cover"
            src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&q=80&
            fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default Hero;