package com.crestasom.ecom_security_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crestasom.ecom_security_service.dto.AuthRequest;
import com.crestasom.ecom_security_service.dto.AuthResp;
import com.crestasom.ecom_security_service.service.AuthService;


@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	private AuthService service;

	@PostMapping("/token")
	public ResponseEntity<AuthResp> getToken(@RequestBody AuthRequest authRequest) {
		AuthResp resp = service.validateAuthRequest(authRequest);
		return ResponseEntity.status(resp.getRespCode()).body(resp);
	}

	@GetMapping("/validate/{token}")
	public ResponseEntity<Integer> validateToken(@PathVariable String token) {
		int respCode = service.validateToken(token);
		return ResponseEntity.status(200).body(respCode);
	}

}
