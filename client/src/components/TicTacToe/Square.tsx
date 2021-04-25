import React from 'react';

import './TicTacToe.css';

interface Props {
    value: string;
    onClickFunc: () => void;
}

export default function Square(props: Props): JSX.Element {
    return (
        <button className="square" onClick={props.onClickFunc}>
            {props.value}
        </button>
    );
}
