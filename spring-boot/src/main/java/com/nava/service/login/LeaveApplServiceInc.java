package com.nava.service.login;

import java.util.List;

import com.nava.bean.Myleave;

public interface LeaveApplServiceInc {

	List<Myleave> getLeaveApplication(int id);
	
	void updateStatusCmt(String comment, String status, int id);
	
	Myleave getUser(int id);
	
	void updateNoOfDays(int id, int noOfDays); 
	
}

//int getNoOfDays(int id);
