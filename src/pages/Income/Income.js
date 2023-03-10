import React, { useState, useEffect } from "react";
import IncomeList from "./IncomeList";
import IncomeForm from "./IncomeForm";
import axios from "axios";
function Income() {
  const [incomes, setIncomes] = useState([]);

  const handleIncome = (income) => {
    income.userId = 1;
    axios
      .post(`${process.env.REACT_APP_URL_DEP}/api/v1/incomes`, income)
      .then((response) => {
        setIncomes((prevIncoms) => [...prevIncoms, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getIncomes = () => {
    axios
      .get(`${process.env.REACT_APP_URL_DEP}/api/v1/incomes/1`)
      .then((response) => {
        setIncomes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <>
      <IncomeForm onCreateIncome={handleIncome} />
      <IncomeList incomes={incomes} />
    </>
  );
}

export default Income;
