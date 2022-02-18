import React, { Component } from 'react';

class Counter extends Component {

    formatValue = () => {
        const { value } = this.props.counter.value; 
        return value === 0 ? 
            'Zero' : value;
    }

    determineClass = () => {
        const classWarning = "badge badge-warning m-2";
        const classPrimary = "badge badge-primary m-2";
        return this.props.counter.value > 0 ? classPrimary : classWarning;
    }

    render() { 
        
        return (
            <div>
                <span className={ this.determineClass() }>{ this.formatValue() }</span> 
                <button 
                    onClick={ () => this.props.onIncrement(this.props.counter) }  
                    className="btn btn-sm btn-secondary m-2">Increment
                </button>
                <button 
                    onClick={ () => this.props.onDelete(this.props.counter.id) } 
                    className="btn btn-danger btn-sm m-2">Delete
                </button>
            </div>
        )
    }
 
}
 
export default Counter;


// notes

// babel cannot compile two elements side by side - wrap in a div
// need to wrap return in parenthesis 

// control d is multiple cursors
// instead of <div> <div> to add only h1 and button the html without another unnecessary div, say React.Fragment

// state includes all the properties of component 
// span allows arithmetic operations
//     you can add a method in the class which you can call in span
// dynamic is curly braces in span if you want to render dynamic

// i think badge and badge primary is from the bootstrap css library - provided class
// m-2 is margin for breathing space
// btn, btn-secondary, btn-sm nice css ones 

// can use this.styles to better customize if you only use bootstrap's css libraries

// want your button to increment? binding event handlers require a constructor because the value of this without an object is undefined
// this is always to the object, but without the object what is this? therefore make a constructor which uses this.nameOfMethod = this.nameOfMethod.bind(this)
//   --> arrow feature gets rid of this headache!?!?

// you cannot directly increment, there is a funky monkey method: this.setState({ count: this.state.count + 1})
// and if you do this, call the method as onClick={ this.handle } NOT onClick={ this.handle() } because latter will make infinite loop

// sometimes need this.props to get value from parent component
// !!!!!!!!!!!!!!!!!!!!!!!!!!!! very good method for transfer information from parent to child 

// debugging good with react extension because it shows what the props are in this.props & it shows the state in each component (cc tab)
// "$r" is the command to TYPE in the console on chrome - can do $r.render()
// can even do $0.click or whatever LOL so cool you fool 
// debugging so cool you fool 

// props: data we give to a component --> in <Counter id="this". props is readonly - cannot modify
// state: data that is LOCAL to the component - only can modify 

// the component that owns a piece of the state should be the one modifying it 
// so, where should we add and delete components? from the counter*s* component - because here it has the list of components
// but you are deleting only one component - so it should be done from each individual counter (no s) - 
// solution: raise event in counter; handle event in counter*s*
// how? make a method in counters component, pass as a prop of counter <Counter prop1=etc prop2=etc /> remember 


// mosh hamedadi has a good visual: counter w ondelete give arrow to top of counters with handledelete,
// onclick of counter is this.props.ondelete  
// ondelete on counters is handledelete 

// in parent component, when rendering a child component (<Counter />) pass as a prop counter={counter} because then you won't need to
// pass id={counter.id} value={counter.value} -- you can just do this.prop.counter.id because id and value are anyways fields of the 
// counter object 

// our state in counter says: value: this.props.counter.value
// our state in counterS says: counters: [{id: 1, value: 0},{id: 2, value: 3}] etc.
// so one "value" is local to counter, one is passed as a property to counter from counters...
// --> issue of a single source of truth <--
// if your ui does not update the value of a product, but in inspect element components the value is updated, may be bc of issue of 
// SINGLE SOURCE OF TRUTH

// how to fix: remove one of the truth sources, preferably the one from the child.
// this creates a CONTROLLED COMPONENT
// a controlled component (child) receives all data through props (has no states of own) and raises events to the parent to handle

