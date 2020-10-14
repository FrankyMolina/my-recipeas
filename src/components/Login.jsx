import React, { useState } from 'react';

import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/core';

const emptyLoginState = { email: '', password: '' };

export default function Login() {
  const [loginState, setLoginState] = useState(emptyLoginState);

  const { email, password } = loginState;

  function handleInputChange(ev) {
    const inputName = ev.target.name;
    const value = ev.target.value;

    setLoginState({
      ...loginState,
      [inputName]: value,
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log(loginState);
    setLoginState(emptyLoginState);
  }

  return (
    <Flex justify="center" align="center" mt={["1rem", "3rem"]}>
      <Flex
        as="form"
        onSubmit={handleSubmit}
        direction="column"
        alignItems="center"
        border="1px solid"
        borderColor="brand.lightLightBlue"
        borderRadius="5px"
        p="2rem"
      >
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <FormHelperText id="email-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl isRequired pt="1rem">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <FormHelperText id="password-helper-text">
            We'll encrypt it. Don't worry.
          </FormHelperText>
        </FormControl>

        <Button type="submit" variantColor="teal" variant="outline" mt="2rem">
          Let's go!
        </Button>
      </Flex>
    </Flex>
  );
}
