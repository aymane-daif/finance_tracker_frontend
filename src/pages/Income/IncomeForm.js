import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

function IncomeForm({ onCreateIncome }) {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let income = { date, amount, source };
    onCreateIncome(income);
    setDate('');
    setAmount('');
    setSource('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id='date' isRequired>
            <FormLabel>Date</FormLabel>
            <Input
              type='date'
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </FormControl>
          <FormControl id='amount' isRequired>
            <FormLabel>Amount</FormLabel>
            <Input
              type='number'
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </FormControl>
          <FormControl id='source' isRequired>
            <FormLabel>Source</FormLabel>
            <Input
              type='text'
              value={source}
              onChange={(event) => setSource(event.target.value)}
            />
          </FormControl>
          <Button type='submit'>Create</Button>
        </VStack>
      </form>
    </>
  );
}

export default IncomeForm;
