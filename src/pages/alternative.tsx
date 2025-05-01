import React from "react";
import {
  ArrowRight,
  TrendingUp,
  BarChart,
  PieChart,
  Zap,
  Globe,
  Building,
  Award,
  Briefcase,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const AlternativeInvestments = () => {
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
      title: "EC Assets launches tech venture fund",
      description:
        "EC Assets announced the launch of a new €100 million venture fund focused on early-stage European technology companies with significant growth potential.",
      date: "MARCH 15, 2024",
      slug: "ec-assets-launches-tech-venture-fund",
    },
    {
      title: "Sustainable Infrastructure Investment Performance",
      description:
        "EC Assets' sustainable infrastructure portfolio outperformed market benchmarks with 18% returns, proving that environmental responsibility and financial growth can go hand in hand.",
      date: "FEBRUARY 8, 2024",
      slug: "sustainable-infrastructure-investment-performance",
    },
    {
      title: "EC Assets expands alternative portfolio with fintech",
      description:
        "EC Assets continues its expansion into the alternative investment space with strategic investments in three promising European fintech startups revolutionizing payment solutions.",
      date: "JANUARY 22, 2024",
      slug: "ec-assets-expands-alternative-portfolio",
    },
  ];

  const alternativeCategories = [
    {
      name: "Venture Capital",
      icon: <Zap className="w-10 h-10 text-[#8B0000] mb-4" />,
      description:
        "Early and growth-stage investments in technology startups and disruptive business models with high growth potential.",
    },
    {
      name: "Sustainable Infrastructure",
      icon: <Building className="w-10 h-10 text-[#8B0000] mb-4" />,
      description:
        "Investment in renewable energy projects, green buildings, and infrastructure assets that generate both environmental and financial returns.",
    },
  ];

  return (
    <>
      <Head>
        <title>EC Assets | Alternative Investments</title>
        <meta
          name="description"
          content="Discover our alternative investment opportunities including venture capital, sustainable infrastructure, and emerging markets."
        />
        <meta
          name="keywords"
          content="alternative investments, venture capital, sustainable infrastructure, fintech, emerging markets"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="EC Assets | Alternative Investments"
        />
        <meta
          property="og:description"
          content="Discover our alternative investment opportunities including venture capital, sustainable infrastructure, and emerging markets."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecassets.com/alternative" />
        <meta property="og:image" content="https://ecassets.com/og-image.jpg" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-screen">
            <Image
              src="/photos/homepage/Hero.jpg"
              alt="Modern city skyline representing alternative investments"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-5xl md:text-7xl font-light text-white mb-8">
                    Alternative Investments
                  </h1>
                  <div className="mt-8">
                    <Link
                      href="/alternative-investments"
                      className="inline-block bg-[#8B0000] text-white px-8 py-3 text-sm uppercase tracking-wider"
                    >
                      Explore Opportunities
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
                INNOVATION IN INVESTING
              </h2>
              <p className="text-4xl font-light mb-10 circular-std">
                Going beyond conventional investment approaches, we seek unique
                opportunities in emerging sectors and innovative business
                models.
              </p>
              <p className="text-4xl font-light circular-std">
                Our alternative investment strategy focuses on venture capital,
                sustainable infrastructure, and high-growth technology
                companies.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Venture Capital Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="uppercase text-[#8B0000] text-sm tracking-wider mb-6">
                  OUR INVESTMENTS
                </h3>
                <h2 className="text-5xl font-light mb-8">Venture Capital</h2>
                <p className="text-gray-600 mb-8">
                  We invest in early and growth-stage companies that are
                  building transformative technologies and business models. Our
                  venture capital strategy focuses on fintech, healthtech, and
                  enterprise software across Europe, with a particular emphasis
                  on companies with proven traction and clear paths to
                  scalability.
                </p>
                <Link
                  href="/alternative-investments/venture-capital"
                  className="inline-flex items-center text-[#8B0000] hover:underline"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/photos/homepage/PrivateEquity.png"
                  alt="Venture Capital"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Sustainable Infrastructure Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="relative h-[400px] order-last md:order-first">
                <Image
                  src="/photos/homepage/RealEstate.jpg"
                  alt="Sustainable Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="uppercase text-[#8B0000] text-sm tracking-wider mb-6">
                  OUR INVESTMENTS
                </h3>
                <h2 className="text-5xl font-light mb-8">
                  Sustainable Infrastructure
                </h2>
                <p className="text-gray-600 mb-8">
                  Our sustainable infrastructure investments target renewable
                  energy, green buildings, and climate-smart technologies. We
                  focus on projects that deliver both strong financial returns
                  and positive environmental impact, working with partners who
                  share our vision for a sustainable future.
                </p>
                <Link
                  href="/alternative-investments/sustainable-infrastructure"
                  className="inline-block bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Categories Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6">
                Our Alternative Focus Areas
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We target key sectors where innovation and disruption create
                significant opportunities for value creation and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {alternativeCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-10 text-center"
                >
                  <div className="flex justify-center">{category.icon}</div>
                  <h3 className="text-3xl font-light mb-4">{category.name}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <Link
                    href={`/alternative-investments/${category.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-[#8B0000] hover:underline"
                  >
                    View Opportunities <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Articles Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((news, index) => (
                <Link key={index} href={`/post/${news.slug}`} className="block">
                  <div className="bg-white p-8 h-full hover:shadow-md transition-shadow border border-gray-200">
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
              Discover the future of investing.
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Interested in our alternative investment strategies? Contact us
              today to learn more about our venture capital opportunities and
              sustainable infrastructure projects.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#8B0000] text-white px-8 py-3 text-sm uppercase tracking-wider"
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

export default AlternativeInvestments;
