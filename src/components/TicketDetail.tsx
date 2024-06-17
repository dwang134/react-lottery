import { Box, Text, Spacer} from "@chakra-ui/react";

interface TicketDetailProps {
    selectedNums: number[];
    total: number;
    finishSelect: boolean;
}

const TicketDetail:React.FC<TicketDetailProps> = ({selectedNums, total, finishSelect}) => {


    return(
        <Box bg='gray.50' w='15vw' height='60%' pl={2} pt={2} borderRadius='4px' border='1px'>
        <Text as='kbd' fontWeight='semibold'>Numbers Selected: <br/></Text>
        {selectedNums.map((num, index)=> (
            <Text key={index}>Mark: {num}{!finishSelect && <br/>}</Text>
        ))}
        <Text as='kbd' fontWeight='semibold'>Total: ${total}</Text>
        <br/>
        {finishSelect && (
            <Text as='u' fontWeight='medium' cursor='default'>Seleted 5 numbers, please add money to total</Text>
        )}
        </Box>
    )
}

export default TicketDetail