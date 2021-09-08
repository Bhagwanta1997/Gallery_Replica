import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { increament,decreament } from './CounterSlice';
const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            Hello Counter
            {count}
            <button onClick={()=>dispatch(increament())}>Add</button>
            <button onClick={()=>dispatch(decreament())}>Substract</button>
        </div>
    )
}

export default Counter