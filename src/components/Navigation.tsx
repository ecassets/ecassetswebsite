import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/classical.module.css";

const Navigation = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted state when component mounts on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (mounted) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [mounted]);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Header with conditional border on scroll */}
      <header
        className={`${styles.header}`}
        style={{
          zIndex: 50,
          width: "calc(100% + 80px)",
          marginLeft: "-40px",
          paddingLeft: "40px",
          paddingRight: "40px",
          borderBottom: isScrolled ? "1px solid #e4e4e4" : "none",
          boxShadow: "none",
          marginBottom: 0,
          paddingBottom: 0,
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="EC Assets Logo"
              width={150}
              height={38}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={styles.mainNav}
          style={{
            marginLeft: "auto",
            gap: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            href="/investments"
            className={`${styles.navItem} ${
              mounted && router.pathname === "/investments"
                ? "font-semibold text-black"
                : ""
            }`}
            style={{
              fontSize: "11px",
              letterSpacing: "1.5px",
              color: "#444444",
            }}
          >
            INVESTMENTS
          </Link>
          <Link
            href="/team"
            className={`${styles.navItem} ${
              mounted && router.pathname === "/team"
                ? "font-semibold text-black"
                : ""
            }`}
            style={{
              fontSize: "11px",
              letterSpacing: "1.5px",
              color: "#444444",
            }}
          >
            TEAM
          </Link>
          <Link
            href="/news"
            className={`${styles.navItem} ${
              mounted && router.pathname === "/news"
                ? "font-semibold text-black"
                : ""
            }`}
            style={{
              fontSize: "11px",
              letterSpacing: "1.5px",
              color: "#444444",
            }}
          >
            NEWS
          </Link>
          <Link
            href="/contact"
            className={`${styles.navItem} ${
              mounted && router.pathname === "/contact"
                ? "font-semibold text-black"
                : ""
            }`}
            style={{
              fontSize: "11px",
              letterSpacing: "1.5px",
              color: "#444444",
            }}
          >
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

      {/* Mobile Navigation */}
      <nav
        className={`${styles.mobileNav} ${
          mobileMenuOpen ? styles.mobileNavActive : ""
        }`}
        style={{
          width: "calc(100% + 80px)",
          marginLeft: "-40px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <Link
          href="/investments"
          className={`${styles.mobileNavItem} ${
            mounted && router.pathname === "/investments"
              ? "font-semibold text-black"
              : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          INVESTMENTS
        </Link>
        <Link
          href="/team"
          className={`${styles.mobileNavItem} ${
            mounted && router.pathname === "/team"
              ? "font-semibold text-black"
              : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          TEAM
        </Link>
        <Link
          href="/news"
          className={`${styles.mobileNavItem} ${
            mounted && router.pathname === "/news"
              ? "font-semibold text-black"
              : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          NEWS
        </Link>
        <Link
          href="/contact"
          className={`${styles.mobileNavItem} ${
            mounted && router.pathname === "/contact"
              ? "font-semibold text-black"
              : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          CONTACT
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
