import React from 'react';

import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/core';

export default function PreviewOfNewRecipe({ fullRecipeProps }) {
  const { recipeState, setRecipeState } = fullRecipeProps;
  const { recipeName, ingredients, steps } = recipeState;

  //REMOVE INGREDIENT
  function removeIngredient(idToRemove) {
    const newIngredientsList = ingredients.filter(
      (e) => e.ingredientID !== idToRemove
    );

    setRecipeState({
      ...recipeState,
      ingredients: newIngredientsList,
    });
  }

  //REMOVE STEP
  function removeStep(idToRemove) {
    const newStepsList = steps.filter((e) => e.stepID !== idToRemove);

    setRecipeState({
      ...recipeState,
      steps: newStepsList,
    });
  }

  return (
    <Flex
      direction="column"
      align="center"
      border="1px solid"
      borderRadius="5px"
      p="1rem"
      flexBasis={['100%', '50%']}
      m="0.5rem"
      position="relative"
    >
      <Image
        src="/assets/recipe-mock-img.jpg"
        alt="bowl of peas with chilli and mint"
        w="300px"
        h="auto"
        borderRadius="5px"
      />

      <Heading mb="2rem" mt="0.5rem" borderBottom="1px solid">
        {recipeName}
      </Heading>

      <Box>
        <Stack spacing={4} display="flex" direction="row" flexWrap="wrap">
          {ingredients.map((valueOf) => (
            <Tag size="md" marginBottom="0.5rem" key={valueOf.ingredientID}>
              <TagLabel>{valueOf.ingredientName}</TagLabel>
              <TagCloseButton
                onClick={() => removeIngredient(valueOf.ingredientID)}
              />
            </Tag>
          ))}
        </Stack>
      </Box>

      <Flex display="column" mb="4rem">
        {steps.map((step, idx) => (
          <Box w="100%" key={step.stepID}>
            <Flex
              justify="space-between"
              align="center"
              mt="0.5rem"
              borderBottom="0.5px dotted"
            >
              <Heading size="sm">Step {idx + 1}</Heading>
              <Button
                size="xs"
                mb="2px"
                variant="outline"
                onClick={() => removeStep(step.stepID)}
              >
                X
              </Button>
            </Flex>

            <Text wordBreak="break-words">{step.stepDescription}</Text>
          </Box>
        ))}
      </Flex>

      <Button
        variant="outline"
        position="absolute"
        bottom="1rem"
        onClick={() => console.log('i will be connected to firebase')}
      >
        Create recipe
        <span role="img" aria-label="smiling emoji">
          🙂
        </span>
      </Button>
    </Flex>
  );
}
