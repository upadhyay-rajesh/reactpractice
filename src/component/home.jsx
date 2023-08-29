import React, { Component } from 'react';

class HomeComponent extends Component {

    registerEmployee=()=>{
        this.props.history.push(`/register`);
    }
    loginEmployee=()=>{
        this.props.history.push(`/login`);
    }
    displayAllEmployee=()=>{
        this.props.history.push(`/displayAll`);
    }

    render() { 
        return <div>
            <button onClick={()=>this.registerEmployee()}>Sign Up</button>
            <button  onClick={()=>this.loginEmployee()}>Sign In</button>
            <button  onClick={()=>this.displayAllEmployee()}>Display All Employee</button>
        </div>;
    }
}
 
export default HomeComponent;