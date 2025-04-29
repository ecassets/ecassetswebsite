import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Use classical styles
import styles from "../../styles/classical.module.css";

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Contact Us | EC Assets</title>
        <meta
          name="description"
          content="Get in touch with EC Assets. Contact us via form, email, or phone. Find our office locations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header outside pageContainer */}
      <header className={`${styles.header} ${styles.pageContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="EC Assets Logo"
            width={160}
            height={40}
            priority
          />
        </Link>
        <nav className={styles.mainNav}>
          <Link href="/investments" className={styles.navItem}>
            INVESTMENTS
          </Link>
          <Link href="/team" className={styles.navItem}>
            TEAM
          </Link>
          <Link href="/news" className={styles.navItem}>
            NEWS
          </Link>
          <Link
            href="/contact"
            className={`${styles.navItem} font-semibold text-black`}
          >
            CONTACT
          </Link>
        </nav>
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Image
            src="/images/burger.svg"
            alt="Menu"
            width={24}
            height={24}
            className={styles.mobileMenuIcon}
          />
        </button>
      </header>

      {/* Mobile Navigation sits outside structure */}
      <nav
        className={`${styles.mobileNav} ${
          mobileMenuOpen ? styles.mobileNavActive : ""
        }`}
      >
        <Link
          href="/investments"
          className={styles.mobileNavItem}
          onClick={() => setMobileMenuOpen(false)}
        >
          INVESTMENTS
        </Link>
        <Link
          href="/team"
          className={styles.mobileNavItem}
          onClick={() => setMobileMenuOpen(false)}
        >
          TEAM
        </Link>
        <Link
          href="/news"
          className={styles.mobileNavItem}
          onClick={() => setMobileMenuOpen(false)}
        >
          NEWS
        </Link>
        <Link
          href="/contact"
          className={`${styles.mobileNavItem} font-semibold text-black`}
          onClick={() => setMobileMenuOpen(false)}
        >
          CONTACT
        </Link>
      </nav>

      {/* Main content now inside pageContainer, NO top padding */}
      <div className={styles.pageContainer} style={{ paddingTop: 0 }}>
        {/* Hero Section */}
        <section className="relative w-full -mx-10">
          <div className="relative h-[400px]">
            <Image
              src="/photos/contact/herocontactus.jpg"
              alt="Office building exterior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl font-light text-white">Contact Us</h1>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20">
          <div className="container mx-auto grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="md:col-span-1">
              <h2 className="text-4xl font-light mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#8B1E20] hover:bg-[#7a1a1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B1E20]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info & Locations */}
            <div className="md:col-span-1 space-y-12">
              <div>
                <h3 className="text-3xl font-light mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-2">
                  Email:{" "}
                  <a
                    href="mailto:office@ecassets.com"
                    className="text-[#8B1E20] hover:underline"
                  >
                    office@ecassets.com
                  </a>
                </p>
                <p className="text-gray-600">
                  Phone:{" "}
                  <a
                    href="tel:+442087980342"
                    className="text-[#8B1E20] hover:underline"
                  >
                    +44 20 8798 0342
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-light mb-4">Our Offices</h3>
                {/* London Office */}
                <div className="mb-6">
                  <h4 className="text-xl font-medium text-gray-800 mb-2">
                    London
                  </h4>
                  <p className="text-gray-600">13 Savile Row</p>
                  <p className="text-gray-600">London W1S 3PH</p>
                  <p className="text-gray-600">United Kingdom</p>
                </div>
                {/* Add other offices if applicable */}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[400px] md:h-[500px] -mx-10 mb-20">
          {" "}
          {/* Responsive height */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.101872360118!2d-0.1417078842309616!3d51.51235477963603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d58c6a9f9b%3A0x8d1b081c8b0e1c40!2s13%20Savile%20Row%2C%20London%20W1S%203NE%2C%20UK!5e0!3m2!1sen!2sus!4v1678886412345!5m2!1sen!2sus" // Replace with your actual embed URL
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </section>

        {/* Footer */}
        <footer className={`bg-gray-500 text-white ${styles.footer} py-20`}>
          <div className={styles.footerRow}>
            <div className={styles.footerColumn}>
              <Link href="/" className={styles.footerLogo}>
                ec assets
              </Link>
              <p className={styles.footerText}>Investing is our business.</p>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Navigation</h3>
              <Link href="/investments" className={styles.footerLink}>
                Investments
              </Link>
              <Link href="/team" className={styles.footerLink}>
                Team
              </Link>
              <Link href="/news" className={styles.footerLink}>
                News
              </Link>
              <Link
                href="/contact"
                className={`${styles.footerLink} font-bold`}
              >
                Contact
              </Link>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Contact</h3>
              <a
                href="mailto:office@ecassets.com"
                className={styles.footerLink}
              >
                office@ecassets.com
              </a>
              <a href="tel:+442087980342" className={styles.footerLink}>
                +44 20 8798 0342
              </a>
              <p className={styles.footerAddress}>
                13 Savile Row
                <br />
                London W1S 3PH
                <br />
                United Kingdom
              </p>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>
              Copyright © {new Date().getFullYear()} by ec assets. All rights
              reserved.
            </p>
            <div>
              <Link href="/legals" className={styles.footerBottomLink}>
                Legals
              </Link>
              <span style={{ margin: "0 10px", color: "#777" }}>|</span>
              <Link href="/data-privacy" className={styles.footerBottomLink}>
                Data Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
