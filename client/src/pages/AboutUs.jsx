import React from "react";
import { useNavigate } from "react-router-dom";
import { FiTruck, FiDollarSign, FiUsers, FiShoppingBag } from "react-icons/fi";

const About = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: <FiTruck />,
            title: "Fast Delivery",
            description: "Groceries delivered to your doorstep in under 30 minutes.",
        },
        {
            icon: <FiShoppingBag />,
            title: "Fresh Products",
            description: "We ensure fresh and high-quality products every time.",
        },
        {
            icon: <FiDollarSign />,
            title: "Affordable Prices",
            description: "Get the best quality at unbeatable prices.",
        },
        {
            icon: <FiUsers />,
            title: "Trusted by Thousands",
            description: "Thousands of happy customers rely on Grab&Go daily.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 mt-24 pb-16 bg-white space-y-12">

            {/* Back Button */}
            <div className="self-start">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-7 md:px-9 py-3 bg-primary text-white rounded hover:bg-primary/90 transition shadow-md"
                >
                    <span className="text-lg">&#8592;</span>
                    Go Back
                </button>
            </div>

            {/* Header Section */}
            <div className="text-center space-y-4 max-w-3xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                    About <span className="text-primary">

                        Grab<span className="text-gray-800">&</span>Go

                    </span>
                </h1>
                <p className="md:text-lg text-gray-600">
                    Grab&Go is committed to bringing fresh groceries and delicious food
                    directly to your doorstep. We combine speed, quality, and affordability
                    to make your shopping experience seamless.
                </p>
            </div>

            {/* Features Section */}
            <div className="w-full max-w-5xl">
                <h2 className="text-center text-2xl md:text-3xl font-semibold text-primary mb-8">
                    Why Choose Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="text-primary text-4xl mb-3">{feature.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                            <p className="text-gray-500 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission Section */}
            <div className="w-full max-w-3xl text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                    Our Mission
                </h2>
                <p className="text-gray-600 md:text-lg mb-3">
                    Our mission is to make fresh groceries accessible, fast, and
                    affordable for everyone. We handpick each product to ensure quality
                    and partner with trusted suppliers to guarantee freshness.
                </p>
                <p className="text-gray-600 md:text-lg">
                    Grab&Go combines technology, logistics, and customer care to deliver
                    a seamless shopping experience that you can rely on every day.
                </p>
            </div>
        </div>
    );
};

export default About;
