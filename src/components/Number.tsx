import { Box, Center } from '@chakra-ui/react'
import React from 'react'

const Number:React.FC<{value: number}> = ({value}) => {
  return (
    <Center bg='blue.100' w={6} h={8}>
    {value}
    </Center>
  )
}

export default Number