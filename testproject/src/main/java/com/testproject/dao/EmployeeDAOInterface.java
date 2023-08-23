package com.testproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.testproject.entity.Employee;

@Repository
public interface EmployeeDAOInterface extends JpaRepository<Employee, String>{

}
