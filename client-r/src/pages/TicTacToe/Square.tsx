import React from 'react';

import './TicTacToe.css';

interface Props {
    value: string;
    onClickFunc: () => void;
}

export default class Square extends React.Component<Props, never> {
    render(): JSX.Element {
        return (
            <button className="square" onClick={this.props.onClickFunc}>
                {this.props.value}
            </button>
        );
    }
}
