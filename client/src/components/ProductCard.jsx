import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

    if (!product) return null;

    return (
        <div
            onClick={() => {
                navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                window.scrollTo(0, 0);
            }}
            className="border border-gray-500/20 rounded-md bg-white w-full max-w-[224px] flex flex-col"
        >
            {/* Image */}
            <div className="flex items-center justify-center p-3">
                <img
                    className="transition-transform duration-200 hover:scale-105 max-w-[100px] md:max-w-[120px] w-full h-auto"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow justify-between p-3 pt-0">
                <div>
                    <p className="text-gray-500/60 text-sm">{product.category}</p>
                    <p className="text-gray-700 font-medium text-base md:text-lg truncate mt-1">
                        {product.name}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-0.5 mt-2">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                <img
                                    key={i}
                                    className="w-3 h-3 md:w-3.5 md:h-3.5"
                                    src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                                    alt=""
                                />
                            ))}
                        <span className="text-gray-600 text-xs md:text-sm ml-1">(4)</span>
                    </div>
                </div>

                {/* Price & Cart Actions */}
                <div className="flex items-end justify-between mt-3">
                    <p className="text-base md:text-xl font-medium text-primary">
                        {currency}
                        {product.offerPrice}{" "}
                        <span className="text-gray-500/60 text-xs md:text-sm line-through">
                            {currency}
                            {product.price}
                        </span>
                    </p>

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary"
                    >
                        {!cartItems[product._id] ? (
                            <button
                                className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 w-[64px] md:w-[80px] h-[34px] rounded cursor-pointer text-sm"
                                onClick={() => addToCart(product._id)}
                            >
                                <img src={assets.cart_icon} alt="cart" className="w-3.5 h-3.5" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-1 w-16 md:w-20 h-[34px] bg-primary/25 rounded select-none">
                                <button
                                    onClick={() => removeFromCart(product._id)}
                                    className="w-6 h-full flex items-center justify-center text-lg"
                                >
                                    -
                                </button>
                                <span className="w-5 text-center text-sm">{cartItems[product._id]}</span>
                                <button
                                    onClick={() => addToCart(product._id)}
                                    className="w-6 h-full flex items-center justify-center text-lg"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;