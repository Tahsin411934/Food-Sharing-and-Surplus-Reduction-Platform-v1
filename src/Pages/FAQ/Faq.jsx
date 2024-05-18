

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 mt-10  font-Montserrat dark:text-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Frequently Asked Questions</p>
                    <h2 className="mb-12 text-2xl font-bold leading-none text-center sm:text-3xl font-Prata">Food Delivery and Management</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 dark:divide-gray-300">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does your food delivery service work?</summary>
                            <div className="px-4 pb-4">
                                <p>Our food delivery service operates through our website and mobile app. Simply browse through the available restaurants, select your desired items from their menus, and proceed to checkout. You can choose to have your food delivered to your doorstep or opt for pickup if available.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What types of cuisines do you offer for delivery?</summary>
                            <div className="px-4 pb-4">
                                <p>We offer a diverse range of cuisines to cater to various tastes and preferences. From traditional local dishes to international favorites, our partner restaurants provide a wide selection of options including Asian, Italian, Mexican, American, and more.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How do you ensure the quality and freshness of the food?</summary>
                            <div className="px-4 pb-4">
                                <p>Ensuring the quality and freshness of the food is our top priority. We work closely with our partner restaurants to maintain high standards of food preparation and handling. Additionally, we employ strict hygiene practices and implement temperature-controlled delivery methods to preserve the freshness of your order.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Can I track the status of my food delivery?</summary>
                            <div className="px-4 pb-4">
                                <p>Yes, you can track the status of your food delivery in real-time through our website or mobile app. Once your order is confirmed, you'll receive updates on its preparation, dispatch, and estimated arrival time. You can also contact our customer support team for assistance with tracking your order.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Do you offer special dietary options?</summary>
                            <div className="px-4 pb-4">
                                <p>Yes, we understand the importance of catering to special dietary requirements and preferences. Many of our partner restaurants offer vegetarian, vegan, gluten-free, and other dietary-friendly options. You can filter your search based on dietary preferences or allergies to find suitable menu items.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
            <div className="w-full mb-10 bg-gray-200 bg-cover bg-center bg-blend-multiply" >
                <div className="container flex flex-col justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-3xl font-semibold font-Prata leading-none text-center dark:text-gray-800">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-xl text-center dark:text-gray-800">Find out about events and other news</p>
                    <div className="join flex justify-center">
                        <input className="input input-bordered join-item" placeholder="Email" />
                        <button className="btn text-[#FFFFFF] bg-[#2f7955] join-item rounded-r-full">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;
