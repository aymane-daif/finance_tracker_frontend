import React, { useState, useEffect } from 'react';
import IncomeList from './IncomeList';
import IncomeForm from './IncomeForm';
import axios from 'axios';
function Income() {
  const [incomes, setIncomes] = useState([]);

  const handleIncome = (income) => {
    income.userId = 1;
    axios
      .post('http://localhost:8082/api/v1/incomes', income)
      .then((response) => {
        getIncomes();
      });
  };

  const getIncomes = () => {
    axios.get('http://localhost:8082/api/v1/incomes/1').then((response) => {
      setIncomes(response.data);
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
