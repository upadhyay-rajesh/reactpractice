import axios from 'axios';
class EmployeeService{
    createProfileService(emp){
        return axios.post("http://localhost:10000/createProfile",emp);
    }

    getAllRecord(){
        return axios.get("http://localhost:10000/displayAllProfile");
    }
    getEmployeeRecordById(id){
        return axios.get("http://localhost:10000/displayProfile/"+id);
    }

    deleteEmployeeRecord(id){
        return axios.get("http://localhost:10000/deleteProfile/"+id);
    }

}

export default new EmployeeService()