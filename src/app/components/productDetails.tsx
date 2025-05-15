"use client";

import { Product } from "@/app/types/product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetails({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  const isProductInCart = (id: number) => {
    return cartItems.some((item) => item.id === id);
  };
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain mb-4"
      />
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price}</p>
      <p className="text-sm text-gray-500">Brand: {product.brand}</p>
      <p className="text-sm text-gray-500">Model: {product.model}</p>
      <p className="text-sm text-gray-500">Color: {product.color}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
      {product.discount > 0 && (
        <p className="text-green-600 font-medium mt-2">
          Discount: {product.discount}%
        </p>
      )}
      <button
        className={`w-50 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isProductInCart(product.id)
            ? "bg-green-800 text-white cursor-not-allowed"
            : "bg-sky-600 text-white hover:bg-sky-700"
        }`}
        onClick={() => {
          if (!isProductInCart(product.id)) {
            handleAddToCart(product);
          }
        }}
        disabled={isProductInCart(product.id)}
      >
        {isProductInCart(product.id) ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
