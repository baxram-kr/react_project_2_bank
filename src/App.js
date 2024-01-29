import React from 'react'
import {Header}  from './components/header';
import {Balance}  from './components/balance';
import {IncomeExpenses}  from './components/IncomeExpenses';
import {TransactionList}  from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobleProvider } from './context/GlobleState';




import './App.css';


function App() {
  return (
    <GlobleProvider>
    <Header />
   <div className="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
   </div>
    </GlobleProvider>
  );
}

export default App;
