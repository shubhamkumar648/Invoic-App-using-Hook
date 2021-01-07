import React,{useState} from 'react'
import Invoice from './Invoice';


const prices = {

  Pen: 20,
  Book: 40,
  Pad: 50

}


function App() {

 const [penCount, setPenCount] = useState(0);

const [bookCount, setbookCount] = useState(0);

const [padCount, setpadCount] = useState(0);

const totalItem = penCount + bookCount + padCount;

const totalItemPrice = penCount*prices.Pen + bookCount* prices.Book + padCount* prices.Pad;


const taxPercentage = 2
const taxPrice = (totalItemPrice* taxPercentage)/100;

const totalPrice = totalItemPrice + taxPrice;
 




  function addPenButton() {
   setPenCount(penCount + 1);

}

function removePenButton() {
setPenCount(penCount - 1);

}

function addBookButton() {
  setbookCount(bookCount + 1);

}

function removeBookButton() {
setbookCount(bookCount - 1);

}

function addPadButton() {
  setpadCount(padCount + 1);

}

function removePadButton() {
setpadCount(padCount - 1);

}


  return (
    

      <div>
        <h1>Staionery Shop</h1>
        <br/>

        <button onClick={addPenButton} >+</button>
        <button onClick={removePenButton}>-</button>
         <h2> penCount: {penCount} </h2>

        <br/>
        <button onClick={addBookButton} >+</button>
        <button onClick={removeBookButton}>-</button>
       <h2>bookCount: {bookCount} </h2>

        <br/>

        <button onClick={addPadButton} >+</button>
        <button onClick={removePadButton}>-</button>
        <h2>padCount: {padCount} </h2>

         
         <div>
         <h1>Invoice</h1> 
         </div>
         <div>Total Number of items:{totalItem}</div>
         <div>Total items price :{totalItemPrice}</div>
         <div>GST :{taxPercentage}%</div>
         <div>Tax price:{taxPrice}</div>
     <br/>

     Total price{totalPrice}
     <hr/>
<h1>Practice 2 </h1>
     <Invoice/>

         </div>
  )


}


export default App