import React from 'react';

import Square from './Square';
import './TicTacToe.css';

/* eslint-disable  @typescript-eslint/no-explicit-any */
interface Props {
    squares: number[];
    onClickFunc: any;
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default class Board extends React.Component<Props, any> {
    renderSquare(i: number) {
        return (
            <Square
                value={this.props.squares[i]}
                onClickFunc={() => this.props.onClickFunc(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
