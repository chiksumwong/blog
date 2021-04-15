import React from 'react';

import './TicTacToe.css';

interface Props {
    value: number;
    onClickFunc: () => void;
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default class Square extends React.Component<Props, any> {
    render() {
        return (
            <button className="square" onClick={this.props.onClickFunc}>
                {this.props.value}
            </button>
        );
    }
}
