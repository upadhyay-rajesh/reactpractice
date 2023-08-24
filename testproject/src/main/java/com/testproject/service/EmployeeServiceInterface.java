package com.testproject.service;

import java.util.List;

import com.testproject.entity.Employee;

public interface EmployeeServiceInterface {

	Employee createProfileService(Employee ee);

	List<Employee> displayAllService();

	Employee displayService(String email);

	String deleteService(String email);

}
