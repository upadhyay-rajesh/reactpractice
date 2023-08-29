import counter from '../reducer/counterreducer'
import {createStore, combineReducers} from 'redux';

//export const rootreducer=combineReducers({adminreducer,userreducer,visitorreducer})

let store=createStore(counter);



export default store;