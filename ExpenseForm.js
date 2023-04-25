import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm=()=>{
        const [entertitle,setEnteredTitle]=useState('');
        const [enterAmount,setEnterAmount]=useState('');
        const[enterDate,setEnterDate]=useState('');
        // const[userInput,setuserInput]=useState({
//               entertitle:'',
                // enterAmount:'',
                // enterDate:''

        // })
        const TitleChangehandler=(event)=>{
                setEnteredTitle(event.target.value);
                // setuserInput({
                        // ...userInput,
                        // entertitle:event.target.value
                // })
                //setuserInput((prevState)=>{
                //        return{...prevState,entertitle:event.target.value}
               // })
        }
        const AmountChangehandler=(event)=>{
                setEnterAmount(event.target.value);
                // setuserInput({
                        // ...userInput,
                        // enterAmount:event.target.value
                // })
                //setuserInput((prevState)=>{
                        // return{...prevState,enterAmount:event.target.value}
                // })
        }
        const DateChangehandler=(event)=>{
                setEnterDate(event.target.value);
                // setuserInput({
                        // ...userInput,
                        // enterDate:event.target.value
                // })
                // setuserInput((prevState)=>{
                        // return{...prevState,enterDate:event.target.value}
                // })
        }
        const submitHandler=(event)=>{
              event.preventDefault();
              const expenseData={
                title:entertitle,
                amount:enterAmount,
                date:new Date(enterDate)
              }
              console.log(expenseData);
        }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" onChange={TitleChangehandler}></input>
            </div>
            <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" onChange={AmountChangehandler} ></input>
            </div>
            <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" onChange={DateChangehandler}></input>
            </div>
        </div>
        <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
            </div>
    </form>
}
export default ExpenseForm;