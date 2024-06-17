import React, {useEffect} from 'react'
import Number from './Number';
import {Grid, GridItem, Flex} from '@chakra-ui/react';

interface NumbersProps {
    numbers: number [];
    selectedNums: number[] ;
    setSelectedNums: React.Dispatch<React.SetStateAction<number[]>>;
    finishSelect: boolean;
    setFinishSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const Numbers:React.FC<NumbersProps> = ({numbers, selectedNums, setSelectedNums, finishSelect, setFinishSelect}) => {

  return (
    <Flex direction='row' justifyContent='center' alignItems='center' w='100%' h='60%'>
    <Grid templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)', 'repeat(5, 1fr)']} gap={2} pl={8}> 
    {numbers.map((number, index)=> 
        <GridItem w={28} key={index}>
        <Number value={number} selectedNums={selectedNums} setSelectedNums={setSelectedNums} finishSelect={finishSelect} setFinishSelect={setFinishSelect}/>
        </GridItem>
    )}
    </Grid>
    </Flex>

  )
}

export default Numbers