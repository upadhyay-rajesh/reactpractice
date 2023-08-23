package com.testproject.service;

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

}
