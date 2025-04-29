import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  return (
    <>
      <Head>
        <title>Team | EC Assets</title>
        <meta
          name="description"
          content="Meet our world-class team of professionals at EC Assets."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[400px]">
            <Image
              src="/photos/team/teamhero.jpg"
              alt="Team meeting around a table"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl font-light text-white">Our Team</h1>
            </div>
          </div>
        </section>

        {/* Team Intro */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-light mb-6">Our people</h2>
            <h3 className="text-4xl font-light mb-10 max-w-2xl mx-auto">
              Our world-class team
            </h3>
          </div>
        </section>

        {/* Team Members */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Jason Keogh */}
              <div className="border border-gray-300">
                <div className="relative h-[400px]">
                  <Image
                    src="/photos/team/Jason.png"
                    alt="Jason Keogh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-center text-gray-500 uppercase tracking-wider mb-2">
                    CEO UK
                  </h3>
                  <h2 className="text-center text-3xl font-light mb-6">
                    Jason Keogh
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Jason is CEO of our operations in the United Kingdom and
                    within the board responsible for strategy, finanaces and
                    product.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Extremely entrepreneurial minded, he boasts more than 30
                    years of experience in the global financial markets.
                  </p>
                  <p className="text-gray-600">
                    A passionate advocate of digitalization, he works closely
                    with our trading desks and oversees the regulatory processes
                    of our funds.
                  </p>
                </div>
              </div>

              {/* Christian Frealdsson */}
              <div className="border border-gray-300">
                <div className="relative h-[400px]">
                  <Image
                    src="/photos/team/Christian.jpg"
                    alt="Christian Frealdsson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-center text-gray-500 uppercase tracking-wider mb-2">
                    CEO UAE
                  </h3>
                  <h2 className="text-center text-3xl font-light mb-6">
                    Christian Frealdsson
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Chris is CEO at EC Assets UAE. Within the Management Board,
                    he represents the operational perspective and dialog.
                  </p>
                  <p className="text-gray-600 mb-4">
                    He has long been part of our senior management team, most
                    recently as Senior Vice President Growth.
                  </p>
                  <p className="text-gray-600">
                    Highly experienced in the management consulting sector, he
                    is now working since several years in the consulting sector
                    in United Arabic Emirates and the broader region.
                  </p>
                </div>
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
            <p className="text-xl text-gray-600 mb-4">
              Let us tell you more about our assets and investments.
            </p>
            <p className="text-xl text-gray-600 mb-4">
              Why not achieving more together?
            </p>
            <p className="text-xl text-gray-600 mb-10">
              Please contact us today!
            </p>
            <Link
              href="/contact"
              className="inline-block border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors px-10 py-3 text-sm uppercase tracking-wider"
            >
              Contact us
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Team;
