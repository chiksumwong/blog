import React from 'react';

import Square from './Square';
import './TicTacToe.css';

interface Props {
    squares: string[];
    onClickFunc: (i: number) => void;
}

class Board extends React.Component<Props, never> {
    renderSquare(i: number): JSX.Element {
        return (
            <Square
                value={this.props.squares[i]}
                onClickFunc={() => this.props.onClickFunc(i)}
            />
        );
    }

    render(): JSX.Element {
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

export default Board;
