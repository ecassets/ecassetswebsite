import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Post = () => {
  return (
    <>
      <Head>
        <title>
          EC Assets to list $250 million Tech SPAC in New York | EC Assets
        </title>
        <meta
          name="description"
          content="EC Assets wants to list a SPAC focused on European tech companies on NASDAQ. The strategic goal is to complete a billion-dollar acquisition within 18 months."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[500px] bg-gray-800">
            <Image
              src="/images/post/spac/hero.png"
              alt="EC Assets to list $250 million Tech SPAC in New York"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="text-5xl font-light mb-4">
                  EC Assets to list $250 million Tech SPAC in New York
                </h1>
                <p className="text-xl">FEBRUARY 27, 2021</p>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <div className="prose max-w-none">
            <p className="text-xl mb-8">
              The Luxembourg-based team at EC Assets, led by Ludwig Klatzka, is
              currently preparing to list a SPAC in New York.
            </p>

            <p className="mb-8">
              The prospectus and the listing application for this are to be
              filed with the SEC in New York before the end of March.
            </p>

            <p className="mb-8">
              EC Assets intends to issue a total of 25 million units exclusively
              to institutional investors at a price of $10.00 per unit,
              representing a placement volume of $250 million.
            </p>

            <p className="mb-8">
              The period of this placement is expected to be completed by the
              end of April 2021.
            </p>

            <p className="mb-8">
              With its expertise in place, the team intends to acquire a
              late-stage, IPO-ready tech company with primary operations in
              Europe, the United Kingdom, and the United States.
            </p>

            <p className="mb-8">
              The investment focus is on SaaS (Software as a Service), WorkTech
              and FinTech. The acquisition will happen within a maximum of two
              years, and a billion-dollar deal is said to be conceivable.
            </p>

            <p className="mb-8">
              The target company is expected to have an equity value of between
              $900 million and $4 billion, to be paid in new shares and/or cash,
              including from the proceeds of a possible future private placement
              in connection with the business combination.
            </p>

            <div className="my-12 p-8 border-l-4 border-[#8B0000]">
              <p className="text-xl italic">
                &ldquo;The European technology sector offers extremely
                attractive opportunities. Compared to other sectors, investments
                in the technology sector have historically delivered excellent
                returns. We believe EC Assets SPAC is an excellent partner for a
                late-stage tech company looking to continue its growth story as
                a publicly traded company. Through our investment, a new
                European tech champion will emerge.&rdquo;
              </p>
              <p className="mt-4 font-medium">
                - Ludwig Klatzka, CEO of EC Assets
              </p>
            </div>

            <p className="mb-8">
              The SPAC is named EC Assets Acquisition Corporation and will be
              traded on the NASDAQ stock exchange in New York under the ticker
              symbol ECAS.
            </p>

            <p className="mb-8">
              In charge for the project is the Luxembourg team of EC Assets with
              Ludwig Klatzka as CEO.
            </p>

            <div className="my-8">
              <p className="text-sm text-gray-500">
                To contact the author of this story with feedback or news,
                please email John Smithfield at
                <a
                  href="mailto:office@ecassets.com"
                  className="text-[#8B0000] hover:underline"
                >
                  {" "}
                  office@ecassets.com
                </a>
              </p>
            </div>
          </div>
        </main>

        {/* CTA Section */}
        <section className="py-20 bg-gray-100">
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
              Contact us
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Post;
