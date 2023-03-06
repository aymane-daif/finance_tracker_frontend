import './App.css';
import Income from './pages/Income/Income';
import Expense from './pages/Expense/Expense';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addIncome' element={<Income />} />
          <Route path='/addExpense' element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
