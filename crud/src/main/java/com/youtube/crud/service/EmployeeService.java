package com.youtube.crud.service;


import com.youtube.crud.dao.EmployeeDao;
import com.youtube.crud.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;
    public Employee saveEmployee(Employee employee){
      return employeeDao.save(employee);
    }

    public List<Employee> getEmployees(){
        List<Employee> employees=new ArrayList<>();
        employeeDao.findAll().forEach(e->employees.add(e));
        return employees;
    }


    public Employee getEmployeeById(Integer employeeId){
        return employeeDao.findById(employeeId).orElseThrow();

    }


    public void deleteEmployee(Integer employeeId){
        employeeDao.deleteById(employeeId);

    }


    public Employee updateEmployee(Employee employee){
       employeeDao.findById(employee.getEmployeeId()).orElseThrow();
       return employeeDao.save(employee);
    }
}
