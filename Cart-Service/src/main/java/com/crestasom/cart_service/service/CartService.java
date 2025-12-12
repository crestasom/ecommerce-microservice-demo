package com.crestasom.cart_service.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.crestasom.cart_service.config.JwtTokenContext;
import com.crestasom.cart_service.entity.CartDTO;
import com.crestasom.cart_service.entity.CartItem;
import com.crestasom.cart_service.entity.Product;
import com.crestasom.cart_service.entity.ProductSearchDTO;
import com.crestasom.cart_service.entity.User;
import com.crestasom.cart_service.repository.CartRepository;
import com.crestasom.cart_service.service.feign.UserServiceClient;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
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

	public CartDTO getCartByUserIdImproved(Long userId) {
		log.info("inside getCartByUserIdImproved");
		CartDTO dto = new CartDTO();
		log.info("calling user service to get user for {}", userId);
		User u = userServiceClient.getUserById(userId);
		log.info("user from user service {}", u);
		if (u == null) {
			throw new RuntimeException("User not found");
		}
		String token = JwtTokenContext.getToken();
		dto.setUser(u);
		List<Product> productList = new ArrayList<>();
		List<CartItem> cartItems = cartRepository.findByUserId(userId);
		log.info("cartItems [{}]", cartItems.size());
		String ids = cartItems.stream().map(c -> c.getProductId()).collect(Collectors.joining(","));
		log.info("ids [{}]", ids);
		ProductSearchDTO productDto = new ProductSearchDTO();
		productDto.setIds(ids);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
//		headers.set("AUTHORIZATION", "Bearer "+token);
		headers.setBearerAuth(token);
		HttpEntity<ProductSearchDTO> entity = new HttpEntity<>(productDto, headers);
		log.info("calling product service to get products for [{}]", ids);
		ResponseEntity<List<Product>> response = restTemplate.exchange(productServiceUri + "/fetch-multiple",
				HttpMethod.POST, entity, new ParameterizedTypeReference<List<Product>>() {
				});

		if (!response.getStatusCode().is2xxSuccessful()) {
			throw new RuntimeException("error fetching product list");
		}
		List<Product> products = response.getBody();
		log.info("cartItems size [{}]", cartItems.size());
		for (CartItem item : cartItems) {
			Product p = products.stream().filter(p1 -> p1.getId().equals(item.getProductId())).findFirst()
					.orElse(new Product());
			productList.add(p);
		}
		dto.setProducts(productList);
		return dto;

	}

	public CartDTO getCartByUserId(Long userId) {
		log.info("inside getCartByUserId");
		CartDTO dto = new CartDTO();
		log.info("calling user service to get user for {}", userId);
		User u = userServiceClient.getUserById(userId);
		log.info("user from user service {}", u);
		if (u == null) {
			throw new RuntimeException("User not found");
		}
		dto.setUser(u);
		List<Product> productList = new ArrayList<>();
		List<CartItem> cartItems = cartRepository.findByUserId(userId);
		log.info("cartItems [{}]", cartItems.size());

		log.info("cartItems size [{}]", cartItems.size());
		for (CartItem item : cartItems) {
			log.info("calling product service for id {}", item.getProductId());

			ResponseEntity<Product> productEntity = restTemplate.getForEntity("http://product-service/products/" + item.getProductId(),
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
//		if (userIdList.contains(cartDto.getUserId() + "")) {
		return cartRepository.save(cartDto);
//		}
//		throw new RuntimeException("Invalid user id");
	}

	public void storeUserId(String userId) {
		System.out.println("saving user id " + userId);
		userIdList.add(userId);
	}

	public void removeProductFromCart(Long cartId) {
		cartRepository.deleteById(cartId);
	}
}
