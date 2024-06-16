import React from 'react'
import Number from './Number';
import {Grid, GridItem} from '@chakra-ui/react';

interface NumbersProps {
    numbers: number [];
    selectedNums: number[] ;
    setSelectedNums: React.Dispatch<React.SetStateAction<number[]>>;
}

const Numbers:React.FC<NumbersProps> = ({numbers, selectedNums, setSelectedNums}) => {

    const toggleSelect = (value: number) => {

        console.log('before: ', selectedNums);

        //check if value belongs in selected numbers array
        const index: number = selectedNums.indexOf(value);

        //if it finds an index, then it exists
        if (index > -1){
            //if exist
            setSelectedNums(selectedNums.filter((number) => number!= value));
            //remove one item from that index
            console.log('after remove: ', selectedNums);
        }else{
            //check the length of selected numbers first, cannot be more than 5
            setSelectedNums(prevNums => [...prevNums, value]);
            console.log('after adding: ', selectedNums);
        }
    }


  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    {numbers.map((number, index)=> 
        <GridItem onClick={()=> toggleSelect(number)} key={index}>
        <Number value={number} selectedNums={selectedNums} setSelectedNums={setSelectedNums}/>
        </GridItem>
    )}
    </Grid>
  )
}

export default Numbers