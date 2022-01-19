import React from 'react';
import styles from'..Components/Counter.module.scss';
export interface CounterProps{
 increment:string;
 decrement:string;
 name:string;
 change:() =>void;
 onClick:() => void;
 count:string;
}
const Counter:React.Fc<CounterProps> =({props}) =>{
    return(
        <div className={styles.product}>
         <h2>{props.name}</h2>
         <button onClick={props.change}>{props.increment}</button>
         <h2>{props.count}</h2>
         <button onClick={props.onClick}>{props.decrement}</button>
        </div>
    );
};
};
 export default Counter;