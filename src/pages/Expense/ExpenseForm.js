import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
} from "@chakra-ui/react";

function ExpenseForm({ paymentMethods, onCreateExpense }) {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let expense = {
      date,
      amount,
      paymentMethodName: paymentMethod || paymentMethods[0]?.name,
    };

    onCreateExpense(expense);

    setDate("");
    setAmount("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="date" isRequired>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </FormControl>
          <FormControl id="amount" isRequired>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </FormControl>
          <FormControl id="paymentMethod" isRequired>
            <FormLabel>Payment Method</FormLabel>
            <Select
              value={paymentMethod || paymentMethods[0]?.name}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              {paymentMethods.map((el) => (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button type="submit">Create</Button>
        </VStack>
      </form>
    </>
  );
}

export default ExpenseForm;
