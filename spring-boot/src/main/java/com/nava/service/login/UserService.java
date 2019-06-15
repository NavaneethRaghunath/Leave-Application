package com.nava.service.login;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nava.bean.User;
import com.nava.dao.UserDao;

@Service
@Transactional
public class UserService implements UserServiceInc {
	@Autowired
	UserDao userDao;

	public User findById(int empId) {
		return userDao.findById(empId);
	}


}

//ManagerDao managerDao;

//public User createUser(User user) {
//	return userDao.save(user);
//}

//public String findMgr(int id) {
//return managerDao.getOne(id).getManagerFullName();
//}
//
//
