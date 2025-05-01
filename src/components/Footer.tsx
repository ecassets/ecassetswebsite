import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/classical.module.css";

const Footer = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  // Check if path matches exactly or is a subpath (for nested routes)
  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  return (
    <div className="mx-[-40px]">
      <div className="mx-[24px] bg-white">
        <footer
          className={`text-white ${styles.footer} px-[75px] py-28`}
          style={{ backgroundColor: "#403e3e" }}
        >
          <div className={styles.footerRow}>
            <div
              className={styles.footerColumn}
              style={{ paddingLeft: "75px" }}
            >
              <Link href="/" className={styles.footerLogo}>
                <Image
                  src="/logof.png"
                  alt="EC Assets Logo"
                  width={140}
                  height={35}
                  priority
                />
              </Link>
              <p className={styles.footerText} style={{ color: "#e6e6e6" }}>
                Investing is our business.
              </p>
            </div>

            <div
              className={styles.footerColumn}
              style={{
                paddingLeft: "0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <h3
                  className={styles.footerHeading}
                  style={{ color: "#ffffff", textAlign: "left" }}
                >
                  Navigation
                </h3>
                <Link
                  href="/investments"
                  className={`${styles.footerLink}`}
                  style={{
                    color: isActive("/investments")
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.85)",
                    fontWeight: isActive("/investments") ? "bold" : "normal",
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  Investments
                </Link>
                <Link
                  href="/team"
                  className={styles.footerLink}
                  style={{
                    color: isActive("/team")
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.85)",
                    fontWeight: isActive("/team") ? "bold" : "normal",
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  Team
                </Link>
                <Link
                  href="/news"
                  className={styles.footerLink}
                  style={{
                    color: isActive("/news")
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.85)",
                    fontWeight: isActive("/news") ? "bold" : "normal",
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  News
                </Link>
                <Link
                  href="/contact"
                  className={styles.footerLink}
                  style={{
                    color: isActive("/contact")
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.85)",
                    fontWeight: isActive("/contact") ? "bold" : "normal",
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>

            <div
              className={styles.footerColumn}
              style={{ paddingLeft: "3%", textAlign: "left" }}
            >
              <h3 className={styles.footerHeading} style={{ color: "#ffffff" }}>
                Contact
              </h3>
              <a
                href="mailto:office@ecassets.com"
                className={styles.footerLink}
                style={{ color: "rgba(255, 255, 255, 0.85)", display: "block" }}
              >
                office@ecassets.com
              </a>
              <a
                href="tel:+442087980342"
                className={styles.footerLink}
                style={{ color: "rgba(255, 255, 255, 0.85)", display: "block" }}
              >
                +44 20 8798 0342
              </a>
              <p
                className={styles.footerAddress}
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
              >
                13 Savile Row
                <br />
                London W1S 3PH
                <br />
                United Kingdom
              </p>

              {/* Social Media Links */}
              <div className="flex mt-6 gap-4 justify-start">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#8B1E20] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#8B1E20] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className={styles.footerBottom}
            style={{
              paddingTop: "30px",
              borderTop: "1px solid #333",
              marginLeft: "75px",
              marginRight: "75px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "rgba(255, 255, 255, 0.65)", paddingLeft: "0" }}>
              Copyright © 2025 by ec assets. All rights reserved.
            </p>
            <div>
              <Link
                href="/legals"
                className={styles.footerBottomLink}
                style={{
                  color: isActive("/legals")
                    ? "rgba(255, 255, 255, 0.9)"
                    : "rgba(255, 255, 255, 0.65)",
                  fontWeight: isActive("/legals") ? "bold" : "normal",
                }}
              >
                Legals
              </Link>
              <span
                style={{ margin: "0 10px", color: "rgba(255, 255, 255, 0.5)" }}
              >
                |
              </span>
              <Link
                href="/data-privacy"
                className={styles.footerBottomLink}
                style={{
                  color: isActive("/data-privacy")
                    ? "rgba(255, 255, 255, 0.9)"
                    : "rgba(255, 255, 255, 0.65)",
                  fontWeight: isActive("/data-privacy") ? "bold" : "normal",
                }}
              >
                Data Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
