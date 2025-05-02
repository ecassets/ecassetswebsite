import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/classical.module.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Classical() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>EC Assets - Classical</title>
        <meta name="description" content="EC Assets - Classical investments" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.pageContainer}>
        {/* Use Navigation component */}
        <Navigation />

        {/* Hero Section */}
        <section className={styles.hero}>
          <Image
            src="/photos/homepage/Hero.jpg"
            alt="Hero"
            fill
            priority
            className={styles.fullWidthImage}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroText}>Investing is our business.</h1>
            <Link href="/investments" className={styles.heroButton}>
              Learn More
            </Link>
          </div>
        </section>

        {/* Mission Statement */}
        <section className={styles.missionSection}>
          <div className={styles.missionLabel}>WHAT WE BELIEVE IN</div>
          <h2 className={styles.missionText}>
            Established 1994, we are a leading
            <br />
            global investment business and a
            <br />
            committed partner.
          </h2>
          <p className={`${styles.missionText} ${styles.missionParagraph}`}>
            Our mission is to invest in great
            <br />
            assets and exciting companies
            <br />
            to create long-term value.
          </p>
        </section>

        <div className={styles.sectionDivider}></div>

        {/* Real Estate Section */}
        <section className={styles.investmentSection}>
          <div className={styles.investmentContent} style={{ paddingLeft: 0 }}>
            <div className={styles.investmentLabel}>OUR INVESTMENTS</div>
            <h2 className={styles.investmentTitle}>Real Estate</h2>
            <p className={styles.investmentText}>
              As a global real estate investor, we are seeking long-term and
              secure income in prime locations. We invest in high-quality
              assets, focusing where we see outsized growth potential driven by
              global economic, demographic trend and sustainability.
            </p>
            <Link href="/investments" className={styles.investmentButton}>
              LEARN MORE
            </Link>
          </div>
          <div className={styles.investmentImage}>
            <Image
              src="/photos/homepage/RealEstate.jpg"
              alt="Real Estate"
              fill
              className={styles.fullWidthImage}
              priority
            />
          </div>
        </section>

        <div className={styles.sectionDivider}></div>

        {/* Private Equity Section */}
        <section className={styles.investmentSection}>
          <div className={styles.investmentImage}>
            <Image
              src="/photos/homepage/PrivateEquity.png"
              alt="Private Equity"
              fill
              className={styles.fullWidthImage}
              priority
            />
          </div>
          <div className={styles.investmentContent} style={{ paddingRight: 0 }}>
            <div className={styles.investmentLabel}>OUR INVESTMENTS</div>
            <h2 className={styles.investmentTitle}>Private Equity</h2>
            <p className={styles.investmentText}>
              We are an equity investor seeking investments in founders with
              greatest visions, in applications that are truly mind-changing, in
              products that are really enabling to all of us, and companies that
              are not only honestly thinking but sustainably acting.
            </p>
            <Link href="/investments" className={styles.investmentButton}>
              LEARN MORE
            </Link>
          </div>
        </section>

        <div className={styles.sectionDivider}></div>

        {/* News Section */}
        <section className={styles.newsSection}>
          <div className={styles.newsHeading}>NEWS</div>
          <h2 className={styles.newsTitle}>Company News</h2>

          <div className={`${styles.newsGrid} grid-cols-3`}>
            <Link
              href="/post/ec-assets-to-list-tech-spac-in-new-york"
              className={`${styles.newsCard} hover:border-[#8B1E20] transition-all`}
            >
              <h3
                className={`${styles.newsCardTitle} hover:text-[#8B1E20] transition-colors`}
              >
                EC Assets to list $250 million Tech SPAC in New York
              </h3>
              <hr className={styles.newsCardDivider} />
              <p className={styles.newsCardContent}>
                EC Assets wants to list a SPAC focused on European tech
                companies on NASDAQ. The strategic goal is to complete a
                billion-dollar acquisition within 18 months and form a European
                tech champion.
              </p>
            </Link>

            <Link
              href="/post/ec-assets-develops-property"
              className={`${styles.newsCard} hover:border-[#8B1E20] transition-all`}
            >
              <h3
                className={`${styles.newsCardTitle} hover:text-[#8B1E20] transition-colors`}
              >
                EC Assets develops 61.500 sqm commercial property
              </h3>
              <hr className={styles.newsCardDivider} />
              <p className={styles.newsCardContent}>
                EC Assets announces the start of the development of a commercial
                property with approx. 61.500 spm. space right in the centre of
                the economical powerhouse of Germany.
              </p>
            </Link>

            <Link
              href="/post/a-sector-ec-assets-invests-in-worktech"
              className={`${styles.newsCard} hover:border-[#8B1E20] transition-all`}
            >
              <h3
                className={`${styles.newsCardTitle} hover:text-[#8B1E20] transition-colors`}
              >
                A sector EC Assets invests in: WorkTech
              </h3>
              <hr className={styles.newsCardDivider} />
              <p className={styles.newsCardContent}>
                This today&apos;s FT article couldn&apos;t describe it any
                better - the digitization and automation of all corporate
                processes not only makes the daily work of a CFO easier. Rather,
                it is a development that can no longer be stopped.
              </p>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
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

        {/* Use Footer component */}
        <Footer />
      </div>
    </>
  );
}
