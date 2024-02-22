import React, {useState} from 'react';
import OddEvenResult from './OddEvenResult'

const Counter = ({initialValue}) => {
    const [count, setCount] = useState(initialValue);
    // 0 은 초기값 
    // count 라는 값으로 상태를 설정할 수 있다.
    // setCount로 상태를 변화시킬 수 있다. 

    // react 에서는 어떤 component 가 가진 state가 변하면 
    // 그 component가 rerender된다. 

    const onIncrease = () => {
        setCount(count+1);
    }

    const onDecrease = () => {
        setCount(count-1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button> 
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count = {count}/>
        </div>
    );
};

export default Counter;