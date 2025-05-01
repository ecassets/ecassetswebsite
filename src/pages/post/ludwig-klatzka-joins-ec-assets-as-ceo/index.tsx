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
        <title>Ludwig Müller joins EC Assets as CEO | EC Assets</title>
        <meta
          name="description"
          content="EC Assets today announced that Ludwig Müller has joined the firm as CEO and head of EC's Private Equity (PE) division based in Luxembourg."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[500px] bg-gray-800 px-6">
            <div className="absolute inset-x-6 inset-y-6 overflow-hidden">
              <Image
                src="/images/post/ceo/hero.png"
                alt="Ludwig Müller joins EC Assets as CEO"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  <h1 className="text-5xl font-light mb-4">
                    Ludwig Müller joins EC Assets as CEO
                  </h1>
                  <p className="text-xl">NOVEMBER 3, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto py-12">
          <div
            className="prose max-w-none mx-auto px-4"
            style={{ maxWidth: "calc(100% - 5rem)" }}
          >
            <p className="text-xl mb-8">
              Ludwig&apos;s extensive experience in advising companies on
              digitalization and process automation will strengthen EC
              Assets&apos; established PE devision in executing cross-border M&A
              transactions. EC Assets has been expanding its PE devision since
              2015, and the addition of Ludwig to our talented team augments our
              abilities across the full spectrum of strategic M&A.
            </p>

            <p className="mb-8">
              One of our key strategic priorities is to expand significantly our
              presence in Europe and beyond with a focus across all tech
              sectors. Ludwig&apos;s arrival is another step toward that goal,
              and we expect to maintain that momentum and extend our reach.
            </p>

            <p className="mb-8">
              The expansion of our PE capability is a natural tie-in to the
              strength of our Real Estate business and our international deal
              capabilities, which are foundational pillars of our growth
              strategy. Ludwig is excited to join the team at a time when the
              private equity industry is set to continue breaking records on
              deal values and volume. Working thoroughly and forward-thinking,
              he is focused on delivering the right resources to best execute
              our transactions across all relevant markets.
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
