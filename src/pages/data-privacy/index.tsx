import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DataPrivacy = () => {
  return (
    <>
      <Head>
        <title>Data Privacy Policy | EC Assets</title>
        <meta
          name="description"
          content="EC Assets Privacy Policy - Information on how we collect, use, and protect your personal data."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[400px]">
            <Image
              src="/photos/investments/heroinvestments.jpg"
              alt="Data Privacy"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl font-light text-white">Data Privacy</h1>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-8">Privacy Policy</h2>

              <div className="prose max-w-none">
                <p className="text-xl text-gray-700 mb-8">
                  EC Assets is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, and safeguard
                  your information when you visit our website or use our
                  services.
                </p>

                <h3 className="text-2xl font-light mt-12 mb-4">
                  Information We Collect
                </h3>
                <p className="mb-4">
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    Fill out a contact form on our website
                  </li>
                  <li className="mb-2">Subscribe to our newsletter</li>
                  <li className="mb-2">
                    Request information about our investment opportunities
                  </li>
                  <li className="mb-2">Engage with us through social media</li>
                  <li className="mb-2">Apply for employment opportunities</li>
                </ul>
                <p className="mb-6">
                  The personal information we collect may include your name,
                  email address, phone number, company name, and any other
                  information you choose to provide.
                </p>

                <h3 className="text-2xl font-light mt-12 mb-4">
                  How We Use Your Information
                </h3>
                <p className="mb-4">
                  We may use the information we collect for various purposes,
                  including:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    Providing, maintaining, and improving our services
                  </li>
                  <li className="mb-2">
                    Responding to your inquiries and service requests
                  </li>
                  <li className="mb-2">
                    Sending you information about our services, events, and
                    investment opportunities
                  </li>
                  <li className="mb-2">
                    Complying with our legal and regulatory obligations
                  </li>
                </ul>

                <h3 className="text-2xl font-light mt-12 mb-4">
                  Data Protection
                </h3>
                <p className="mb-6">
                  We implement appropriate security measures to protect your
                  personal information from unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission
                  over the Internet or electronic storage is 100% secure, and we
                  cannot guarantee absolute security.
                </p>

                <h3 className="text-2xl font-light mt-12 mb-4">Your Rights</h3>
                <p className="mb-4">
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    The right to access and receive a copy of your personal
                    information
                  </li>
                  <li className="mb-2">
                    The right to rectify or update your personal information
                  </li>
                  <li className="mb-2">
                    The right to erase your personal information
                  </li>
                  <li className="mb-2">
                    The right to restrict or object to our processing of your
                    personal information
                  </li>
                  <li className="mb-2">The right to data portability</li>
                  <li className="mb-2">
                    The right to withdraw consent at any time
                  </li>
                </ul>

                <h3 className="text-2xl font-light mt-12 mb-4">
                  Cookies and Tracking Technologies
                </h3>
                <p className="mb-6">
                  We may use cookies and similar tracking technologies to
                  collect information about your browsing activities on our
                  website. You can set your browser to refuse all or some
                  browser cookies, or to alert you when cookies are being sent.
                </p>

                <h3 className="text-2xl font-light mt-12 mb-4">
                  Changes to This Privacy Policy
                </h3>
                <p className="mb-6">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &ldquo;Last Updated&rdquo; date.
                </p>

                <h3 className="text-2xl font-light mt-12 mb-4">Contact Us</h3>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className="mb-12">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@ecassets.com"
                    className="text-[#8B0000] hover:underline"
                  >
                    privacy@ecassets.com
                  </a>
                  <br />
                  <strong>Address:</strong> 13 Savile Row, London W1S 3PH,
                  United Kingdom
                </p>

                <p className="text-sm text-gray-500">
                  Last Updated: June 1, 2023
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-6">
              Investing is our business.
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Let us tell you more about our assets and investments. Why not
              achieving more together?
            </p>
            <p className="text-xl text-gray-600 mb-10">
              Please contact us today!
            </p>
            <Link
              href="/contact"
              className="inline-block border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors px-10 py-3 text-sm uppercase tracking-wider"
            >
              Contact us
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DataPrivacy;
