'use client';

import { useDispatch, useSelector } from "react-redux";
import { Product } from "../types/product";
import { useRouter } from "next/navigation";
import { RootState } from "../redux/store";
import { clearCart, removeFromCart } from "../redux/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id)); 
  };

  const handleClearCart = () => {
    dispatch(clearCart()); 
  };

  const handleCheckout = () => {
    handleClearCart()
    router.replace("/checkout"); 
  };


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (1 - item.discount / 100), 0);
  };


  const handleViewDetails = (id: number) => {
    router.push(`/product/${id}`);
  };
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((product: Product) => (
              <div key={product.id} className="flex items-center justify-between p-4 rounded shadow-md bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-contain mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold hover:text-sky-600 transition-colors duration-200 cursor-pointer"
                   onClick={() => handleViewDetails(product.id)}>{product.title}</h2>
                  <span className="text-sm text-gray-500">${product.price}</span>
                  {product.discount > 0 && (
                    <span className="text-sm text-emerald-500"> -{product.discount}% off</span>
                  )}
                </div>

                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={handleClearCart}
              className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600">
              Clear Cart
            </button>

            <div className="font-semibold text-lg">
              <span>Total: ${calculateTotal().toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="bg-green-800 text-white py-2 px-6 rounded hover:bg-green-900"
            >
              Place order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
