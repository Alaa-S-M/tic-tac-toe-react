import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            xTurn: true,
            stepNumber: 0,
            history: [
                { cells: Array(9).fill(null) }
            ]

        };
        this.state = this.initialState;
    }
    resetBoard() {
        this.setState(this.initialState);
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const currentState = history[history.length - 1];
        const cells = currentState.cells.slice();
        const winner = calculateWinner(cells);
        if (winner || cells[i]) {
            return;
        }
        cells[i] = this.state.xTurn ? 'X' : 'O';
        this.setState({
            history: history.concat({
                cells: cells
            }),
            xTurn: !this.state.xTurn,
            stepNumber: history.length
        });

    }
    render() {
        const history = this.state.history;
        const currentState = history[this.state.stepNumber];
        const winner = calculateWinner(currentState.cells);
        let status;
        if (winner) {
            status = winner + ' Wins!';

        }
        if (this.state.stepNumber >= 9) {
            status = 'X-O Tie!';
        }
        return (
            <div className='game'>
                <div className="game-info">
                    <div>{status}</div>
                </div>
                <div className='game-board'>
                    <Board onClick={(i) => this.handleClick(i)}
                        onReset={() => this.resetBoard()}
                        cells={currentState.cells} />
                </div>

            </div>
        )
    }
}
function calculateWinner(cells) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
            return cells[a];
        }
    }

    return null;
}