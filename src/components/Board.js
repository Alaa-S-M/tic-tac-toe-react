import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the restartButton DOM element
        this.restartButton = React.createRef();
    }
    renderCell(i){
        return <Cell value={this.props.cells[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div>
                <div className='border-row'>
                    {this.renderCell(0)} 
                    {this.renderCell(1)} 
                    {this.renderCell(2)}

                </div>
                <div className='border-row'>
                    {this.renderCell(3)} 
                    {this.renderCell(4)} 
                    {this.renderCell(5)}

                </div>
                <div className='border-row'>
                    {this.renderCell(6)} 
                    {this.renderCell(7)} 
                    {this.renderCell(8)}

                </div>
                <div>
                    <button id='restart' onClick={this.props.onReset}> Restart </button>
                </div>
            </div>
            
        )
    }
}
