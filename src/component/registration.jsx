import { React,Component } from "react";
import EmployeeService from "../service/EmployeeService";

class RegistrationComponent extends Component {

    state={
        name:'',
        password:'',
        email:'',
        address:''
    }

    changeNameHandler=(event)=>{
        this.setState({name:event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value});
    }
    changeAddressHandler=(event)=>{
        this.setState({address:event.target.value});
    }

    createProfile=()=>{
        let employee={name:this.state.name,password:this.state.password,email:this.state.email,address:this.state.address}
        console.log("employee record is "+JSON.stringify(employee));

        EmployeeService.createProfileService(employee).then(result=>{
         console.log("record added "+result);
         alert("profile created");
        })
        
    }

    render() { 
        return <div>
           <form>
               Name: <input type="text" value={this.state.name} onChange={this.changeNameHandler}></input><br></br>
               Password: <input type="text" value={this.state.password} onChange={this.changePasswordHandler}></input><br></br>
               Email: <input type="text" value={this.state.email} onChange={this.changeEmailHandler}></input><br></br>
               Address: <input type="text" value={this.state.address} onChange={this.changeAddressHandler}></input><br></br>
               <input type="button" value="Register" onClick={this.createProfile}></input>
           </form>
        </div>;
    }
}
 
export default RegistrationComponent;