import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

function ExpenseList({ expenses }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Payment Method</Th>
        </Tr>
      </Thead>
      <Tbody>
        {expenses.map((expense) => (
          <Tr key={expense.id}>
            <Td>{expense.date}</Td>
            <Td>{expense.amount}</Td>
            <Td>{expense.paymentMethod.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default ExpenseList;
