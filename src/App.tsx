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
  const [finishSelect, setFinishSelect] = useState<boolean>(false);
  const [balance, setBalance]= useState<number>(100);

  const clearAllSelected = () => {
    //basically reset and clear everything
    setSelectedNums([]);
    setFinishSelect(false);
    setTotal(0);
    setBalance(100);
  }

  const addRandomNum = () => {
    const numbers: number[] = [];
    while (numbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setSelectedNums(numbers);
  }

  return (
    <Container maxW='80vw' maxH='100vh' w='100vw' h='100vh'  pt={4}>
    <Header/>
    <Flex direction='row' width='80vw' height='80vh' justify='center'>
      <Flex direction='column' align='center' width='20vw' height='70%' p={4}>
      <Box width='100%' height='30%'>some image</Box>
      <Spacer/>
      <Bank balance={balance} setBalance={setBalance} total={total} setTotal={setTotal} finishSelect={finishSelect}/>
      </Flex>
      <VStack direction='column' width='40vw' height='100%' p={4}>
        <Numbers numbers={numbers} selectedNums={selectedNums} setSelectedNums={setSelectedNums} finishSelect={finishSelect} setFinishSelect={setFinishSelect}/>
        <HStack>
        <Button colorScheme='teal' variant='outline'>Cash</Button>
        <Spacer/>
        <Button colorScheme='teal' variant='outline' onClick={()=>clearAllSelected()}>Clear</Button>
        <Spacer/>
        <Button colorScheme='teal' variant='outline' onClick={()=>addRandomNum()}>select Random</Button>
        </HStack>
      </VStack>
      <TicketDetail selectedNums={selectedNums} total={total}/>
    </Flex>
    </Container>
  )
}

export default App
