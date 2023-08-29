import React, { Component } from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state){
    return {
        counter:state
    };
}

function mapDispatchToProps(dispatch){
    return {
        increment:()=>dispatch({type:'increment'}),
        decrement:()=>dispatch({type:'decrement'})
    }
}

class ReduxComponent extends Component {
    state={
        
    }
    render() { 
        return (
        <div>
            <div> Result is {this.props.counter}</div>
    <button onClick={this.props.increment}>increment</button>
    <button onClick={this.props.decrement}>decrement</button>

        </div>
        )
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps) (ReduxComponent);