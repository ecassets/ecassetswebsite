import React from "react";
import {
  ArrowRight,
  Zap,
  Building,
  Globe,
  BarChart2,
  TrendingUp,
  Shield,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AlternativeNavigation from "@/components/AlternativeNavigation";
import Footer from "@/components/Footer";

const AlternativeInvestmentsPage = () => {
  const investmentCategories = [
    {
      title: "Venture Capital",
      description:
        "Early and growth-stage investments in technology startups and disruptive business models with high growth potential.",
      icon: <Zap className="w-12 h-12 text-[#8B0000]" />,
      details: [
        "Seed and Series A investments in European tech startups",
        "Focus on fintech, healthtech, and SaaS companies",
        "Target 3-5x return over 5-7 year investment period",
        "Hands-on approach with portfolio companies",
      ],
      linkText: "Venture Capital Portfolio",
      linkUrl: "/alternative-investments/venture-capital",
    },
    {
      title: "Sustainable Infrastructure",
      description:
        "Investment in renewable energy projects, green buildings, and infrastructure assets that generate both environmental and financial returns.",
      icon: <Building className="w-12 h-12 text-[#8B0000]" />,
      details: [
        "Solar and wind energy projects across Europe",
        "Green building development and retrofitting",
        "ESG-compliant infrastructure assets",
        "Long-term income with inflation protection",
      ],
      linkText: "Sustainable Projects",
      linkUrl: "/alternative-investments/sustainable-infrastructure",
    },
    {
      title: "Technology Growth",
      description:
        "Later-stage investments in established technology companies with proven business models seeking expansion capital.",
      icon: <TrendingUp className="w-12 h-12 text-[#8B0000]" />,
      details: [
        "Minority stakes in established tech companies",
        "Focus on businesses with €10M+ annual revenue",
        "Cross-border expansion and acquisition strategies",
        "Value-add through industry networks and expertise",
      ],
      linkText: "Growth Portfolio",
      linkUrl: "/alternative-investments/technology-growth",
    },
    {
      title: "Digital Assets",
      description:
        "Strategic investments in blockchain technology, tokenization platforms, and digital asset infrastructure.",
      icon: <BarChart2 className="w-12 h-12 text-[#8B0000]" />,
      details: [
        "Blockchain infrastructure and platforms",
        "Digital asset custody solutions",
        "Tokenization of real-world assets",
        "Regulated cryptocurrency exchanges and services",
      ],
      linkText: "Digital Assets Strategy",
      linkUrl: "/alternative-investments/digital-assets",
    },
  ];

  return (
    <>
      <Head>
        <title>Alternative Investments | EC Assets</title>
        <meta
          name="description"
          content="Explore EC Assets' alternative investment strategies including venture capital, sustainable infrastructure, and digital assets."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <AlternativeNavigation />

        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[500px]">
            <Image
              src="/photos/homepage/Hero.jpg"
              alt="Alternative Investments"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                    Alternative Investments
                  </h1>
                  <p className="text-xl text-white/90 mb-8">
                    Innovative strategies to drive growth and outperformance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="uppercase text-[#8B0000] text-sm tracking-wider mb-6">
                INVESTMENT STRATEGY
              </h2>
              <p className="text-4xl font-light mb-8">
                Our alternative investment approach seeks opportunities beyond
                traditional assets
              </p>
              <p className="text-lg text-gray-600">
                EC Assets pursues investments in innovative sectors and emerging
                technologies, seeking both attractive financial returns and
                positive impact. We focus on sectors undergoing digital
                transformation and sustainability-driven change, where our
                expertise and network can add significant value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-8 border-l-4 border-[#8B0000]">
                <h3 className="text-2xl font-light mb-4">Our Approach</h3>
                <p className="text-gray-600 mb-4">
                  We take a research-driven approach to alternative investments,
                  identifying structural trends and focusing on areas where
                  technology and sustainability create new opportunities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0 mt-1" />
                    <span>Long-term investment horizon</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0 mt-1" />
                    <span>Focus on sustainable growth</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0 mt-1" />
                    <span>Active management of investments</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 border-l-4 border-[#8B0000]">
                <h3 className="text-2xl font-light mb-4">
                  Investment Criteria
                </h3>
                <p className="text-gray-600 mb-4">
                  We seek investments that meet specific criteria designed to
                  deliver superior risk-adjusted returns and positive impact.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0 mt-1" />
                    <span>Proven technology or business model</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0 mt-1" />
                    <span>Strong management teams</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0 mt-1" />
                    <span>Clear path to profitability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light mb-16 text-center">
              Investment Categories
            </h2>

            <div className="space-y-12">
              {investmentCategories.map((category, index) => (
                <div key={index} className="bg-white p-8 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1 flex flex-col items-center md:items-start">
                      <div className="bg-gray-50 p-4 rounded-full mb-4 inline-block">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-light mb-2 text-center md:text-left">
                        {category.title}
                      </h3>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-gray-600 mb-6">
                        {category.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {category.details.map((detail, i) => (
                          <div key={i} className="flex items-start">
                            <Shield className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0 mt-1" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={category.linkUrl}
                        className="inline-flex items-center text-[#8B0000] hover:underline"
                      >
                        {category.linkText}{" "}
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-6">
              Interested in our alternative investment strategies?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Contact us to learn more about our investment approach and current
              opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#8B0000] text-white px-8 py-3 text-sm uppercase tracking-wider"
            >
              Contact Our Team
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AlternativeInvestmentsPage;
