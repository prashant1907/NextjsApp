"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../types/product";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/cartSlice";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleViewDetails = (id: number) => {
    router.push(`/product/${id}`);
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const isProductInCart = (id: number) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard - Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col p-4 rounded shadow-md hover:shadow-lg transition bg-gray-100 h-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-3"
            />
            <h2
              className="font-semibold text-lg line-clamp-4 hover:text-sky-600 transition-colors duration-200 cursor-pointer"
              onClick={() => handleViewDetails(product.id)}
            >
              {product.title}
            </h2>

            <div className="mt-auto flex flex-col items-start">
              <div className="flex justify-between items-center w-full mb-2">
                <span className="font-bold text-sky-900">${product.price}</span>
                {product.discount > 0 && (
                  <span className="text-sm text-emerald-500">
                    -{product.discount}% off
                  </span>
                )}
              </div>
              <button
                className={`w-full py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
          </div>
        ))}
      </div>
    </div>
  );
}
