import { Box, Center } from '@chakra-ui/react'
import React from 'react'


interface NumberProps {
    value: number;
    selectedNums: number[]; 
    setSelectedNums: React.Dispatch<React.SetStateAction<number[]>>;
}

const Number:React.FC<NumberProps> = ({value, selectedNums}) => {

  return (
    <Center bg={selectedNums.includes(value)? 'red.200' : 'cyan.200'} w={20} h={20} borderRadius='full' border='1px'>
    {value}
    </Center>
  )
}

export default Number