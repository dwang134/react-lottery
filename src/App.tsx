import './App.css'
import Header from './components/Header'
import Bank from './components/Bank'
import Numbers from './components/Numbers'
import TicketDetail from './components/TicketDetail'
import { Box, HStack, Button, Spacer, VStack, Container, Flex} from '@chakra-ui/react'
import { useState, useEffect} from 'react'

function App() {

  const [numbers, setNumbers] = useState<number[]>(Array.from({ length: 20 }, (_, i) => i + 1));
  const [selectedNums, setSelectedNums] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [balance, setBalance]= useState<number>(100);

  //
  useEffect(()=> {
    
  }, [selectedNums])

  return (
    <Container maxW='80vw' maxH='100vh' w='100vw' h='100vh' bg='gray.200' pt={4}>
    <Header/>
    <Flex direction='row' height='80%' justify='center'>
      <Flex direction='column' align='center' width='20%' height='70%' bg='teal.50' p={4}>
      <Box width='100%' height='30%' bg='purple.300'>some image</Box>
      <Spacer/>
      <Bank/>
      </Flex>
      <Box bg='cyan.100' w='50%' height='100%'>
      <VStack direction='column' height='80%'>
        <Numbers numbers={numbers} selectedNums={selectedNums} setSelectedNums={setSelectedNums}/>
        <HStack>
        <Button colorScheme='teal' variant='outline'>Cash</Button>
        <Spacer/>
        <Button colorScheme='teal' variant='outline'>Clear</Button>
        </HStack>
      </VStack>
      </Box>
      <TicketDetail selectedNums={selectedNums}/>
    </Flex>
    </Container>
  )
}

export default App
