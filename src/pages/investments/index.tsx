import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Use classical styles for header, footer, padding
import styles from "../../styles/classical.module.css";
// Import components
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Investments = () => {
  const [activeTab, setActiveTab] = useState("realEstate");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const realEstateRef = useRef<HTMLDivElement>(null);
  const privateEquityRef = useRef<HTMLDivElement>(null);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Main text style
  const mainTextStyle =
    "font-['Montserrat'] font-normal text-[14.4px] leading-[1.44] text-[#555555]";
  // Header style
  const headerStyle =
    "font-['Montserrat'] font-light text-[36px] leading-[50px] text-black";

  return (
    <>
      <Head>
        <title>Investments | EC Assets</title>
        <meta
          name="description"
          content="Our investments focus on real estate and private equity with a long-term value creation strategy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Use classical page container for padding */}
      <div className={styles.pageContainer}>
        {/* Use Navigation component */}
        <Navigation />

        {/* Hero Section - Reduced height by 10% */}
        <section className="relative w-[calc(100%+80px)] left-[-40px] overflow-hidden -mt-[1px]">
          <div className="mx-[40px] relative h-[360px]">
            <div className="absolute inset-x-0 top-[5%] bottom-[5%] overflow-hidden border border-gray-200">
              <Image
                src="/photos/investments/heroinvestments.jpg"
                alt="Business meeting reviewing investment data"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className={`text-6xl text-white ${headerStyle}`}>
                  Our Investments
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Tabs Section - Fixed full width */}
        <div
          className="w-full py-6 bg-white z-10 border-b border-gray-200 mx-[-40px] px-[40px]"
          style={{
            width: "calc(100% + 80px)",
            marginLeft: "-40px",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
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

        {/* Main Content Area - Add side padding to match container */}
        <div className="container mx-auto px-[40px]">
          {/* Real Estate Main Section */}
          <section ref={realEstateRef} className="py-20 scroll-mt-28">
            {" "}
            {/* scroll-mt for offset */}
            <div className="grid md:grid-cols-2 gap-16">
              {" "}
              {/* Changed to 2 cols */}
              {/* Left Column - RE-ENABLED STICKY */}
              <div className="md:col-span-1">
                {/* Re-added sticky class */}
                <div className="sticky top-28">
                  <h2 className={`mb-8 ${headerStyle}`}>Real Estate</h2>
                  <div className="max-w-[80%]">
                    <p className={`mb-6 ${mainTextStyle}`}>
                      Since we started investing in real estate in 1994, the
                      growth of our business across both products and
                      geographies has expanded our ability to create long-term
                      value and provide practical and diverse solutions to our
                      partners.
                    </p>
                    <p className={`mb-6 ${mainTextStyle}`}>
                      Our Core+ strategy features prime real estate with a long
                      investment horizon and moderate leverage, where we can
                      unlock additional value through enhanced asset management.
                    </p>
                    <p className={`mb-12 ${mainTextStyle}`}>
                      With clear focus on commercial, industrial and residential
                      assets in global gateway cities, we only invest in
                      high-quality assets, where we see outsized growth
                      potential driven by global economic and demographic
                      trends.
                    </p>
                  </div>
                </div>
              </div>
              {/* Scrolling Right */}
              <div className="md:col-span-1 space-y-20">
                {/* ... Commercial, Industrial, Residential sections with padding and restructured... */}
                {/* Commercial */}
                <div className="p-4">
                  <div className="relative w-full h-[300px] mb-6">
                    <Image
                      src="/photos/investments/commercial.png"
                      alt="Modern commercial office space"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className={`mb-6 ${headerStyle}`}>Commercial</h3>
                  <p className={mainTextStyle}>
                    We provide high-quality facilities and infrastructure to
                    ensure a comfortable and enriching environment for our
                    largely multinational tenants.
                  </p>
                  <p className={`mt-4 ${mainTextStyle}`}>
                    In top-tier educational and research locations, we built
                    purpose-built facilities to support mission-critical
                    research by leading scientists and institutions and provides
                    companies with campuses that help them attract and retain
                    top talent.
                  </p>
                </div>
                {/* Industrial */}
                <div className="p-4">
                  <div className="relative w-full h-[300px] mb-6">
                    <Image
                      src="/photos/investments/industrial.jpg"
                      alt="Industrial warehouse facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className={`mb-6 ${headerStyle}`}>Industrial</h3>
                  <p className={mainTextStyle}>
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
                <div className="p-4">
                  <div className="relative w-full h-[300px] mb-6">
                    <Image
                      src="/photos/investments/residential.jpg"
                      alt="Luxury residential apartment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className={`mb-6 ${headerStyle}`}>Residential</h3>
                  <p className={mainTextStyle}>
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
              {/* Left Column - RE-ENABLED STICKY */}
              <div className="md:col-span-1">
                {/* Re-added sticky class */}
                <div className="sticky top-28">
                  <h2 className={`mb-8 ${headerStyle}`}>Private Equity</h2>
                  <div className="max-w-[80%]">
                    <p className={`mb-6 ${mainTextStyle}`}>
                      We play a vital role in helping companies with talented
                      management teams realize their growth potential. We unlock
                      value by identifying great companies with untapped
                      potential and enhancing their performance.
                    </p>
                    <p className={`mb-6 ${mainTextStyle}`}>
                      Our investment approach is based on a disciplined due
                      diligence process that measures risk while identifying the
                      catalysts for increased value. When we partner with a
                      business, we focus on building it to last.
                    </p>
                    <p className={`mb-12 ${mainTextStyle}`}>
                      We strive to create value by investing in great businesses
                      where our capital, strategic insight, global relationships
                      and operational support can drive transformation.
                    </p>
                  </div>
                </div>
              </div>
              {/* Scrolling Right */}
              <div className="md:col-span-1 space-y-20">
                {/* FinTech, HealthTech, WorkTech sections with padding and restructured */}
                {/* FinTech */}
                <div className="p-4">
                  <div className="relative w-full h-[300px] mb-6">
                    <Image
                      src="/photos/investments/Blue.jpg"
                      alt="FinTech visualization"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className={`mb-6 ${headerStyle}`}>FinTech</h3>
                  <p className={mainTextStyle}>
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
                <div className="p-4">
                  <div className="relative w-full h-[300px] mb-6">
                    <Image
                      src="/photos/investments/Purple.jpg"
                      alt="HealthTech visualization"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className={`mb-6 ${headerStyle}`}>HealthTech</h3>
                  <p className={mainTextStyle}>
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
                <div className="p-4">
                  <div className="relative w-full h-[300px] mb-6">
                    <Image
                      src="/photos/investments/Grey.jpg"
                      alt="WorkTech visualization"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className={`mb-6 ${headerStyle}`}>WorkTech</h3>
                  <p className={mainTextStyle}>
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

        {/* CTA Section with margin fix */}
        <section className={`${styles.contactSection} mx-[-40px] px-[40px]`}>
          <h2 className={`${styles.contactTitle} ${headerStyle}`}>
            Investing is our business.
          </h2>
          <p className={`${styles.contactText} ${mainTextStyle}`}>
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

        {/* Use Footer component */}
        <Footer />
      </div>
    </>
  );
};

export default Investments;
