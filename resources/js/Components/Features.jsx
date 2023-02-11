import { SVGProps } from 'react';
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';

const features = [
  {
    heading: 'Payments',
    content: 'Our store is integrated with Tripay to accept payments from all major indonesian merchants.',
    icon: <MdPayments size={30} />
  },
  {
    heading: 'Auto Delivery',
    content: 'Automatically deliver your products to your customers. No more manual work and no more delays.',
    icon: <FaTruck size={30} />
  },
  {
    heading: '100% Original',
    content: 'We only sell 100% original products. We do not sell any counterfeit products. This is our promise to you.',
    icon: <AiFillStar size={30} />
  }
];

const Features = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="3xl" fontWeight="bold" textAlign="center">
        Features
      </chakra.h3>
      <Text fontSize="lg" fontWeight="400" mb={20} textAlign="center" color={'gray.500'}>
        We've got you covered with everything you need to launch your product.
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {features.map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue('gray.100', 'gray.700')}
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
          >
            <Flex
              p={3}
              w="max-content"
              color="white"
              bgGradient="linear(to-l, teal.400,teal.600)"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4} mb={2}>
              {feature.content}
            </Text>
            <Link href="#" mt={5} fontSize="sm" color="teal.500">
              Learn more →
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;