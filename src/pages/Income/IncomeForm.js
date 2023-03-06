import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

function IncomeForm({ onCreateIncome }) {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!date || !amount || !source) {
      setError('All fields are required');
      return;
    }
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
          <FormControl id='date' isRequired isInvalid={!!error}>
            <FormLabel>Date</FormLabel>
            <Input
              type='date'
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <FormControl id='amount' isRequired isInvalid={!!error}>
            <FormLabel>Amount</FormLabel>
            <Input
              type='number'
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <FormControl id='source' isRequired isInvalid={!!error}>
            <FormLabel>Source</FormLabel>
            <Input
              type='text'
              value={source}
              onChange={(event) => setSource(event.target.value)}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <Button type='submit'>Create</Button>
        </VStack>
      </form>
    </>
  );
}

export default IncomeForm;
