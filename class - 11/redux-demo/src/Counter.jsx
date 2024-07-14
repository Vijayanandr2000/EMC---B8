import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {counter}</h1>

            <button onClick={() =>
                dispatch({ type: 'INCREMENT' })}>Increment</button>

            <button onClick={() =>
                dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

export default Counter;
