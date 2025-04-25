import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const ClassicalNavigation = ({
  currentPage,
  showActions = true,
  transparent,
}: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: "investments", url: "/investments" },
    { text: "team", url: "/team" },
    { text: "News", url: "/news" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <div className="navigation w-nav">
      <div className="div-block-9">
        <div className="navigation-wrap">
          <Link href="/" className="logo-link w-nav-brand">
            <div className="text-[#8B0000] text-4xl font-bold">ec assets</div>
          </Link>
          <div className="menu">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button w-nav-button"
            >
              {isMenuOpen ? (
                <X className="menu-icon" width="22" />
              ) : (
                <Menu className="menu-icon" width="22" />
              )}
            </button>
          </div>
        </div>
        <nav
          role="navigation"
          className={`navigation-items w-nav-menu ${
            isMenuOpen ? "block" : "hidden md:block"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="navigation-item w-nav-link"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ClassicalNavigation;
