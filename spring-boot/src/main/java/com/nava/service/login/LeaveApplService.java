package com.nava.service.login;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nava.bean.Myleave;
import com.nava.dao.LeaveDao;

@Service
@Transactional
public class LeaveApplService implements LeaveApplServiceInc{
	
	@Autowired
	LeaveDao leavedao;	

	public List<Myleave> getLeaveApplication(int id){
		System.out.println("leaveservice" + id);
		return leavedao.getLeaveApplication(id);
	}
	
	public void updateStatusCmt(String comment, String status, int id){
		leavedao.updateStatusCmt(comment,status,id);
	}
	
	
	public Myleave getUser(int id) {
		return leavedao.getUser(id);
	}
	
	
	public void updateNoOfDays(int id, int noOfDays){
		leavedao.updateNoOfDays(id, noOfDays);
	}
	
}

//public int getNoOfDays(int id) {
//return leavedao.getNoOfDays(id);
//}
