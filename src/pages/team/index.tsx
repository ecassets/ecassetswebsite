import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Use classical styles
import styles from "../../styles/classical.module.css";

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
        {/* Header from classical.tsx */}
        <header className={styles.header}>
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
            <Link
              href="/team"
              className={`${styles.navItem} font-semibold text-black`}
            >
              {" "}
              {/* Highlight */}
              TEAM
            </Link>
            <Link href="/news" className={styles.navItem}>
              NEWS
            </Link>
            <Link href="/contact" className={styles.navItem}>
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

        {/* Mobile Navigation from classical.tsx */}
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
            className={`${styles.mobileNavItem} font-semibold text-black`}
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
            className={styles.mobileNavItem}
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
        </nav>

        {/* Original Page Content - Wrapped in container for consistency */}
        <div className="container mx-auto py-10">
          {/* Hero Section */}
          <section className="relative w-full -mx-10 mb-10">
            <div className="relative h-[400px]">
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
          </section>

          {/* Team Intro */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-light mb-6">Our people</h2>
            <h3 className="text-4xl font-light mb-10 max-w-2xl mx-auto">
              Our world-class team
            </h3>
          </section>

          {/* Team Members */}
          <section className="pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Jason Keogh */}
              <div className="border border-gray-300">
                <div className="relative h-[400px]">
                  <Image
                    src="/photos/team/Jason.png"
                    alt="Jason Keogh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-center text-gray-500 uppercase tracking-wider mb-2">
                    CEO UK
                  </h3>
                  <h2 className="text-center text-3xl font-light mb-6">
                    Jason Keogh
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Jason is CEO of our operations in the United Kingdom and
                    within the board responsible for strategy, finanaces and
                    product.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Extremely entrepreneurial minded, he boasts more than 30
                    years of experience in the global financial markets.
                  </p>
                  <p className="text-gray-600">
                    A passionate advocate of digitalization, he works closely
                    with our trading desks and oversees the regulatory processes
                    of our funds.
                  </p>
                </div>
              </div>

              {/* Christian Frealdsson */}
              <div className="border border-gray-300">
                <div className="relative h-[400px]">
                  <Image
                    src="/photos/team/Christian.jpg"
                    alt="Christian Frealdsson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-center text-gray-500 uppercase tracking-wider mb-2">
                    CEO UAE
                  </h3>
                  <h2 className="text-center text-3xl font-light mb-6">
                    Christian Frealdsson
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Chris is CEO at EC Assets UAE. Within the Management Board,
                    he represents the operational perspective and dialog.
                  </p>
                  <p className="text-gray-600 mb-4">
                    He has long been part of our senior management team, most
                    recently as Senior Vice President Growth.
                  </p>
                  <p className="text-gray-600">
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
            <h2 className={styles.contactTitle}>Investing is our business.</h2>
            <p className={styles.contactText}>
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

        {/* Footer from classical.tsx - Made lighter grey */}
        <footer
          className={`bg-gray-500 text-white ${styles.footer} px-10 py-20`}
        >
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
              <Link href="/team" className={`${styles.footerLink} font-bold`}>
                {" "}
                {/* Highlight */}
                Team
              </Link>
              <Link href="/news" className={styles.footerLink}>
                News
              </Link>
              <Link href="/contact" className={styles.footerLink}>
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

export default Team;
