import React from 'react'
import Number from './Number';
import {Grid, GridItem, Flex} from '@chakra-ui/react';

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
            if (selectedNums.length >= 5){
                //shouldn't be abel to add anymore, turn on modal
                //setModalState(true);
                //set Bank toggle to on
            }else{
                setSelectedNums(prevNums => [...prevNums, value]);
                console.log('after adding: ', selectedNums);
            }
       
        }
    }


  return (
    <Flex w='100%' height='100%' align='center' justify='center'>
    <Grid templateColumns='repeat(5, 2fr)' gap={3} height='80%'> 
    {numbers.map((number, index)=> 
        <GridItem w={28} onClick={()=> toggleSelect(number)} key={index} style={{cursor: 'pointer'}}>
        <Number value={number} selectedNums={selectedNums} setSelectedNums={setSelectedNums}/>
        </GridItem>
    )}
    </Grid>
    </Flex>
  )
}

export default Numbers