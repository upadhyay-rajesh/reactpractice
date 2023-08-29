import logo from './logo.svg';
import './App.css';
import RegistrationComponent from './component/registration';
import { React,Component } from 'react';
import Login from './component/login';
import DisplayAllComponent from './component/displayAll';
import HomeComponent from './component/home';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import EditEmployeeComponent from './component/edit';
import ViewEmployeeComponent from './component/view';
import ParentComponent from './component/parent';
import StateHooksComponent from './component/statehooksdemo';
import Component1 from './component/useContexDemo';
import ReduxComponent from './component/reduxcomponent';

class App extends Component {
  render() { 
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" component={HomeComponent} exact></Route>
            <Route path="/register" component={RegistrationComponent} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/displayAll" component={DisplayAllComponent} exact></Route>
            <Route path="/editEmployee/:id" component={EditEmployeeComponent} exact></Route>
            <Route path="/viewEmployee/:id" component={ViewEmployeeComponent} exact></Route>
          </Switch>
        </div>
      </Router>

      <ParentComponent />
      <StateHooksComponent age="45" />
      <Component1 />
      <ReduxComponent />
    </div>
  );
}
}

export default App;
