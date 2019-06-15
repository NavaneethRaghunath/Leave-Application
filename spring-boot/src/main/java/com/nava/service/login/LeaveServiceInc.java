package com.nava.service.login;

import java.util.List;

import com.nava.bean.Myleave;
import com.nava.bean.User;

public interface LeaveServiceInc {

	List<Myleave> findByEmpId(User leaveId);
	
	Myleave postLeaveReq(Myleave applyLeave);
	

}
