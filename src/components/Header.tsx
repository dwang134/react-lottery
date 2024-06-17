import { Box, Center, Text} from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Center bg='white' w='100%' h='15%' px={6} py={4} pl={28}>
    <Text fontSize='4xl' as='samp'>WHE WHE on D'Avenue</Text>
    </Center>
  )
}

export default Header