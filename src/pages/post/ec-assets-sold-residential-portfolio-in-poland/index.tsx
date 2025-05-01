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
          EC Assets sold residential portfolio in Poland | EC Assets
        </title>
        <meta
          name="description"
          content="EC Assets has sold parts of its residential portfolio in the Polish capital Warsaw as part of an asset deal."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[500px] bg-gray-800 px-6">
            <div className="absolute inset-x-6 inset-y-6 overflow-hidden">
              <Image
                src="/images/post/poland/hero.png"
                alt="EC Assets sold residential portfolio in Poland"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  <h1 className="text-5xl font-light mb-4">
                    EC Assets sold residential portfolio in Poland
                  </h1>
                  <p className="text-xl">SEPTEMBER 28, 2020</p>
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
              The properties sold in today&apos;s transaction are located in
              highly sought-after locations in the Polish capital Warsaw. Built
              in the two city districts of Wilanów and Mokotów amidst their
              large green areas and many embassies, the buildings were acquired
              and extensively refurbished over the past ten years.
            </p>

            <p className="mb-8">
              After completion of the transaction, the real estate portfolio
              will be transferred to an investor group from Austria. The family
              office of two industrialist families is a well-known real estate
              buyer in Poland, already being active in various locations there.
            </p>

            <p className="mb-8">
              With the sale now undertaken, EC Assets can benefit from the
              continuing good economic indicators in Poland and the very
              satisfactory performance of the Polish real estate market.
            </p>

            <p className="mb-8">
              As part of the further expansion of its real estate portfolio in
              Poland, EC Assets has decided to focus its activities more on the
              acquisition and development of industrial and logistics assets.
              The company is currently in advanced discussions regarding the
              acquisition of four newly constructed logistics sites of an
              international logistics group.
            </p>

            <p className="mb-8">
              The EC Assets team in Munich is managing the deal.
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
