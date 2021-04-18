import React from 'react';

interface State {
    date: Date;
}

export default class Clock extends React.Component<unknown, State> {
    timerID: number;

    constructor(props: unknown) {
        super(props);
        this.timerID = 0;
        this.state = { date: new Date() };
    }

    // Mounting - enter the page
    componentDidMount(): void {
        console.log('Mount');
        this.timerID = window.setInterval(() => this.tick(), 1000);
    }

    // Updating - during the page
    componentDidUpdate(): void {
        console.log('Updating');
    }

    // Unmounting - change the page
    componentWillUnmount(): void {
        console.log('Unmount');
        clearInterval(this.timerID);
    }

    // Function
    tick(): void {
        this.setState({
            date: new Date(),
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
