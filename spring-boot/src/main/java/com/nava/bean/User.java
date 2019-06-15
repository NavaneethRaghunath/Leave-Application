package com.nava.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userdb")
public class User {

	@Id
	@Column(name="EMP_ID")
	private int empId;
	
	@Column(name="EMP_FULL_NAME")
	private String empFname;
	
	@Column(name="EMP_EMAIL_ADDRESS")
	private String empEmail;

	@Column(name="EMP_MOBILE_NUMBER")
	private String empMobile;
	
	@Column(name="MGR_ID")
	private int mgrId;	
	
	@Column(name="MGR_FULL_NAME")
	private String mgrFname;
	
	@Column(name="MGR_EMAIL_ADDRESS")
	private String mgrEmail;

	@Column(name="MGR_MOBILE_NUMBER")
	private String mgrMobile;
	
	@Column(name="EMP_PWD")
	private String empPwd;
	
	@Column(name="DATE_JOINED")
	private String dateJoined;
	
	
	@Column(name="DEPARTMENT")
	private String department;
	
	@Column(name="AVAILABLE_LEAVE_BALANCE")
	private int leaveBalance;
	
	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getEmpFname() {
		return empFname;
	}

	public void setEmpFname(String empFname) {
		this.empFname = empFname;
	}

	public String getEmpEmail() {
		return empEmail;
	}

	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
	}

	public String getEmpMobile() {
		return empMobile;
	}

	public void setEmpMobile(String empMobile) {
		this.empMobile = empMobile;
	}

	public int getMgrId() {
		return mgrId;
	}

	public void setMgrId(int mgrId) {
		this.mgrId = mgrId;
	}

	public String getMgrFname() {
		return mgrFname;
	}

	public void setMgrFname(String mgrFname) {
		this.mgrFname = mgrFname;
	}

	public String getMgrEmail() {
		return mgrEmail;
	}

	public void setMgrEmail(String mgrEmail) {
		this.mgrEmail = mgrEmail;
	}

	public String getMgrMobile() {
		return mgrMobile;
	}

	public void setMgrMobile(String mgrMobile) {
		this.mgrMobile = mgrMobile;
	}

	public String getEmpPwd() {
		return empPwd;
	}

	public void setEmpPwd(String empPwd) {
		this.empPwd = empPwd;
	}

	public String getDateJoined() {
		return dateJoined;
	}

	public void setDateJoined(String dateJoined) {
		this.dateJoined = dateJoined;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public int getLeaveBalance() {
		return leaveBalance;
	}

	public void setLeaveBalance(int leaveBalance) {
		this.leaveBalance = leaveBalance;
	}

	@Override
	public String toString() {
		return "User [empId=" + empId + ", empFname=" + empFname + ", empEmail=" + empEmail + ", empMobile=" + empMobile
				+ ", mgrId=" + mgrId + ", mgrFname=" + mgrFname + ", mgrEmail=" + mgrEmail + ", mgrMobile=" + mgrMobile
				+ ", empPwd=" + empPwd + ", dateJoined=" + dateJoined + ", department=" + department + ", leaveBalance="
				+ leaveBalance + "]";
	}

}

//CREATE TABLE userDb (
//	    emp_id int,
//	    emp_full_name varchar(25) NOT NULL,
//	    emp_email_address varchar(30) NOT NULL,
//	    emp_mobile_number varchar(20) NOT NULL,
//	    mgr_id int NOT NULL,
//	    mgr_full_name varchar(25) NOT NULL,
//	    mgr_email_address varchar(25) NOT NULL,
//	    mgr_mobile_number varchar(25) NOT NULL,
//	    emp_pwd varchar(25) NOT NULL,
//	    date_joined varchar(25) NOT NULL,
//	    department varchar(25) NOT NULL,
//	    available_leave_balance int NOT NULL,
//
//	    PRIMARY KEY (emp_id)
//	);
//
//insert into userdb values(427330, "Rahul", "abc@spring.com","9102309132",
//123456,"Sachin","hello@spring.com","3333333342","password","08/06/2019",
//"science",5);