import React ,{useContext} from 'react'
import { GlobleContext } from '../context/GlobleState'


export const Balance = () => {
  const {transactions} = useContext(GlobleContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);

  return (
    <>
    <h4>Your balance</h4>
    <h1>${total}</h1>
    </>
  )
}
