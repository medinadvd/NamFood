package com.Namfood.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Namfood.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	
	User findByMail(String mail);
	
	User findByMailAndPassword(String mail, String password);
	
}