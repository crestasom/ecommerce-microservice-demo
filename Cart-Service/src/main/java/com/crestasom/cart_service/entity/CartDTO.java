package com.crestasom.cart_service.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CartDTO {
	private Long productId;
	private Long userId;
}
