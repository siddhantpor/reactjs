import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 3},
            {id: 3, value: 8},
            {id: 4, value: 0}
        ]
    } 

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters })  
    }

    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        })
        this.setState({ coutners: counters })
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters : counters});
    }

    render() { 
        return (
            <div>
                <button 
                    className="btn-primary btn-sm m-2"
                    onClick={this.handleReset}>      
                Reset</button>
                {this.state.counters.map( counter => (
                    <Counter 
                        key = {counter.id} 
                        counter = {counter} 
                        onIncrement = {this.handleIncrement}
                        onDelete = {this.handleDelete} 
                    /> 
                ))}
                                              
            </div>
        );
    }
}
 
export default Counters;

// remember before every component is added, you change the index.js
// imrc, tab + cc, tab

// the child component is the Counter in the <div>
// i think props are supposed to be passed as references, not functions (aka do not put the function() parentheses at end, just write this.function)

// just deleting the row from the array works because react reacts to dom changes - so it will remove the ui part as well :0