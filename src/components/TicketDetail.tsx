import { Box, Text, Spacer} from "@chakra-ui/react";

const TicketDetail = () => {
    return(
        <Box bg='blue.100' w='20%' height='100%'>
        <Text>Numbers Selected</Text>
        <Spacer/>
        <Text>Total: $</Text>
        </Box>
    )
}

export default TicketDetail