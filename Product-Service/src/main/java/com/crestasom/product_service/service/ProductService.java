package com.crestasom.product_service.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crestasom.product_service.entity.Product;
import com.crestasom.product_service.entity.ProductSearchDTO;
import com.crestasom.product_service.repository.ProductRepository;

import lombok.extern.slf4j.Slf4j;


@Service
@Slf4j
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

	public Product getProductById(String id) {
		Optional<Product> product = productRepository.findById(id);
		if (product.isPresent()) {
			return product.get();
		}
		return null;
    }

	public List<Product> getProductByIdList(ProductSearchDTO dto) {
		List<String> idList = Arrays.asList(dto.getIds().split(","));
		List<Product> producList = productRepository.findAllById(idList);
		log.info("producList [{}]", producList);
		return producList;
	}
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

	public Product updateProduct(String id, Product productDetails) {
		Product product = getProductById(id);
		if (product == null) {
			throw new RuntimeException("Product not found");
		}
        product.setName(productDetails.getName());
        product.setPrice(productDetails.getPrice());
        return productRepository.save(product);
    }

	public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }
}