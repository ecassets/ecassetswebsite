import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Use classical styles
import styles from "../../styles/classical.module.css";
// Import Navigation and Footer components
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Team = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Team | EC Assets</title>
        <meta
          name="description"
          content="Meet our world-class team of professionals at EC Assets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Use classical page container for padding */}
      <div className={styles.pageContainer}>
        {/* Use Navigation component */}
        <Navigation />

        {/* Original Page Content - Wrapped in container for consistency */}
        <div className="container mx-auto">
          {/* Hero Section - Standardized across pages */}
          <section className="relative w-[calc(100%+80px)] left-[-40px] overflow-hidden -mt-[1px]">
            <div className="mx-[40px] relative h-[360px]">
              <div className="absolute inset-x-0 top-[5%] bottom-[5%] overflow-hidden border border-gray-200">
                <Image
                  src="/photos/team/teamhero.jpg"
                  alt="Team meeting around a table"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-6xl font-light text-white">Our Team</h1>
                </div>
              </div>
            </div>
          </section>

          {/* Team Intro */}
          <section className="py-12 text-center">
            <h2 className="text-2xl font-light mb-4">Our people</h2>
            <h3 className="text-3xl font-light mb-7 max-w-2xl mx-auto">
              Our world-class team
            </h3>
          </section>

          {/* Team Members */}
          <section className="pb-14 bg-gray-50 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[58%] mx-auto">
              {/* Jason Keogh */}
              <div className="shadow-sm bg-white">
                <div className="relative h-[381px]">
                  <Image
                    src="/photos/team/Jason.png"
                    alt="Jason Keogh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-center text-gray-500 uppercase tracking-wider mb-1.5 text-xs">
                    CEO UK
                  </h3>
                  <h2 className="text-center text-xl font-light mb-3">
                    Jason Keogh
                  </h2>
                  <p className="text-gray-600 mb-2.5 text-base">
                    Jason is CEO of our operations in the United Kingdom and
                    within the board responsible for strategy, finance and
                    product.
                  </p>
                  <p className="text-gray-600 mb-2.5 text-base">
                    Extremely entrepreneurial minded, he boasts more than 30
                    years of experience in the global financial markets.
                  </p>
                  <p className="text-gray-600 text-base">
                    A passionate advocate of digitalization, he works closely
                    with our trading desks and oversees the regulatory processes
                    of our funds.
                  </p>
                </div>
              </div>

              {/* Christian Frealdsson */}
              <div className="shadow-sm bg-white">
                <div className="relative h-[381px]">
                  <Image
                    src="/photos/team/Christian.jpg"
                    alt="Christian Frealdsson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-center text-gray-500 uppercase tracking-wider mb-1.5 text-xs">
                    CEO UAE
                  </h3>
                  <h2 className="text-center text-xl font-light mb-3">
                    Christian Frealdsson
                  </h2>
                  <p className="text-gray-600 mb-2.5 text-base">
                    Chris is CEO at EC Assets UAE. Within the Management Board,
                    he represents the operational perspective and dialog.
                  </p>
                  <p className="text-gray-600 mb-2.5 text-base">
                    He has long been part of our senior management team, most
                    recently as Senior Vice President Growth.
                  </p>
                  <p className="text-gray-600 text-base">
                    Highly experienced in the management consulting sector, he
                    is now working since several years in the consulting sector
                    in United Arabic Emirates and the broader region.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section - Replaced with classical contact section style */}
          <section className={styles.contactSection}>
            <h2 className={`${styles.contactTitle} text-3xl`}>
              Investing is our business.
            </h2>
            <p className={`${styles.contactText} text-base`}>
              Let us tell you more about our assets and investments.
              <br />
              Why not achieving more together?
              <br />
              Please contact us today!
            </p>
            <Link href="/contact" className={styles.investmentButton}>
              Contact us
            </Link>
          </section>
        </div>

        {/* Use Footer component */}
        <Footer />
      </div>
    </>
  );
};

export default Team;
