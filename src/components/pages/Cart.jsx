
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import toast from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';
import { MdDelete } from "react-icons/md";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const removeFromCart = (id) => {
    dispatch(remove(id));
    toast.error('Item removed from Cart!');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-10 px-4 md:px-8">
      {cart.length > 0 ? (
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">

          {/* Cart Items */}
          <div className="space-y-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-5 sm:gap-8 py-6 border-b-2 border-gray-300"
              >
                <div className="flex justify-center items-center shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-36 object-contain mix-blend-multiply"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-6 max-w-md">
                    {item.description.split(" ").slice(0, 10).join(" ")}...
                  </p>

                  <div className="flex items-center justify-between gap-4 mt-5">
                    <p className="font-bold text-green-600">
                      ${Number(item.price).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.title} from cart`}
                      className="p-2.5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <aside className="lg:sticky lg:top-28 h-fit lg:pl-4">
            <div className="space-y-2">
              <p className="font-semibold text-gray-600 uppercase tracking-wide">
                Your Cart
              </p>

              <h2 className="text-4xl font-bold text-green-600 uppercase">
                Summary
              </h2>

              <p className="font-semibold text-gray-700 pt-3">
                Total Items: {cart.length}
              </p>
            </div>

            <div className="mt-16 space-y-5">
              <p className="text-lg font-bold text-gray-800">
                Total Amount: ${totalAmount.toFixed(2)}
              </p>

              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
                onClick={() => toast("Checkout coming soon!")}
              >
                CheckOut Now
              </button>
            </div>
          </aside>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Your Cart is Empty.
          </h2>

          <NavLink to="/">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
