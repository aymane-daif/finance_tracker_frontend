import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import axios from 'axios';
function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  const handleExpense = (expense) => {
    //we'll work with the user with id=1, because we don't have yet an auth mechanism
    axios
      .get('http://localhost:8082/api/v1/users/john.doe@example.com')
      .then((res) => {
        expense.user = res.data;
        axios
          .post('http://localhost:8082/api/v1/expenses', expense)
          .then((response) => {
            axios
              .get('http://localhost:8082/api/v1/expenses/1')
              .then((response) => {
                getExpenses();
              });
          });
      });
  };

  const getExpenses = () => {
    axios.get('http://localhost:8082/api/v1/expenses/1').then((response) => {
      setExpenses(response.data);
    });
  };

  useEffect(() => {
    getExpenses();
    axios
      .get('http://localhost:8082/api/v1/payment-methods')
      .then((response) => {
        setPaymentMethods(response.data);
      });
  }, []);

  return (
    <>
      <ExpenseForm
        paymentMethods={paymentMethods}
        onCreateExpense={handleExpense}
      />
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default Expense;