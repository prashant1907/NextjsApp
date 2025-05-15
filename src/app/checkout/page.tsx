import Link from 'next/link';
export default function OrderPlaced() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
       
        <h2 className="text-2xl font-bold text-green-800 mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase. A confirmation email has been sent to your inbox.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg text-left mb-6">
          <p className="text-sm text-gray-700 mb-2"><span className="font-medium">Order ID:</span> #12345678</p>
          <p className="text-sm text-gray-700"><span className="font-medium">Expected Delivery:</span> 3-5 business days</p>
        </div>

        <Link href="/" className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg transition">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
