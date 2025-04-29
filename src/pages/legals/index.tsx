import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Legals = () => {
  return (
    <>
      <Head>
        <title>Legal Disclosure | EC Assets</title>
        <meta
          name="description"
          content="Legal information and disclaimers for EC Assets."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[300px] bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h1 className="text-6xl font-light text-white mb-4">Legals</h1>
              <div className="w-20 border-t border-white"></div>
            </div>
          </div>
        </section>

        {/* Legal Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-6">
                Information in accordance with Section 5 TMG
              </h2>
              <div className="text-gray-600 space-y-4">
                <p className="text-xl font-light">
                  ec assets
                  <br />
                  48 Curzon Street
                  <br />
                  4th Floor
                  <br />
                  London W1J 7UL
                  <br />
                  United Kingdom
                </p>
                <p className="mt-6">Represented by Mr. John Smithfield</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-light mb-6">Contact Information</h2>
              <p className="text-gray-600">
                <a
                  href="mailto:office@eccasets.com"
                  className="hover:text-gray-900"
                >
                  office@eccasets.com
                </a>{" "}
                |
                <a href="https://ecassets.com" className="hover:text-gray-900">
                  {" "}
                  ecassets.com
                </a>{" "}
                |
                <a href="tel:+442087980342" className="hover:text-gray-900">
                  {" "}
                  +44 20 8798 0342
                </a>
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-light mb-6">Disclaimer</h2>

              <h3 className="text-2xl font-light mb-4">
                Accountability for content
              </h3>
              <p className="text-gray-600 mb-8">
                The contents of our pages have been created with the utmost
                care. However, we cannot guarantee the contents&apos; accuracy,
                completeness or topicality. According to statutory provisions,
                we are furthermore responsible for our own content on these web
                pages. In this matter, please note that we are not obliged to
                monitor the transmitted or saved information of third parties,
                or investigate circumstances pointing to illegal activity. Our
                obligations to remove or block the use of information under
                generally applicable laws remain unaffected by this as per §§ 8
                to 10 of the Telemedia Act (TMG).
              </p>

              <h3 className="text-2xl font-light mb-4">
                Accountability for links
              </h3>
              <p className="text-gray-600 mb-8">
                Responsibility for the content of external links (to web pages
                of third parties) lies solely with the operators of the linked
                pages. No violations were evident to us at the time of linking.
                Should any legal infringement become known to us, we will remove
                the respective link immediately.
              </p>

              <h3 className="text-2xl font-light mb-4">Copyright</h3>
              <p className="text-gray-600">
                Our web pages and their contents are subject to German copyright
                law. Unless expressly permitted by law, every form of utilizing,
                reproducing or processing works subject to copyright protection
                on our web pages requires the prior consent of the respective
                owner of the rights. Individual reproductions of a work are only
                allowed for private use. The materials from these pages are
                copyrighted and any unauthorized use may violate copyright laws.
              </p>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Main Office */}
              <div>
                <h3 className="text-sm uppercase tracking-wider font-medium text-[#8B0000] mb-4">
                  MAIN OFFICE
                </h3>
                <p className="text-gray-600">
                  48 Curzon Street
                  <br />
                  4th floor
                  <br />
                  London W1J 7UL
                  <br />
                  United Kingdom
                </p>
              </div>

              {/* Our Offices */}
              <div>
                <h3 className="text-sm uppercase tracking-wider font-medium text-[#8B0000] mb-4">
                  OUR OFFICES
                </h3>
                <p className="text-gray-600">
                  Luxembourg
                  <br />
                  Munich
                  <br />
                  Paris
                </p>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-sm uppercase tracking-wider font-medium text-[#8B0000] mb-4">
                  WORKING HOURS
                </h3>
                <p className="text-gray-600">9am - 5pm, Mon - Fri</p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-sm uppercase tracking-wider font-medium text-[#8B0000] mb-4">
                  CONTACT
                </h3>
                <a
                  href="mailto:office@ecassets.com"
                  className="block text-gray-600 hover:text-gray-900 mb-2"
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

        {/* CTA Section */}
        <section className="py-20">
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

export default Legals;
