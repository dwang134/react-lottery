import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react';

const Bank = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={3} w='100%' height='60%'>
      <GridItem w='80%' h='80%' bg='blue.500' />
      <GridItem w='80%' h='80%' bg='blue.500' />
      <GridItem w='80%' h='80%' bg='blue.500' />
      <GridItem w='80%' h='80%' bg='blue.500' />
    </Grid>
  )
}

export default Bank