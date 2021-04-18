/* 

React Hoot
1. useState() 
2. useContext()   
3. useReducer()
4. useEffect()

*/

import React, { useState } from 'react';

export default function Counter(): JSX.Element {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
