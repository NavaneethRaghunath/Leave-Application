//package com.nava.dao;
//
//import com.nava.bean.User;
//
//public interface UserDao {
//	public int addUser(User user);
//
//}

package com.nava.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nava.bean.User;

public interface UserDao extends JpaRepository<User, Integer> {

	User findById(int empId);

}
