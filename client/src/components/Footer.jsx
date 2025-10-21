const Footer = () => {
    // Footer links (previously from assets)
    const footerLinks = [
        {
            title: "Quick Links",
            links: [
                { text: "Home", url: "#" },
                { text: "Best Sellers", url: "#" },
                { text: "Offers & Deals", url: "#" },
                { text: "About Us", url: "/about" },
                { text: "FAQs", url: "#" },
            ],
        },
        {
            title: "Need help?",
            links: [
                { text: "Delivery Information", url: "#" },
                { text: "Return & Refund Policy", url: "#" },
                { text: "Payment Methods", url: "#" },
                { text: "Track your Order", url: "#" },
                { text: "Contact Us", url: "/contact" },
            ],
        },
        {
            title: "Follow Us",
            links: [
                { text: "LinkedIn", url: "#" },
                { text: "GitHub", url: "#" },
                { text: "Facebook", url: "#" },
                { text: "X", url: "#" },
            ],
        },
    ];

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    {/* Logo replaced with inline text-based branding */}
                    <h1 className="text-3xl font-bold text-primary">
                        Grab<span className="text-gray-800">&</span>Go
                    </h1>
                    <p className="max-w-[410px] mt-6">
                        We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
                    </p>
                </div>

                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                                {section.title}
                            </h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                © {new Date().getFullYear()} Grab&Go. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
