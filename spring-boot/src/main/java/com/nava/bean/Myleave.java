package com.nava.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="leavedb")
public class Myleave {

	@Id
	@GeneratedValue( strategy= GenerationType.AUTO )
	private int leaveId;
	
	private int numberOfDays;
	private String startDate;
	private String endDate;
	private String leaveType;
	private String status;
	private String reason;
	private String appliedOn;
	private String managerCmt;
	
	@ManyToOne
	private User user;

	public int getLeaveId() {
		return leaveId;
	}

	public void setLeaveId(int leaveId) {
		this.leaveId = leaveId;
	}

	public int getNumberOfDays() {
		return numberOfDays;
	}

	public void setNumberOfDays(int numberOfDays) {
		this.numberOfDays = numberOfDays;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getAppliedOn() {
		return appliedOn;
	}

	public void setAppliedOn(String appliedOn) {
		this.appliedOn = appliedOn;
	}

	public String getManagerCmt() {
		return managerCmt;
	}

	public void setManagerCmt(String managerCmt) {
		this.managerCmt = managerCmt;
	}

	public int getUser() {
		return user.getEmpId();
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Myleave [leaveId=" + leaveId + ", numberOfDays=" + numberOfDays + ", startDate=" + startDate
				+ ", endDate=" + endDate + ", leaveType=" + leaveType + ", status=" + status + ", reason=" + reason
				+ ", appliedOn=" + appliedOn + ", managerCmt=" + managerCmt + ", user=" + user + "]";
	}

}

//CREATE TABLE leavedb (
//	    leave_id int auto_increment,
//	    number_of_days int NOT NULL,
//	    start_date varchar(30) NOT NULL,
//	    end_date varchar(30) NOT NULL,
//	    leave_type varchar(30) NOT NULL,
//	    status varchar(25) NOT NULL,
//	    reason varchar(125) NOT NULL,
//	    applied_on varchar(25) NOT NULL,
//	    manager_comment varchar(125) NOT NULL,
//	    user_emp_id int NOT NULL,
//        FOREIGN KEY fk_cat(user_emp_id)
//		REFERENCES userdb(emp_id),
//	    PRIMARY KEY (leave_id)
//	); 
//
//insert into leavedb values(1,1,"03/06/2019","04/06/2019","personal","pending","vacation mode",
//"01/06/2019","no",427330)

