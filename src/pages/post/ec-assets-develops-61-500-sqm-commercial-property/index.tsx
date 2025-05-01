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
          EC Assets develops 61,500 sqm commercial property | EC Assets
        </title>
        <meta
          name="description"
          content="EC Assets announces the start of the development of a commercial property with approx. 61,500 sqm space right in the centre of the economical powerhouse of Germany."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[500px] bg-gray-800 px-6">
            <div className="absolute inset-x-6 inset-y-6 overflow-hidden">
              <Image
                src="/images/post/property/hero.png"
                alt="EC Assets develops 61,500 sqm commercial property"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  <h1 className="text-5xl font-light mb-4">
                    EC Assets develops 61,500 sqm commercial property
                  </h1>
                  <p className="text-xl">DECEMBER 22, 2020</p>
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
              EC Assets has begun the development of a commercial property on
              the important German highway A8. Right next to its own exit, it is
              stratgically located on this very important connection to the
              German economical powerhouse and its mayor hubs.
            </p>

            <p className="mb-8">
              It is planned to build about 61.500 sqm. of production and
              commercial space. The planned completion of the five buildings is
              scheduled for end-2022.
            </p>

            <p className="mb-8">
              The properties are leased out on a long-term basis and will remain
              in the industrial portfolio of EC Assets. In charge for the
              project is the Munich team of EC Assets.
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
