
import React, { Component } from 'react';

class ChildComponent extends Component {
    state={
        childdata:"i am child"
    }
    render() { 
        return <div>
            <h1>Welcome {this.props.name}</h1>
        </div>;
    }
}
 
export default ChildComponent;