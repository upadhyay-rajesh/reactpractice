package com.testproject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.testproject.dao.EmployeeDAOInterface;
import com.testproject.entity.Employee;

@Service
@Transactional
public class EmployeeService implements EmployeeServiceInterface {

	@Autowired
	EmployeeDAOInterface ed;
	@Override
	public Employee createProfileService(Employee ee) {
		ed.save(ee);
		// TODO Auto-generated method stub
		return ee;
	}
	@Override
	public List<Employee> displayAllService() {
		// TODO Auto-generated method stub
		return ed.findAll();
	}
	@Override
	public Employee displayService(String email) {
		Optional<Employee> e1= ed.findById(email);
		return e1.get();
	}
	@Override
	public String deleteService(String email) {
		// TODO Auto-generated method stub
		ed.deleteById(email);
		return "employee deleted";
	}

}
