import React, { Component } from 'react';
import ChildComponent from './child';

class ParentComponent extends Component {
    state={
        myname:"Rajesh"
    }
    render() { 
        return <div>

            <ChildComponent name={this.state.myname} />
        </div>;
    }
}
 
export default ParentComponent;