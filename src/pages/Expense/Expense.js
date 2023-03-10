import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import axios from "axios";
function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  const handleExpense = (expense) => {
    //we'll work with the user with id=1, because we don't have yet an auth mechanism
    expense.userId = 1;
    axios
      .post("http://localhost:8082/api/v1/expenses", expense)
      .then((response) => {
        setExpenses((prevExpenses) => [...prevExpenses, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getExpenses = () => {
    console.log("***************************");
    console.log(process.env.URL_DEP);
    axios
      .get(`https://financetrackerbackend-production.up.railway.app/api/v1/expenses/1`)
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getExpenses();
    axios
      .get("http://localhost:8082/api/v1/payment-methods")
      .then((response) => {
        setPaymentMethods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ExpenseForm
        paymentMethods={paymentMethods}
        onCreateExpense={handleExpense}
      />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </>
  );
}

export default Expense;
