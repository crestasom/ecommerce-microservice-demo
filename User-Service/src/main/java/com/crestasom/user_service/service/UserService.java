package com.crestasom.user_service.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crestasom.user_service.entity.User;
import com.crestasom.user_service.repository.UserRepository;



@Service
public class UserService {

    @Autowired
	private UserRepository userRepository;

	private int i = 1;
    public List<User> getAllUsers() {
		return userRepository.findAll();
    }

	public User getUserById(Long id) {
		Optional<User> u = userRepository.findById(id);
		if (u.isPresent()) {
			return u.get();
		}
		return null;
	}

    public User createUser(User user) {

        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) {
		User user = getUserById(id);
		if (user == null) {
			throw new RuntimeException("User not found");
		}
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
