import React, { useState, useEffect } from 'react';
import CartList from './CartList';
import axios from 'axios';

function CartPage({ cartItem, setcartItem }) {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [coupon, setCoupon] = useState('');
    const [localCart, setLocalCart] = useState(cartItem);

    // Fetch product details for all items in cart
    useEffect(function () {
        setLocalCart(cartItem);
        let ids = Object.keys(cartItem);
        if (ids.length === 0) {
            setProducts([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        let requests = ids.map(function (id) {
            return axios.get(`https://dummyjson.com/products/${id}`);
        });
        Promise.all(requests)
            .then(function (responses) {
                let prods = responses.map(function (res) {
                    return res.data;
                });
                setProducts(prods);
                setLoading(false);
            })
            .catch(function (err) {
                setLoading(false);
            });
    }, [cartItem]);

    // Calculate subtotal
    let subtotal = products.reduce(function (acc, p) {
        return acc + (p.price * (cartItem[p.id] || 0));
    }, 0);

    function handleCouponChange(e) {
        setCoupon(e.target.value);
    }

    function handleApplyCoupon() {
        // Dummy coupon logic
        alert('Coupon applied (not implemented)');
    }

    function handleUpdateCart() {
        // Dummy update logic
        alert('Cart updated (not implemented)');
    }

    function handleCheckout() {
        alert('Proceeding to checkout (not implemented)');
    }

    if (loading) {
        return <div className="p-10 text-center">Loading...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 p-8">
            {/* Cart Table */}
            <div className="flex-1 bg-white rounded-lg shadow p-6">
              
                <CartList product={products} cart={cartItem} />
                <div className="flex mt-6 gap-4">
                    <input
                        type="text"
                        value={coupon}
                        onChange={handleCouponChange}
                        placeholder="Coupon code"
                        className="border rounded px-3 py-2 flex-1"
                    />
                    <button
                        className="bg-red-500 text-white px-5 py-2 rounded font-semibold"
                        onClick={handleApplyCoupon}
                    >
                        APPLY COUPON
                    </button>
                    <button
                        className="bg-red-200 text-white px-5 py-2 rounded font-semibold"
                        onClick={handleUpdateCart}
                    >
                        UPDATE CART
                    </button>
                </div>
            </div>
            {/* Cart Totals */}
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-6 h-fit">
                <h2 className="font-bold text-lg mb-4">Cart totals</h2>
                <div className="flex justify-between py-2 border-b">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                    <span>Total</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <button
                    className="w-full mt-6 bg-red-500 text-white py-3 rounded font-bold text-lg"
                    onClick={handleCheckout}
                >
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
    );
}

export default CartPage;