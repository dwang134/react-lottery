import { Box, Center } from '@chakra-ui/react'
import React from 'react'


interface NumberProps {
    value: number;
    selectedNums: number[]; 
    setSelectedNums: React.Dispatch<React.SetStateAction<number[]>>;
}

const Number:React.FC<NumberProps> = ({value}) => {

  return (
    <Center bg='blue.100' w={6} h={8}>
    {value}
    </Center>
  )
}

export default Number