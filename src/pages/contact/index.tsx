import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Use classical styles
import styles from "../../styles/classical.module.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Head>
        <title>Contact | EC Assets</title>
        <meta
          name="description"
          content="Contact EC Assets - Get in touch with our team and learn more about our investment opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Use classical page container for padding */}
      <div className={styles.pageContainer}>
        {/* Use Navigation component */}
        <Navigation />

        {/* Original Page Content - Wrapped in container for consistency */}
        <div className="container mx-auto py-10">
          {/* Hero Section - Standardized across pages */}
          <section className="relative w-[calc(100%+80px)] left-[-40px] overflow-hidden -mt-[1px]">
            <div className="mx-[40px] relative h-[360px]">
              <div className="absolute inset-x-0 top-[5%] bottom-[5%] overflow-hidden border border-gray-200">
                <Image
                  src="/photos/investments/heroinvestments.jpg"
                  alt="Professional conducting a business meeting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-6xl font-light text-white">Contact Us</h1>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20">
            <div className="mb-12">
              <h2 className="text-4xl font-light mb-6 text-center">
                Contact us
              </h2>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-center">
                Let us tell you more about our assets, our investments and our
                company. Why not achieving more together? Please contact us
                today!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* Left Column - Contact Form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm uppercase tracking-wider font-medium text-gray-700 mb-2"
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm uppercase tracking-wider font-medium text-gray-700 mb-2"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm uppercase tracking-wider font-medium text-gray-700 mb-2"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi there, I'm reaching out because..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-4 border border-[#403e3e] bg-[#403e3e] text-white hover:bg-white hover:text-[#8B1E20] hover:border-black uppercase tracking-wider text-sm transition-all duration-300 ease-in-out"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column - Office Locations */}
              <div>
                <div className="mb-12">
                  <h3 className="text-sm uppercase tracking-wider font-medium text-[#8B0000] mb-4">
                    MAIN OFFICE
                  </h3>
                  <h4 className="text-xl font-light mb-2">
                    EC Assets Capital Management
                  </h4>
                  <p className="text-gray-600">
                    13 Savile Row
                    <br />
                    London W1S 3PH, United Kingdom
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-sm uppercase tracking-wider font-medium text-[#8B0000] mb-4">
                    OUR OFFICES
                  </h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-light mb-2">EC Assets Lux</h4>
                    <p className="text-gray-600">
                      Vauxhall Management
                      <br />
                      35 Avenue de Monterey
                      <br />
                      2163 Luxembourg, Luxembourg
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-light mb-2">EC Assets UAE</h4>
                    <p className="text-gray-600">
                      Business Center 1<br />
                      Nad Al Sheba
                      <br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-light mb-2">EC Assets CY</h4>
                    <p className="text-gray-600">
                      27 Hospital Road
                      <br />
                      George Town
                      <br />
                      KY1 - 9001, Cayman Islands
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-sm uppercase tracking-wider font-medium text-[#8B0000] mb-4">
                    WORKING HOURS
                  </h3>
                  <p className="text-gray-600">9am - 5pm, Mon - Fri</p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider font-medium text-[#8B0000] mb-4">
                    CONTACT
                  </h3>
                  <a
                    href="mailto:office@ecassets.com"
                    className="block text-gray-600 mb-2 hover:text-gray-900"
                  >
                    office@ecassets.com
                  </a>
                  <a
                    href="tel:+442087980342"
                    className="block text-gray-600 hover:text-gray-900"
                  >
                    +44 20 8798 0342
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="w-full h-[500px] relative -mx-10 mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2889089226976!2d-0.14344548380863036!3d51.51233597963526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d5f12c8b15%3A0x7b0678853817675!2sSavile%20Row%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>

        {/* Use Footer component */}
        <Footer />
      </div>
    </>
  );
};

export default Contact;
