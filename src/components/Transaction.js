import React , {useContext} from 'react'
import { GlobleContext } from '../context/GlobleState'

export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobleContext);

  return (
    <li className={transaction.amount <0 ? 'minus' : 'plus'}>
    {transaction.text} <span>{transaction.amount}</span><button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
  </li> 
  )
}
