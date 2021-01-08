import React,{useState} from 'react'


const fruits = ['Apple', 'Mango', 'Banana'];

const prices = {
 
    Apple: 20,
    Mango: 40,
    Banana: 25
};

const taxPercentage = 2


const initialState = {};

fruits.forEach((fruit) => {
 
const price = prices[fruit];

initialState[fruit] = {

    count: 0,
    price,
};

});

console.log(initialState)

function Invoice (){

    const[basket, setBasket] = useState(initialState)
   
    let  totalFruitsCount = 0;
    let  totalFruitsPrice = 0;


  Object.keys(basket).forEach((fruitKey) => {
   const fruit = basket[fruitKey];
   totalFruitsCount += fruit.count;
   totalFruitsPrice += fruit.count * fruit.price;
     });

     const taxPrice = (totalFruitsPrice * taxPercentage)/100;
     
     const totalPrice = totalFruitsPrice + taxPrice;
      


    function addFruittoBasket(fruitKey) {

        
           setBasket({
...basket,                  ///spread operator
[fruitKey]: {         // object notation  & acess object
    ...basket[fruitKey],       //
    count: basket[fruitKey].count + 1,
},

   });

    }

    function removeFruitFromBasket(fruitKey){

        setBasket({
   ...basket,
   [fruitKey]: {
       ...basket[fruitKey],
       count: basket[fruitKey].count - 1,
   }

        })
    }



return (
            <div>
        <h1>Staionery Shop</h1>

    {Object.keys(basket).map((fruitKey) => {
        const fruit = basket[fruitKey];
              
              return <div>
              <button onClick={() => addFruittoBasket(fruitKey)}> + </button>
             <button onClick={() => removeFruitFromBasket(fruitKey)}> - </button>
             {fruitKey} = {fruit.count}
              </div>
    })}


        <div>
         <h1>Invoice</h1> 
         </div>
         <div>Total Number of items: {totalFruitsCount}</div>
         <div>Total fruit price :{totalFruitsPrice}</div>
         <div>GST:% {taxPercentage}</div>
         <div>Tax price:{taxPrice}</div>
     <br/>

     Total price{totalPrice}

         </div>
        )
    }

export default Invoice
