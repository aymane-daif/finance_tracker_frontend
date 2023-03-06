import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

function IncomeList({ incomes }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Source</Th>
        </Tr>
      </Thead>
      <Tbody>
        {incomes.map((income) => (
          <Tr key={income.id}>
            <Td>{income.date}</Td>
            <Td>{income.amount}</Td>
            <Td>{income.source}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default IncomeList;
