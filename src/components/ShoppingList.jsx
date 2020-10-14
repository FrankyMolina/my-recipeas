import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import {
  Flex,
  Button,
  Heading,
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/core';

const emptyInputState = {
  newProduct: '',
  productPrice: '',
  productId: '',
};

export default function ShoppingList() {
  const [inputState, setInputState] = useState(emptyInputState);
  const [shoppingListState, setShoppingListState] = useState([]);

  function handleInputChange(ev) {
    const inputName = ev.target.name;
    const value = ev.target.value;

    setInputState({
      ...inputState,
      [inputName]: value,
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    setShoppingListState([
      ...shoppingListState,
      { ...inputState, productId: uuidv4() },
    ]);

    setInputState(emptyInputState);
  }

  function removeProduct(idToRemove) {
    const newShoppingList = shoppingListState.filter(
      (e) => e.productId !== idToRemove
    );

    setShoppingListState(newShoppingList);
  }

  function removeAllProducts() {
    setShoppingListState([]);
  }

  const listTotalPrice = shoppingListState.reduce(
    (acc, next) => acc + Number(next.productPrice),
    0
  );

  const { newProduct, productPrice } = inputState;

  return (
    <Flex direction="column">
      <Flex
        as="form"
        onSubmit={handleSubmit}
        direction={['column', 'row']}
        justify="space-around"
        align="center"
        borderBottom="1px solid"
        borderColor="brand.lightLightBlue"
        pb="1rem"
      >
        <FormControl isRequired w={['100%', '30%']}>
          <FormLabel htmlFor="newProduct">New product</FormLabel>
          <Input
            type="text"
            name="newProduct"
            value={newProduct}
            onChange={handleInputChange}
          />
          <FormHelperText id="email-helper-text">
            Add the product name.
          </FormHelperText>
        </FormControl>

        <FormControl pt={['1rem', 0]} w={['100%', '30%']}>
          <FormLabel htmlFor="productPrice">Product price</FormLabel>
          <Input
            type="number"
            name="productPrice"
            step=".01"
            min="0"
            value={productPrice}
            onChange={handleInputChange}
          />
          <FormHelperText id="email-helper-text">
            Add the product price.
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          variantColor="teal"
          variant="outline"
          mt={['2rem', 0]}
          w={['100%', '20%']}
        >
          Add product.
        </Button>
      </Flex>

      <Flex direction="column">
        <Heading as="h2" size="20px" pt="0.5rem" textAlign="center">
          Product List.
        </Heading>

        <Box>
          {shoppingListState.map((item) => (
            <Flex
              direction="row"
              justify="space-between"
              align="center"
              key={item.productId}
              pt="0.5rem"
              borderBottom="0.5px dotted"
            >
              <Text w="40px">{item.productPrice ? item.productPrice : 0}€</Text>
              <Text fontWeight="bold">{item.newProduct}</Text>
              <Button
                onClick={() => removeProduct(item.productId)}
                variantColor="red"
                variant="solid"
                size="xs"
              >
                X
              </Button>
            </Flex>
          ))}
        </Box>
      </Flex>

      <Box mt="1rem" borderTop="1px solid" borderColor="brand.lightLightBlue">
        <Heading as="h3" size="sm" textAlign="center">
          Total: {Number.isNaN(listTotalPrice) ? ' ' : listTotalPrice}€
        </Heading>
      </Box>

      <Flex justify="center" mt="1rem">
        <Button
          onClick={() => removeAllProducts()}
          variantColor="red"
          variant="ghost"
        >
          Clear List
        </Button>
      </Flex>
    </Flex>
  );
}
