import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Investments = () => {
  return (
    <>
      <Head>
        <title>Investments | EC Assets</title>
        <meta
          name="description"
          content="Our investments focus on real estate and private equity with a long-term value creation strategy."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
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

        {/* Real Estate Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-light mb-8">Real Estate</h2>
              <p className="text-gray-600 mb-6">
                Since we started investing in real estate in 1994, the growth of
                our business across both products and geographies has expanded
                our ability to create long-term value and provide practical and
                diverse solutions to our partners.
              </p>
              <p className="text-gray-600 mb-6">
                Our Core+ strategy features prime real estate with a long
                investment horizon and moderate leverage, where we can unlock
                additional value through enhanced asset management.
              </p>
              <p className="text-gray-600 mb-12">
                With clear focus on commercial, industrial and residential
                assets in global gateway cities, we only invest in high-quality
                assets, where we see outsized growth potential driven by global
                economic and demographic trends.
              </p>
            </div>
          </div>
        </section>

        {/* Commercial Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/photos/investments/commercial.png"
                  alt="Modern commercial office space"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-5xl font-light mb-8">Commercial</h2>
                <p className="text-gray-600 mb-6">
                  We provide high-quality facilities and infrastructure to
                  ensure a comfortable and enriching environment for our largely
                  multinational tenants.
                </p>
                <p className="text-gray-600">
                  In top-tier educational and research locations, we built
                  purpose-built facilities to support mission-critical research
                  by leading scientists and institutions and provides companies
                  with campuses that help them attract and retain top talent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Industrial Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-light mb-8">Industrial</h2>
                <p className="text-gray-600">
                  We have capitalized on continued e‑commerce tailwinds and
                  strong logistics fundamentals in Europe. Our portfolio is
                  comprised of high-quality assets located in major logistics
                  hubs in countries such as Germany, France, the U.K. and Spain.
                  The portfolio benefits from robust tenant demand as continued
                  e-commerce growth has driven an increased need for
                  well‑located warehouses across Europe.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/photos/investments/industrial.jpg"
                  alt="Industrial warehouse facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Residential Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/photos/investments/residential.jpg"
                  alt="Luxury residential apartment"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-5xl font-light mb-8">Residential</h2>
                <p className="text-gray-600">
                  We are investing in high-quality apartment communities and
                  multifamily housing in the most sought-after areas of top tier
                  cities across Europe. In collaboration with local city
                  councils, we preserved historic buildings for over 20 years
                  through our acquisitions. We renovate our portfolio properties
                  to the highest sustainability standards including rooftop
                  solar achieving regularily LEED Platinum certification.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Private Equity Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-light mb-8">Private Equity</h2>
              <p className="text-gray-600 mb-6">
                We play a vital role in helping companies with talented
                management teams realize their growth potential. We unlock value
                by identifying great companies with untapped potential and
                enhancing their performance.
              </p>
              <p className="text-gray-600 mb-6">
                Our investment approach is based on a disciplined due diligence
                process that measures risk while identifying the catalysts for
                increased value. When we partner with a business, we focus on
                building it to last.
              </p>
              <p className="text-gray-600 mb-12">
                We strive to create value by investing in great businesses where
                our capital, strategic insight, global relationships and
                operational support can drive transformation.
              </p>
            </div>
          </div>
        </section>

        {/* FinTech Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-light mb-8">FinTech</h2>
                <p className="text-gray-600">
                  We partner with providers of financial analytics tools and its
                  infrastructure, providing leading data and insights, trading
                  and technology platforms that connect consumers as well as
                  communities of trading, investment, financial and corporate
                  professionals. We invest in insurance and financial
                  technology, and related sub-sectors such as financial advisors
                  and distribution, payments and securities services.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/photos/investments/Blue.jpg"
                  alt="FinTech visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* HealthTech Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/photos/investments/Purple.jpg"
                  alt="HealthTech visualization"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-5xl font-light mb-8">HealthTech</h2>
                <p className="text-gray-600">
                  We invest in businesses with innovative products or services
                  and high-quality management teams providing data and
                  analytics-driven solutions to improve clinical, financial and
                  patient engagement outcomes. We target opportunities across
                  various health care sub-sectors, including biopharmaceuticals,
                  medical devices, diagnostics ⁄ life science tools, providers,
                  HCIT ⁄ informatics, and other services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* WorkTech Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-light mb-8">WorkTech</h2>
                <p className="text-gray-600">
                  We look for businesses positioned for substantial growth that
                  deliver differentiated value propositions to their clients by
                  providing solutions for the virtualization of the processes of
                  entire organizations and enhancing digitalization further.
                  These enablers are leaders in workflow automation and
                  enterprise content management. They create game-changing
                  applications in matter and IP mangement.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/photos/investments/Grey.jpg"
                  alt="WorkTech visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-6">
              Investing is our business.
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Let us tell you more about our assets and investments. Why not
              achieving more together?
            </p>
            <p className="text-xl text-gray-600 mb-10">
              Please contact us today!
            </p>
            <Link
              href="/contact"
              className="inline-block border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors px-10 py-3 text-sm uppercase tracking-wider"
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

export default Investments;
