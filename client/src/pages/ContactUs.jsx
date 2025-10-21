import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can replace this with your API logic later
        alert("Thank you for contacting Grab&Go! We'll get back to you soon.");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5 py-16">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 md:p-10">
                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition shadow-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back
                </button>

                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                    Contact <span className="text-primary">
                        Grab<span className="text-gray-800">&</span>Go
                    </span>
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Have a question, feedback, or issue? Fill out the form below and we’ll get back to you shortly.
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Message
                        </label>
                        <textarea
                            required
                            placeholder="Type your message..."
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition shadow-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
