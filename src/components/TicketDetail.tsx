import { Box, Text, Spacer} from "@chakra-ui/react";



const TicketDetail:React.FC<{selectedNums: number[]}> = ({selectedNums}) => {


    return(
        <Box bg='blue.100' w='20%' height='100%'>
        <Text>Numbers Selected: </Text>
        {selectedNums.map((num, index)=> (
            <Text key={index}>{num}</Text>
        ))}
        <Spacer/>
        <Text>Total: $</Text>
        </Box>
    )
}

export default TicketDetail