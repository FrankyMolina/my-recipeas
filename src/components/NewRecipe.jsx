import React, { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  Heading,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Tag,
  TagIcon,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/core';

const emptyRecipeState = { recipeName: '', ingredients: [], steps: [] };

export default function SingleRecipe() {
  const [recipeState, setRecipeState] = useState(emptyRecipeState);
  const [recipeNameState, setRecipeNameState] = useState('');
  const [ingredientsState, setIngredientsState] = useState([]);
  const [recipeStepsState, setRecipeStepsState] = useState([]);

  // NAME AND IMAGE INPUTCHANGE AND SUBMIT
  function handleRecipeInputChange(ev) {
    const { value } = ev.target;

    setRecipeNameState(value);
  }

  function handleRecipeInputSubmit(ev) {
    ev.preventDefault();

    setRecipeState({
      ...recipeState,
      recipeName: recipeNameState,
    });

    setRecipeNameState('');
  }

  // INGREDIENTS INPUT CHANGE AND SUBBMIT

  function handleIngredientsInputChange(ev) {
    const { value } = ev.target;

    setIngredientsState([value]);

    console.log(ingredientsState);
  }

  function handleIngredientsSubmit(ev) {
    ev.preventDefault();

    setRecipeState({
      ...recipeState,
      ingredients: [...recipeState.ingredients, ingredientsState],
    });

    setIngredientsState([]);

    console.log(recipeState);
  }

  //RECIPE STEPS INPUT CHANGE AND SUBMIT

  function handleRecipeStepsInputChange(ev) {
    const { value } = ev.target;

    setRecipeStepsState([value]);
  }

  function handleRecipeStepsSubmit(ev) {
    ev.preventDefault();

    setRecipeState({
      ...recipeState,
      steps: [...recipeState.steps, recipeStepsState],
    });

    setRecipeStepsState([]);

    console.log(recipeState);
  }

  return (
    <Flex direction={['column', 'row']}>
      <Flex
        direction="column"
        border="1px solid"
        borderRadius="5px"
        p="1rem"
        flexBasis={['100%', '50%']}
        m="0.5rem"
      >
        <Heading as="h2" size="20px" mb="1rem">
          Create new recipe
        </Heading>

        <Flex
          as="form"
          onSubmit={handleRecipeInputSubmit}
          direction="column"
          borderBottom="1px dotted"
          pb="1rem"
        >
          <FormControl isRequired>
            <FormLabel htmlFor="recipeName">Recipe name</FormLabel>
            <Input
              type="text"
              name="recipeName"
              value={recipeNameState}
              onChange={handleRecipeInputChange}
            />
            <FormHelperText id="recipeName-helper-text">
              Put here your recipe's name.
            </FormHelperText>
          </FormControl>

          <FormControl pt="0.5rem">
            <FormLabel htmlFor="recipeImg">Upload your picture</FormLabel>
            <Box>
              <Button position="relative" onClick={() => {}}>
                Upload file.
                <Input
                  type="file"
                  name="recipeImg"
                  position="absolute"
                  opacity="0"
                />
              </Button>
            </Box>
            <FormHelperText id="recipeImg-helper-text">
              Image of your finished recipe.
            </FormHelperText>
          </FormControl>

          <Button type="submit" variantColor="teal" variant="outline">
            Save Name and Image
          </Button>
        </Flex>

        <Flex
          as="form"
          onSubmit={handleIngredientsSubmit}
          direction="column"
          borderBottom="1px dotted"
          pb="1rem"
        >
          <FormControl pt="0.5rem">
            <FormLabel htmlFor="recipeIngredient">Recipe Ingredients</FormLabel>
            <Input
              type="text"
              name="recipeIngredient"
              value={ingredientsState}
              onChange={handleIngredientsInputChange}
            />
            <FormHelperText id="recipeIngredient-helper-text">
              One ingredient each time please 😄
            </FormHelperText>
          </FormControl>

          <Button type="submit" variantColor="teal" variant="outline">
            Add ingredient
          </Button>
        </Flex>

        <Flex
          as="form"
          onSubmit={handleRecipeStepsSubmit}
          direction="column"
          pb="1rem"
          flexBasis={['100%', '50%']}
          m="0.5rem"
        >
          <FormControl pt="0.5rem">
            <FormLabel htmlFor="recipeSteps">Recipe Steps</FormLabel>
            <Textarea
              type="text"
              name="recipeSteps"
              value={recipeStepsState}
              onChange={handleRecipeStepsInputChange}
            />
            <FormHelperText id="recipeSteps-helper-text">
              Add your steps here!
            </FormHelperText>
          </FormControl>

          <Button type="submit" variantColor="teal" variant="outline">
            Add step
          </Button>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        border="1px solid"
        borderRadius="5px"
        p="1rem"
        flexBasis={['100%', '50%']}
        m="0.5rem"
      ></Flex>
    </Flex>
  );
}
