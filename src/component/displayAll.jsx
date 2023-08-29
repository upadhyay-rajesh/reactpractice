import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class DisplayAllComponent extends Component {

    state={
        employee:[]
    }

    editEmployee=(id)=>{
        this.props.history.push(`/editEmployee/${id}`);
    }
    viewEmployee=(id)=>{
        this.props.history.push(`/viewEmployee/${id}`);
    }

    deleteEmployee=(id)=>{
        EmployeeService.deleteEmployeeRecord(id).then(result=>{
            this.setState({employee:this.state.employee.filter(emp=>emp.email!==id)});
        })
    }

    componentDidMount(){
        EmployeeService.getAllRecord().then(result=>{
            this.setState({employee:result.data})
        })
    }

    render() { 
        return <div>
            <table border="5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employee.map(emp1=>
                            <tr>
                                <td>{emp1.name}</td>
                                <td>{emp1.password}</td>
                                <td>{emp1.email}</td>
                                <td>{emp1.address}</td>
                                <td>
                                    <button onClick={()=>this.editEmployee(emp1.email)}>Edit</button>
                                    <button onClick={()=>this.viewEmployee(emp1.email)}>view</button>
                                    <button onClick={()=>this.deleteEmployee(emp1.email)}>delete</button>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>;
    }
}
 
export default DisplayAllComponent;