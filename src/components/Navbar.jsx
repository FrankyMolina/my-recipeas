import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import { Box, Image, Flex, Link } from '@chakra-ui/core';

export default function Navbar() {
  return (
    <Flex
      justify="space-between"
      p="1rem"
      align="center"
      borderBottom="1px solid"
      borderColor="brand.blue"
    >
      <Box>
        <Link as={ReactLink} to="/">
          <Image src="/assets/cooking.jpg" alt="cooking puppet" size="60px" />
        </Link>
      </Box>

      <Flex>
        <Link as={ReactLink} to="/login" mr="1rem">
          Login
        </Link>

        <Link as={ReactLink} to="/shopping-list">
          Shopping list
        </Link>
      </Flex>
    </Flex>
  );
}
