import React from 'react'
import Number from './Number';
import {Grid, GridItem} from '@chakra-ui/react';

const Numbers:React.FC<{numbers: number[]}> = ({numbers}) => {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    {numbers.map((number)=> 
      
        <GridItem>
        <Number value={number}/>
        </GridItem>

    )}
    </Grid>
  )
}

export default Numbers