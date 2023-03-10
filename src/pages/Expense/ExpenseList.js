import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  ButtonGroup,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import axios from "axios";
import { CheckIcon } from "@chakra-ui/icons";
import DeleteModal from "../../components/DeleteModal";

function ExpenseList({ expenses, setExpenses }) {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  function handleDateChange(newDate) {
    setDate(newDate);
  }
  function handleAmountChange(newAmount) {
    setAmount(newAmount);
  }

  function updateExpense(expense) {
    let newExpense = {
      ...expense,
      date: date || expense.date,
      amount: amount || expense.amount,
    };
    console.log(newExpense);
    axios
      .put(`http://localhost:8082/api/v1/expenses/${expense.id}`, newExpense)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Payment Method</Th>
            <Th textAlign={"center"}>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {expenses.map((expense) => (
            <Tr key={expense.id}>
              <Td>
                <Editable
                  defaultValue={expense.date}
                  onChange={handleDateChange}
                >
                  <EditablePreview />
                  <EditableInput type={"date"} />
                </Editable>
              </Td>
              <Td>
                <Editable
                  defaultValue={expense.amount}
                  onChange={handleAmountChange}
                >
                  <EditablePreview />
                  <EditableInput type={"number"} />
                </Editable>
              </Td>
              <Td>
                <Editable
                  defaultValue={expense.paymentMethodName}
                  isDisabled={true}
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <ButtonGroup gap="2">
                  <Button
                    onClick={() => updateExpense(expense)}
                    size="md"
                    colorScheme="green"
                    variant="solid"
                  >
                    <CheckIcon />
                  </Button>
                  <DeleteModal deleteId={expense.id} setData={setExpenses} />
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default ExpenseList;
