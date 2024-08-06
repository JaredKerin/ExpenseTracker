import React from 'react';
import Header from './components/Header';  // Default import
import Balance from './components/Balance';  // Default import
import IncomeExpenses from './components/IncomeExpenses';  // Default import
import TransactionList from './components/TransactionList';  // Default import
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
