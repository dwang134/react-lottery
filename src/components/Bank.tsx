import React, {useState} from 'react'
import {Center, Grid, GridItem, Text, VStack, HStack, Button, Spinner} from '@chakra-ui/react';
import PaidIcon from '@mui/icons-material/Paid';

interface BankProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  finishSelect: boolean;
  msg: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
}

const Bank:React.FC<BankProps> = ({balance, setBalance, total, setTotal, finishSelect, msg, setMsg}) => {

  const [cashOptions, setCashOptions] = useState<number []>([1,5,10,20]);

  //function that takes in money cost, subtract balance and then add it to total
  const addToTotal = (cashInput: number) => {
    //check if there's 5 numbers in selected numbers yet
    console.log(finishSelect);
    //check if there's any more money in balance
    if (balance <=0){
        setMsg("You are BROKE! get more money")
    }else{
      if (balance < cashInput){
        setMsg("You don't have enough money");
      }else{
        (finishSelect) && setTotal(prevTotal => prevTotal + cashInput);
        setBalance(prevBalance=> prevBalance - cashInput);
        setMsg("");
      }
    }
  }

  return (
    <VStack w='100%' h='60%' >
      <Text>{msg}</Text>
      <Grid templateColumns='repeat(2, 1fr)' gap={4} w='80%'>
        {cashOptions.map((cash:number, index: number)=> 
          <GridItem w={32} h={24}  key={index} onClick={ ()=>addToTotal(cash) }>
          <Button bg='gray.50' borderRadius='10px' border='1px' w='100%' h='100%' isLoading={finishSelect ? false : true}>
            <Text mt={0.5}><PaidIcon/></Text>
            <Text fontSize='3xl' cursor={finishSelect ? 'pointer' : ''}>{cash}</Text>
          </Button>
          </GridItem>
        )}
      </Grid>
      <Text as='samp' fontSize='md' pt={4}>Your Balance is currently: ${balance}</Text>
    </VStack>
  )
}

export default Bank