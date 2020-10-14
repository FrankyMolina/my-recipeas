import React from 'react';

import { Flex, Link } from '@chakra-ui/core';

export default function Footer() {
  return (
    <Flex justify='center'>
      <Link
        href="https://frankymolina.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Franky Molina Dev © 2020
      </Link>
    </Flex>
  );
}
