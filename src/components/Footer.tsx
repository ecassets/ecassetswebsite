import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useRouter();

  return (
    <footer className="bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo and Tagline */}
          <div>
            <h2 className="text-4xl font-bold mb-6">ec assets</h2>
            <p className="text-gray-300 mb-4">Investing is our business.</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-light mb-8">NAVIGATION</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/investments"
                  className={`text-gray-300 hover:text-white transition-colors ${
                    pathname.startsWith("/investments") ? "font-bold" : ""
                  }`}
                >
                  Investments
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className={`text-gray-300 hover:text-white transition-colors ${
                    pathname.startsWith("/team") ? "font-bold" : ""
                  }`}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={`text-gray-300 hover:text-white transition-colors ${
                    pathname.startsWith("/news") ? "font-bold" : ""
                  }`}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-gray-300 hover:text-white transition-colors ${
                    pathname.startsWith("/contact") ? "font-bold" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-light mb-8">CONTACT</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:office@ecassets.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  office@ecassets.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+442087980342"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +44 20 8798 0342
                </a>
              </li>
              <li className="text-gray-300">
                13 Savile Row
                <br />
                London W1S 3PH
                <br />
                United Kingdom
              </li>
            </ul>

            <div className="flex space-x-4 mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © Copyright {currentYear} by ec assets
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="border-t border-gray-400 pt-2">
              <Link
                href="/legals"
                className="text-gray-400 hover:text-white text-sm"
              >
                Legals
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="/data-privacy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Data Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-8">
        <a
          href="https://cdn.prod.website-files.com/5fbd373f29172ab124e7c4d/5fc76bab555c1e0966b08b8f_ec_logo_white.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://cdn.prod.website-files.com/5fbd373f29172ab124e7c4d/5fc76bab555c1e0966b08b8f_ec_logo_white.png"
            alt="EC Assets Logo"
            width={100}
            height={40}
            className="mx-auto"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
