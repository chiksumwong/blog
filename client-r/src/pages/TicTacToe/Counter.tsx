/* 

React Hoot
1. useState() 
2. useContext()   
3. useReducer()
4. useEffect()
5. or customize your own hoot

*/

import React, { useState, useEffect } from 'react';

export default function Counter(): JSX.Element {
    // init to 0
    const [count, setCount] = useState(0);
    //const [todos, setTodos] = useState([{ text: 'First Todo Item' }]);

    // same as componentDidMount and componentDidUpdate
    useEffect(() => {
        document.title = `You clicked ${count} times.`;
        console.log('logging use effect');
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
