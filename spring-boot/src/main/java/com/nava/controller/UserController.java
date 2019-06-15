package com.nava.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.util.UriComponentsBuilder;

import com.nava.bean.Myleave;
import com.nava.bean.User;
import com.nava.service.login.LeaveApplService;
import com.nava.service.login.LeaveService;
import com.nava.service.login.UserService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value={"/user"})

public class UserController {

	@Autowired
	UserService employee;
	@Autowired
	LeaveService leave;
	@Autowired
	LeaveApplService leaveAppl;

	@CrossOrigin(origins = "*") //user/login
    @PostMapping(value = "/login",headers="Accept=application/json", produces = {"application/json"})
    public ResponseEntity<User> getUserById(@RequestBody User usr) {

		User user = employee.findById(usr.getEmpId());  
        
        if (user.getEmpPwd().contains(usr.getEmpPwd()) == true) {
        	return new ResponseEntity<User>(user,HttpStatus.OK);
        }
        
        return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
	}  
	
	
	@CrossOrigin(origins = "*") //user/id/detail
	@GetMapping(value = "/{id}/detail", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getEmpDetail(@PathVariable("id") int id){

		User user = employee.findById(id);        
        if (user != null) {
        	return new ResponseEntity<User>(user,HttpStatus.OK);
        }
        
        return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
	}	
	
	
	@CrossOrigin(origins = "*") //user/id/manager
	@GetMapping(value = "/{id}/manager", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getMgrDetail(@PathVariable("id") int id){

		User user = employee.findById(id);        
        if (user != null) {
        	return new ResponseEntity<User>(user,HttpStatus.OK);
        }
        
        return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
	}		


	@CrossOrigin(origins = "*") //user/id/leave
	@GetMapping(value = "/{id}/leave", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Myleave> getLeaveDtl(@PathVariable("id") User id){
        
		List<Myleave> empLeave = leave.findByEmpId(id);        
        return empLeave;
        
	}	
	
	
	@CrossOrigin(origins = "*") //user/id/apply-leave
    @PostMapping(value = "/{id}/apply-leave",headers="Accept=application/json", produces = {"application/json"})
    public ResponseEntity<Myleave> postLeave(@RequestBody Myleave applyLeave, @PathVariable("id") User id) {

		applyLeave.setUser(id);
        Myleave myleavereq = leave.postLeaveReq(applyLeave);  

        return new ResponseEntity<Myleave>(myleavereq,HttpStatus.OK);
	}

	
	@CrossOrigin(origins = "*") //user/id/leave-application
	@GetMapping(value = "/{id}/leave-application", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Myleave> getLeaveAppl(@PathVariable("id") User id){

		int user = id.getEmpId();
        List<Myleave> leaveApplication = leaveAppl.getLeaveApplication(user);
        return leaveApplication;
	}	
	
	@CrossOrigin(origins = "*") //user/id/approve-deny
	@PutMapping(value = "/{id}/approve-deny", headers="Accept=application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Myleave> putLeave(@RequestBody Myleave leaveReq, @PathVariable("id") int id) {

        leaveAppl.updateStatusCmt(leaveReq.getManagerCmt(), leaveReq.getStatus(), id);
  
        String status = leaveReq.getStatus();
        
        if (status == "approved") {
        
        	Myleave user = leaveAppl.getUser(id);
       
        	leaveAppl.updateNoOfDays(user.getUser(), user.getNumberOfDays());
        }
        
        return new ResponseEntity<Myleave>(HttpStatus.OK);

	}	
	
}

//@CrossOrigin(origins = "*")
//
//@PostMapping(value="/login",headers="Accept=application/json", produces= {"application/json"})
//public User createUser(@RequestBody User usr, UriComponentsBuilder ucBuilder){
//    return employee.createUser(usr);
//}
//
//@GetMapping(value="/login/{id}")
//public Optional<User> getUser(@PathVariable("id") String userId) {
//   return employee.findById(userId);
//}	