import { Box, Center, Text} from '@chakra-ui/react'
import React, {useEffect} from 'react'


interface NumberProps {
    value: number;
    selectedNums: number[]; 
    setSelectedNums: React.Dispatch<React.SetStateAction<number[]>>;
    finishSelect: boolean;
    setFinishSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const Number:React.FC<NumberProps> = ({value, selectedNums, setSelectedNums, finishSelect, setFinishSelect}) => {

  useEffect(()=> {
    if (selectedNums.length == 5){
        setFinishSelect(true);
    }else{
        setFinishSelect(false);
    }
}, [selectedNums])

const toggleSelect = (value: number) => {

  //check if value belongs in selected numbers array
  const index: number = selectedNums.indexOf(value);

  //if it finds an index, then it exists
  if (index > -1){
      //if exist
      setSelectedNums(selectedNums.filter((number) => number!= value));

  }else{
      //check the length of selected numbers first, cannot be more than 5
      if (selectedNums.length < 5){
          setSelectedNums(prevNums => [...prevNums, value]);
      }else{
          //shouldn't be abel to add anymore, turn on modal
          //setModalState(true);
          //set Bank toggle to on
      }
 
  }
}

  return (
    <Center bg={selectedNums.includes(value)? 'red.200' : 'gray.50'} w={20} h={20} borderRadius='full' border='1px' onClick={()=>toggleSelect(value)} cursor='pointer'>
    <Text fontSize='lg'>
    {value}
    </Text>
    </Center>
  )
}

export default Number