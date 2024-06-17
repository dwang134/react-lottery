import { Box, Text, Spacer} from "@chakra-ui/react";

interface TicketDetailProps {
    selectedNums: number[];
    total: number;
}

const TicketDetail:React.FC<TicketDetailProps> = ({selectedNums, total}) => {


    return(
        <Box bg='cyan.50' w='20%' height='100%' pl={2} pt={2} borderRadius='2px'>
        <Text as='kbd'>Numbers Selected: </Text>
        {selectedNums.map((num, index)=> (
            <Text key={index}>Mark: {num}</Text>
        ))}
        <Spacer/>
        <Text as='kbd'>Total: ${total}</Text>
        </Box>
    )
}

export default TicketDetail