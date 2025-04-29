import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Use classical styles for header, footer, padding
import styles from "../../styles/classical.module.css";

const Investments = () => {
  const [activeTab, setActiveTab] = useState("realEstate");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const realEstateRef = useRef<HTMLDivElement>(null);
  const privateEquityRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      // Calculate offset based on header height
      const headerOffset = 80; // Adjust this value based on your actual fixed header height
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleTabClick = (
    tab: string,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    setActiveTab(tab);
    scrollToRef(ref);
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Investments | EC Assets</title>
        <meta
          name="description"
          content="Our investments focus on real estate and private equity with a long-term value creation strategy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Use classical page container for padding */}
      <div className={styles.pageContainer}>
        {/* Header from classical.tsx */}
        <header className={styles.header}>
          <Link href="/" className={styles.logo}>
            {/* Assuming logo image path is correct, otherwise use text */}
            <Image
              src="/logo.png"
              alt="EC Assets Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className={styles.mainNav}>
            <Link
              href="/investments"
              className={`${styles.navItem} font-semibold text-black`}
            >
              {" "}
              {/* Highlight current page */}
              INVESTMENTS
            </Link>
            <Link href="/team" className={styles.navItem}>
              TEAM
            </Link>
            <Link href="/news" className={styles.navItem}>
              NEWS
            </Link>
            <Link href="/contact" className={styles.navItem}>
              CONTACT
            </Link>
          </nav>
          {/* Mobile Menu Button */}
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
            className={`${styles.mobileNavItem} font-semibold text-black`}
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
            className={styles.mobileNavItem}
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full -mx-10">
          {" "}
          {/* Negative margin to counter container padding */}
          <div className="relative h-[400px]">
            <Image
              src="/photos/investments/heroinvestments.jpg"
              alt="Business meeting reviewing investment data"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl font-light text-white">
                Our Investments
              </h1>
            </div>
          </div>
        </section>

        {/* Scrolling Tabs Section */}
        <div className="w-full py-6 sticky top-[73px] bg-white z-10 border-b border-gray-200 -mx-10 px-10">
          {" "}
          {/* Sticky tabs below header */}
          <div className="container mx-auto flex justify-center space-x-16">
            <button
              onClick={() => handleTabClick("realEstate", realEstateRef)}
              className={`py-2 text-lg relative ${
                activeTab === "realEstate"
                  ? "text-black font-medium"
                  : "text-gray-500"
              }`}
            >
              Real Estate
              {activeTab === "realEstate" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1E20]"></span> // Red/Brown underline
              )}
            </button>
            <button
              onClick={() => handleTabClick("privateEquity", privateEquityRef)}
              className={`py-2 text-lg relative ${
                activeTab === "privateEquity"
                  ? "text-black font-medium"
                  : "text-gray-500"
              }`}
            >
              Private Equity
              {activeTab === "privateEquity" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1E20]"></span> // Red/Brown underline
              )}
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="container mx-auto">
          {/* Real Estate Main Section */}
          <section ref={realEstateRef} className="py-20 scroll-mt-28">
            {" "}
            {/* scroll-mt for offset */}
            <div className="grid md:grid-cols-2 gap-16">
              {" "}
              {/* Changed to 2 cols */}
              {/* Left Column (No longer sticky) */}
              <div className="md:col-span-1">
                <div className="top-44">
                  <h2 className="text-5xl font-light mb-8 text-center">
                    Real Estate
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Since we started investing in real estate in 1994, the
                    growth of our business across both products and geographies
                    has expanded our ability to create long-term value and
                    provide practical and diverse solutions to our partners.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our Core+ strategy features prime real estate with a long
                    investment horizon and moderate leverage, where we can
                    unlock additional value through enhanced asset management.
                  </p>
                  <p className="text-gray-600 mb-12">
                    With clear focus on commercial, industrial and residential
                    assets in global gateway cities, we only invest in
                    high-quality assets, where we see outsized growth potential
                    driven by global economic and demographic trends.
                  </p>
                </div>
              </div>
              {/* Scrolling Right */}
              <div className="md:col-span-1 space-y-20">
                {" "}
                {/* Changed to col-span-1 */}
                {/* Commercial */}
                <div>
                  <h3 className="text-4xl font-light mb-6">Commercial</h3>
                  <div className="relative h-[400px] mb-6">
                    <Image
                      src="/photos/investments/commercial.png"
                      alt="Modern commercial office space"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600">
                    We provide high-quality facilities and infrastructure to
                    ensure a comfortable and enriching environment for our
                    largely multinational tenants.
                  </p>
                  <p className="text-gray-600 mt-4">
                    In top-tier educational and research locations, we built
                    purpose-built facilities to support mission-critical
                    research by leading scientists and institutions and provides
                    companies with campuses that help them attract and retain
                    top talent.
                  </p>
                </div>
                {/* Industrial */}
                <div>
                  <h3 className="text-4xl font-light mb-6">Industrial</h3>
                  <div className="relative h-[400px] mb-6">
                    <Image
                      src="/photos/investments/industrial.jpg"
                      alt="Industrial warehouse facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600">
                    We have capitalized on continued e‑commerce tailwinds and
                    strong logistics fundamentals in Europe. Our portfolio is
                    comprised of high-quality assets located in major logistics
                    hubs in countries such as Germany, France, the U.K. and
                    Spain. The portfolio benefits from robust tenant demand as
                    continued e-commerce growth has driven an increased need for
                    well‑located warehouses across Europe.
                  </p>
                </div>
                {/* Residential */}
                <div>
                  <h3 className="text-4xl font-light mb-6">Residential</h3>
                  <div className="relative h-[400px] mb-6">
                    <Image
                      src="/photos/investments/residential.jpg"
                      alt="Luxury residential apartment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600">
                    We are investing in high-quality apartment communities and
                    multifamily housing in the most sought-after areas of top
                    tier cities across Europe. In collaboration with local city
                    councils, we preserved historic buildings for over 20 years
                    through our acquisitions. We renovate our portfolio
                    properties to the highest sustainability standards including
                    rooftop solar achieving regularily LEED Platinum
                    certification.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="my-20 border-gray-200" />

          {/* Private Equity Main Section */}
          <section ref={privateEquityRef} className="py-20 scroll-mt-28">
            {" "}
            {/* scroll-mt for offset */}
            <div className="grid md:grid-cols-2 gap-16">
              {" "}
              {/* Changed to 2 cols */}
              {/* Left Column (No longer sticky) */}
              <div className="md:col-span-1">
                <div className="top-44">
                  <h2 className="text-5xl font-light mb-8 text-center">
                    Private Equity
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We play a vital role in helping companies with talented
                    management teams realize their growth potential. We unlock
                    value by identifying great companies with untapped potential
                    and enhancing their performance.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our investment approach is based on a disciplined due
                    diligence process that measures risk while identifying the
                    catalysts for increased value. When we partner with a
                    business, we focus on building it to last.
                  </p>
                  <p className="text-gray-600 mb-12">
                    We strive to create value by investing in great businesses
                    where our capital, strategic insight, global relationships
                    and operational support can drive transformation.
                  </p>
                </div>
              </div>
              {/* Scrolling Right */}
              <div className="md:col-span-1 space-y-20">
                {" "}
                {/* Changed to col-span-1 */}
                {/* FinTech */}
                <div>
                  <h3 className="text-4xl font-light mb-6">FinTech</h3>
                  <div className="relative h-[400px] mb-6">
                    <Image
                      src="/photos/investments/Blue.jpg"
                      alt="FinTech visualization"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600">
                    We partner with providers of financial analytics tools and
                    its infrastructure, providing leading data and insights,
                    trading and technology platforms that connect consumers as
                    well as communities of trading, investment, financial and
                    corporate professionals. We invest in insurance and
                    financial technology, and related sub-sectors such as
                    financial advisors and distribution, payments and securities
                    services.
                  </p>
                </div>
                {/* HealthTech */}
                <div>
                  <h3 className="text-4xl font-light mb-6">HealthTech</h3>
                  <div className="relative h-[400px] mb-6">
                    <Image
                      src="/photos/investments/Purple.jpg"
                      alt="HealthTech visualization"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600">
                    We invest in businesses with innovative products or services
                    and high-quality management teams providing data and
                    analytics-driven solutions to improve clinical, financial
                    and patient engagement outcomes. We target opportunities
                    across various health care sub-sectors, including
                    biopharmaceuticals, medical devices, diagnostics ⁄ life
                    science tools, providers, HCIT ⁄ informatics, and other
                    services.
                  </p>
                </div>
                {/* WorkTech */}
                <div>
                  <h3 className="text-4xl font-light mb-6">WorkTech</h3>
                  <div className="relative h-[400px] mb-6">
                    <Image
                      src="/photos/investments/Grey.jpg"
                      alt="WorkTech visualization"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600">
                    We look for businesses positioned for substantial growth
                    that deliver differentiated value propositions to their
                    clients by providing solutions for the virtualization of the
                    processes of entire organizations and enhancing
                    digitalization further. These enablers are leaders in
                    workflow automation and enterprise content management. They
                    create game-changing applications in matter and IP
                    mangement.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section - Replaced with classical contact section */}
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

        {/* Footer from classical.tsx - Made lighter grey */}
        <footer className={`bg-gray-600 text-white ${styles.footer} px-10`}>
          {" "}
          {/* Lighter grey + classical padding */}
          <div className={styles.footerRow}>
            <div className={styles.footerColumn}>
              <Link href="/" className={styles.footerLogo}>
                ec assets
              </Link>
              <p className={styles.footerText}>Investing is our business.</p>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Navigation</h3>
              <Link
                href="/investments"
                className={`${styles.footerLink} font-bold`}
              >
                {" "}
                {/* Highlight */}
                Investments
              </Link>
              <Link href="/team" className={styles.footerLink}>
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
              {/* Social links from classical footer if desired - Add here */}
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

export default Investments;
