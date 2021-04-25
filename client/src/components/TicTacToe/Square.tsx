import React from 'react';

import './TicTacToe.css';

interface Props {
    value: string;
    onClickFunc: () => void;
}

function Square(props: Props): JSX.Element {
    return (
        <button className="square" onClick={props.onClickFunc}>
            {props.value}
        </button>
    );
}

export default Square;
