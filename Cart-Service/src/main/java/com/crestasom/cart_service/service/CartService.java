package com.crestasom.cart_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.crestasom.cart_service.entity.Cart;
import com.crestasom.cart_service.entity.CartDTO;
import com.crestasom.cart_service.entity.Product;
import com.crestasom.cart_service.entity.User;
import com.crestasom.cart_service.repository.CartRepository;

@Service
public class CartService {

	RestTemplate restTemplate = new RestTemplate();
	@Value("${user.service.uri}")
	private String userServiceUri;
	@Value("${product.service.uri}")
	private String productServiceUri;

	@Autowired
	private CartRepository cartRepository;



	public Cart getCartByUserId(Long userId) {
		ResponseEntity<User> userEntity = restTemplate.getForEntity(userServiceUri + userId,
				User.class);
		if (userEntity.getStatusCode() != HttpStatus.OK || userEntity.getBody() == null) {
			throw new RuntimeException("cannot get user from user service");
		}
		User u = userEntity.getBody();
		if (u == null) {
			throw new RuntimeException("User not found");
		}
		Cart c = cartRepository.findByUserId(userId);

		if (c == null) {
			c = new Cart(null, u);
			cartRepository.save(c);
		}
		return c;
	}

	public Cart addProductToCart(CartDTO cartDto) {
		Cart cart = getCartByUserId(cartDto.getUserId());

		ResponseEntity<Product> productEntity = restTemplate
				.getForEntity(productServiceUri + cartDto.getProductId(), Product.class);
		if (productEntity.getStatusCode() != HttpStatus.OK || productEntity.getBody() == null) {
			throw new RuntimeException("cannot get product from product service");
		}
		Product product = productEntity.getBody();
		if (product == null) {
			throw new RuntimeException("Product not found");
		}
		cart.getProducts().add(product);
		return cartRepository.save(cart);
	}

	public Cart removeProductFromCart(Long userId, Long productId) {
		Cart cart = getCartByUserId(userId);
		cart.getProducts().removeIf(p -> p.getId().equals(productId));
		return cartRepository.save(cart);
	}
}
