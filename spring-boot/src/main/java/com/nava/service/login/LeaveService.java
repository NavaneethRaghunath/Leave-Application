package com.nava.service.login;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nava.bean.Myleave;
import com.nava.bean.User;
import com.nava.dao.LeaveDao;

@Service
@Transactional
public class LeaveService implements LeaveServiceInc {

	@Autowired
	LeaveDao leavedao;	
	
	
	public List<Myleave> findByEmpId(User leaveId) {
		return leavedao.findByEmpId(leaveId);
	}
	
	public Myleave postLeaveReq(Myleave applyLeave) {
		return leavedao.save(applyLeave);
	}

}
