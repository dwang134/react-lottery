import './App.css'
import Header from './components/Header'
import Bank from './components/Bank'
import Numbers from './components/Numbers'
import TicketDetail from './components/TicketDetail'
import { Box, HStack, Button, Spacer, VStack, Container, Flex, Text} from '@chakra-ui/react'
import { useState, useEffect} from 'react'

type Ticket = {
  id: number;
  numbers: number[];
  total: number;
}

function App() {

  const [numbers, setNumbers] = useState<number[]>(Array.from({ length: 20 }, (_, i) => i + 1));
  const [selectedNums, setSelectedNums] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [finishSelect, setFinishSelect] = useState<boolean>(false);
  const [balance, setBalance]= useState<number>(100);
  const [msg, setMsg] = useState<string>("");
  const [tickets, setTickets] = useState<Ticket []>([]);

  const clearAllSelected = ():void => {
    //basically reset and clear everything
    setSelectedNums([]);
    setFinishSelect(false);
    setTotal(0);
    setBalance(100);
    setMsg("");
  }

  const addRandomNum = ():void => {
    const numbers: number[] = [];
    while (numbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setSelectedNums(numbers);
  }

  const createNewTicket = ():void => {

    //check if done selecting and total > 0
    if (finishSelect && total > 0){
      const newTicket: Ticket = {
        id: tickets.length+1,
        numbers: selectedNums,
        total: total
      }
      setTickets(prevTickets => [...prevTickets, newTicket]);
      clearAllSelected();
    }else{
      setMsg("Please finish selecting first!")
    }

  }


  return (
    <Container maxW='80vw' maxH='100vh' w='100vw' h='100vh'  pt={4} bg='white'>
    <Header/>
    <Flex direction='row' width='100%' height='80%' justify='space-between' >
      <Flex direction='column' align='center' justify='center' width='20vw' height='70%' p={4} maxW='20vw'>
      <Bank balance={balance} setBalance={setBalance} total={total} setTotal={setTotal} finishSelect={finishSelect} msg={msg} setMsg={setMsg}/>
      <Box w='80%'>
      {tickets.map((ticket)=> (
        <Box height={16} fontSize={16} key={ticket.id}>
        <Text fontWeight='semibold'>Ticket {ticket.id}, </Text><Text>numbers[{ticket.numbers}],total: ${ticket.total}</Text>
        </Box>
      ))}
      </Box>
      </Flex>
      <VStack direction='column' width='40vw' height='100%' p={4}>
        <Numbers numbers={numbers} selectedNums={selectedNums} setSelectedNums={setSelectedNums} finishSelect={finishSelect} setFinishSelect={setFinishSelect}/>
        <br/>
        <HStack>
        <Button colorScheme='teal' variant='outline' onClick={()=> createNewTicket()}>Cash</Button>
        <Spacer/>
        <Button colorScheme='teal' variant='outline' onClick={()=>clearAllSelected()}>Clear</Button>
        <Spacer/>
        <Button colorScheme='teal' variant='outline' onClick={()=>addRandomNum()}>select Random</Button>
        </HStack>
      </VStack>
      <TicketDetail selectedNums={selectedNums} total={total} finishSelect={finishSelect}/>
    </Flex>
    </Container>
  )
}

export default App
