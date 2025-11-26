package com.crestasom.cart_service.service.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.crestasom.cart_service.entity.User;

@FeignClient(name = "user-service")
public interface UserServiceClient {

	@GetMapping("/users/{id}")
	User getUserById(@PathVariable Long id);
//
//	@PostMapping("/users")
//	User createUser(@RequestBody User user);
}
