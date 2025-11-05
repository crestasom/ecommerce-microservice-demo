package com.crestasom.cart_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crestasom.cart_service.entity.CartDTO;
import com.crestasom.cart_service.entity.CartItem;
import com.crestasom.cart_service.service.CartService;


@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService cartService;

	@GetMapping("/{userId}")
	public CartDTO getCartByUserId(@PathVariable Long userId) {
		return cartService.getCartByUserId(userId);
	}

	@PostMapping("/add-product")
	public CartItem addProductToCart(@RequestBody CartItem cartDto) {
		return cartService.addProductToCart(cartDto);
	}

//	@DeleteMapping("/{userId}/products/{productId}")
//	public Cart removeProductFromCart(@PathVariable Long userId, @PathVariable Long productId) {
//		return cartService.removeProductFromCart(userId, productId);
//	}
}
