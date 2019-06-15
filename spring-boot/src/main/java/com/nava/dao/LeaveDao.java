package com.nava.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nava.bean.Myleave;
import com.nava.bean.User;

@Repository
public interface LeaveDao extends JpaRepository<Myleave, Integer>{

	//select list of requests from leavedb matching user param
	@Query("select c from Myleave c where c.user = ?1 order by appliedOn desc")
	List<Myleave> findByEmpId(User leaveId);

	
	//select list of requests from leavedb matching managerid param
	@Query("select m from Myleave m, User u where u.mgrId = ?1")
	List<Myleave> getLeaveApplication(int mgrId);
	
	
	//update manager comment and status from leavedb matching leaveid param
	
	@Modifying
	@Query("update Myleave m set m.managerCmt = :cmt,m.status = :status where m.leaveId = :id")
	void updateStatusCmt(@Param("cmt") String comment,@Param("status") String status,@Param("id") Integer id);

	
	//select request matching leaveid param
	@Query("select m from Myleave m where m.leaveId = ?1")
	Myleave getUser(int id);

	
	//update leave balance matching emp id
	
	@Modifying
	@Query("update User u set u.leaveBalance = u.leaveBalance - :days where u.empId = :id")
	void updateNoOfDays(@Param("id") Integer id, @Param("days") Integer noOfDays);
}



//@Query("insert into Myleave c values  c.user = ?1 order by appliedOn desc")
//Myleave postLeaveReq(Myleave applyLeave);
//
//@Modifying
//@Query(value = "insert into Myleave (numberOfDays, startDate, endDate, leaveType, status, reason, appliedOn, managerCmt) "
//		+ "values (:numberOfDays, :startDate, :endDate, :leaveType, :status, :reason, :appliedOn, :managerCmt)",
//		nativeQuery = true)
//Myleave postLeaveReq(@Param("numberOfDays") int , @Param("age") Integer age, 
//  @Param("status") Integer status, @Param("email") String email);
//
//@Query("select m.numberOfDays from Myleave m where m.leaveId = ?1")
//int getNoOfDays(int id);
