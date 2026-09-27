// app/week-4/new-item.js
'use client';
import {useState} from "react";

export default function NewItem() {
    //initialize quantity state 
    const [quantity, setQuantity] = useState(1);

    //increment and decrement  logic 

    function increment() {
        if (quantity <20) {
            setQuantity(quantity +1);
        }
    }

    function decrement() {
        if (quantity >1) {
            setQuantity(quantity -1);
        }
    }

  return <p>NewItem</p>;
}