import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Select,
} from '@chakra-ui/react';

function ExpenseForm({ paymentMethods, onCreateExpense }) {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!date || !amount) {
      setError('All fields are required');
      return;
    }
    let expense = { date, amount };
    expense.paymentMethod = paymentMethods.find(
      (p) => p.name === (paymentMethod || paymentMethods[0].name)
    );

    onCreateExpense(expense);

    setDate('');
    setAmount('');
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
          <FormControl id='paymentMethod' isRequired isInvalid={!!error}>
            <FormLabel>Payment Method</FormLabel>
            <Select
              value={paymentMethod || paymentMethods[0]?.name}
              onChange={(e) => setPaymentMethod(e.target.value)}>
              {paymentMethods.map((el) => (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <Button type='submit'>Create</Button>
        </VStack>
      </form>
    </>
  );
}

export default ExpenseForm;
