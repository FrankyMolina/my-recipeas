import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import { Flex, Box } from '@chakra-ui/core';

export default function Layout({ children }) {
  return (
    <Flex h="100vh" flexDirection="column">
      <Navbar />

      <Box as="main" flex="1" p="1rem" bg="brand.lightBlue">
        {children}
      </Box>

      <Footer />
    </Flex>
  );
}
