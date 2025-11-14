package com.crestasom.cart_service.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.crestasom.cart_service.entity.CartDTO;
import com.crestasom.cart_service.entity.CartItem;
import com.crestasom.cart_service.entity.Product;
import com.crestasom.cart_service.entity.User;
import com.crestasom.cart_service.repository.CartRepository;
import com.crestasom.cart_service.service.feign.UserServiceClient;

@Service
public class CartService {
	@Autowired
	RestTemplate restTemplate;
	@Value("${user.service.uri}")
	private String userServiceUri;
	@Value("${product.service.uri}")
	private String productServiceUri;
	@Autowired
	private UserServiceClient userServiceClient;
	Set<String> userIdList = new HashSet<>();
	@Autowired
	private CartRepository cartRepository;

	public CartDTO getCartByUserId(Long userId) {
		CartDTO dto = new CartDTO();
//		ResponseEntity<User> userEntity = restTemplate.getForEntity(userServiceUri + userId, User.class);
//		if (userEntity.getStatusCode() != HttpStatus.OK || userEntity.getBody() == null) {
//			throw new RuntimeException("cannot get user from user service");
//		}
//		User u = userEntity.getBody();
		User u = userServiceClient.getUserById(userId);
		if (u == null) {
			throw new RuntimeException("User not found");
		}
		dto.setUser(u);
		List<Product> productList = new ArrayList<>();
		List<CartItem> cartItems = cartRepository.findByUserId(userId);
		for (CartItem item : cartItems) {
//			Product p = new Product();
//			p.setId(item.getProductId());
			ResponseEntity<Product> productEntity = restTemplate.getForEntity(productServiceUri + item.getProductId(),
					Product.class);
			if (productEntity.getStatusCode() != HttpStatus.OK || productEntity.getBody() == null) {
				throw new RuntimeException("cannot get product from product service");
			}
			Product p = productEntity.getBody();
			if (p == null) {
				throw new RuntimeException("product not found");
			}
			productList.add(p);
		}
		dto.setProducts(productList);
		return dto;

	}

	public CartItem addProductToCart(CartItem cartDto) {
		if (userIdList.contains(cartDto.getUserId() + "")) {
			return cartRepository.save(cartDto);
		}
		throw new RuntimeException("Invalid user id");
	}

	public void storeUserId(String userId) {
		System.out.println("saving user id " + userId);
		userIdList.add(userId);
	}

	public void removeProductFromCart(Long cartId) {
		cartRepository.deleteById(cartId);
	}
}
