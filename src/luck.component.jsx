import React,{useState, useEffect} from "react";
import { luckItems } from './luckItems';
import Button from "./button.component";
import "./luck.style.css";

const shuffle = (arr) => {
    let newArr = [...arr]
    let n = arr.length - 1;
    for(let i = n; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [newArr[j],newArr[i]] = [newArr[i],newArr[j]];
    }
  
    return newArr;
}

const Luck = ({showLuckDisplay}) => {
    const [items, setItems] = useState(luckItems);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setItems(shuffle(items))
        }, 300)
          
        return () => {
            clearInterval(interval);
        }
    });
    return (
        <div className="container">
            <h1>Try you Luck!</h1>

            <div className="luck-display">
                {items.map(luck => (
                    <div key={luck.id} className={`luck-item ${luck.bgColor}`}>
                        <h2>{luck.item}</h2>
                    </div>
                ))}
            </div>
            
            <Button name="Try your luck!" display={showLuckDisplay}/>
        </div>
    )
}

// function shuffle(originalArray) {
//     const array = [...originalArray]
//     let currentIndex = array.length
//     let temporaryValue
//     let randomIndex
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex)
//       currentIndex -= 1
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex]
//       array[currentIndex] = array[randomIndex]
//       array[randomIndex] = temporaryValue
//     }
//     return array
// }

export default Luck;