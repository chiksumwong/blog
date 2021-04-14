import React from 'react';
import './TicTacToe.css';

type Props = {
  value: string | number,
  onClick: any,
}

const Square: React.FC<Props> = ({value, onClick}) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;
