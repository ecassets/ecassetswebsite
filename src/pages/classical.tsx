import React from "react";
import {
  ArrowRight,
  Star,
  MessageSquare,
  Users,
  Bed,
  Clock,
  ChevronRight,
  MapPin,
  Compass,
  Wine,
  Utensils,
  Ship,
  Calendar,
  Award,
  Shield,
  Coffee,
  Anchor,
  ChevronDown,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ClassicalNavigation from "@/components/ClassicalNavigation";
import Footer from "@/components/Footer";

const ClassicalInvestments = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EC Assets",
    description: "Leading global investment business and a committed partner.",
    url: "https://ecassets.com",
    logo: "https://ecassets.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
  };

  // Featured news articles
  const newsItems = [
    {
      title: "EC Assets to list $250 million Tech SPAC in New York",
      description:
        "EC Assets wants to list a SPAC focused on European tech companies on NASDAQ. The strategic goal is to complete a billion-dollar acquisition within 18 months and form a European tech champion.",
      date: "FEBRUARY 27, 2021",
      slug: "ec-assets-to-list-tech-spac-in-new-york",
    },
    {
      title: "EC Assets develops 61.500 sqm commercial property",
      description:
        "EC Assets announces the start of the development of a commercial property with approx. 61.500 spm. space right in the centre of the economical powerhouse of Germany.",
      date: "DECEMBER 22, 2020",
      slug: "ec-assets-develops-61-500-sqm-commercial-property",
    },
    {
      title: "A sector EC Assets invests in: WorkTech",
      description:
        "This today's FT article couldn't describe it any better - the digitization and automation of all corporate processes not only makes the daily work of a CFO easier. Rather, it is a development that can no longer be stopped.",
      date: "DECEMBER 12, 2020",
      slug: "a-sector-ec-assets-invests-in-worktech",
    },
  ];

  return (
    <>
      <Head>
        <title>EC Assets | Classical Investments</title>
        <meta
          name="description"
          content="Established 1994, we are a leading global investment business and a committed partner focused on real estate and private equity."
        />
        <meta
          name="keywords"
          content="investments, real estate, private equity, global investment"
        />

        {/* Open Graph tags */}
        <meta property="og:title" content="EC Assets | Classical Investments" />
        <meta
          property="og:description"
          content="Established 1994, we are a leading global investment business and a committed partner focused on real estate and private equity."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecassets.com/classical" />
        <meta property="og:image" content="https://ecassets.com/og-image.jpg" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <ClassicalNavigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-screen">
            <Image
              src="/photos/homepage/Hero.jpg"
              alt="London skyline with Tower Bridge"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-5xl md:text-7xl font-light text-white mb-8">
                    Investing is our business
                  </h1>
                  <div className="mt-8">
                    <Link
                      href="/investments"
                      className="inline-block bg-[#8B0000] text-white px-8 py-3 text-sm uppercase tracking-wider"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we believe in Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="uppercase text-[#8B0000] text-sm tracking-wider mb-6 circular-std font-medium">
                WHAT WE BELIEVE IN
              </h2>
              <p className="text-4xl font-light mb-10 circular-std">
                Established 1994, we are a leading global investment business
                and a committed partner.
              </p>
              <p className="text-4xl font-light circular-std">
                Our mission is to invest in great assets and exciting companies
                to create long-term value.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Real Estate Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="uppercase text-[#8B0000] text-sm tracking-wider mb-6">
                  OUR INVESTMENTS
                </h3>
                <h2 className="text-5xl font-light mb-8">Real Estate</h2>
                <p className="text-gray-600 mb-8">
                  As a global real estate investor, we are seeking long-term and
                  secure income in prime locations. We invest in high-quality
                  assets, focusing where we see outsized growth potential driven
                  by global economic, demographic trend and sustainability.
                </p>
                <Link
                  href="/investments/real-estate"
                  className="inline-block bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider"
                >
                  Learn more
                </Link>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/photos/homepage/RealEstate.jpg"
                  alt="Premium real estate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Private Equity Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="relative h-[400px] order-last md:order-first">
                <Image
                  src="/photos/homepage/PrivateEquity.png"
                  alt="Private Equity"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="uppercase text-[#8B0000] text-sm tracking-wider mb-6">
                  OUR INVESTMENTS
                </h3>
                <h2 className="text-5xl font-light mb-8">Private Equity</h2>
                <p className="text-gray-600 mb-8">
                  We are an equity investor seeking investments in founders with
                  greatest visions, in applications that are truly
                  mind-changing, in products that are really enabling to all of
                  us, and companies that are not only honestly thinking but
                  sustainably acting.
                </p>
                <Link
                  href="/investments/private-equity"
                  className="inline-block bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* News Articles Section - Simplified */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((news, index) => (
                <Link key={index} href={`/post/${news.slug}`} className="block">
                  <div className="bg-white p-8 h-full hover:shadow-md transition-shadow">
                    <p className="text-gray-500 text-sm mb-3">{news.date}</p>
                    <h3 className="text-2xl font-light mb-4">{news.title}</h3>
                    <div className="w-full h-px bg-gray-200 my-4"></div>
                    <p className="text-gray-600 mb-4">{news.description}</p>
                    <div className="text-[#8B0000] hover:underline inline-flex items-center mt-2">
                      Read more <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/news"
                className="inline-block bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 text-sm uppercase tracking-wider transition-colors"
              >
                View All News
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-6">
              Investing is our business.
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Let us tell you more about our assets and investments. Why not
              achieving more together? Please contact us today!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ClassicalInvestments;
