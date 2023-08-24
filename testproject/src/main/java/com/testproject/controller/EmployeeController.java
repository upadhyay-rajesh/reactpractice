package com.testproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.testproject.entity.Employee;
import com.testproject.service.EmployeeServiceInterface;

@RestController
@CrossOrigin("*")
public class EmployeeController {
	
	@Autowired
	EmployeeServiceInterface es;
	
	@PostMapping("createProfile")
	public Employee create(@RequestBody Employee ee) {
		return es.createProfileService(ee);
	}
	
	@GetMapping("displayAllProfile")
	public List<Employee> displayAll(){
		return es.displayAllService();
	}

}
