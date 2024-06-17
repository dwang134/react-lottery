import React, {useState} from 'react'
import {Center, Grid, GridItem, Text, VStack} from '@chakra-ui/react';

interface BankProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  finishSelect: boolean;
}

const Bank:React.FC<BankProps> = ({balance, setBalance, total, setTotal, finishSelect}) => {

  const [cashOptions, setCashOptions] = useState<number []>([1,5,10,20]);

  //function that takes in money cost, subtract balance and then add it to total
  const addToTotal = (cashInput: number) => {
    //check if there's 5 numbers in selected numbers yet
    console.log(finishSelect);
    //check if there's any more money in balance
    if (balance <= 0){
      //tell user they are BROKE
    }else{
      (finishSelect) && setTotal(prevTotal => prevTotal + cashInput);
      setBalance(prevBalance=> prevBalance - cashInput);
    }
  }

  return (
    <VStack w='100%' h='60%'>
      <Grid templateColumns='repeat(2, 1fr)' gap={3} w='100%'>
        {cashOptions.map((cash:number, index: number)=> 
          <GridItem w={32} h={32} bg='blue.500' borderRadius='10px' key={index} onClick={()=>addToTotal(cash)}>
          <Center h='100%' w='100%'>
          <Text fontSize='3xl' cursor='pointer'>${cash}</Text>
          </Center>
          </GridItem>
        )}
      </Grid>
      <Text as='samp' fontSize='md'>Your Balance is currenty: ${balance}</Text>
    </VStack>
  )
}

export default Bank