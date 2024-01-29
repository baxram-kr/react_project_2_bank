import React ,{useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobleContext } from '../context/GlobleState'


export const TransactionList = () => {
  const {transactions} = useContext(GlobleContext);
  return (
    <>
     <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />))} 
      </ul>
    </>
  )
}
