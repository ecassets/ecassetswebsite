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
          <div className="relative h-[500px] bg-gray-800">
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
        </section>

        <main className="container mx-auto px-4 py-12">
          <div className="prose max-w-none">
            <p className="text-xl mb-8">
              EC Assets announces the start of the development of a commercial
              property with approx. 61,500 sqm space right in the centre of the
              economical powerhouse of Germany.
            </p>

            <p className="mb-8">
              The prospectus and the development plans for this project are to
              be filed with the local authorities before the end of March.
            </p>

            <p className="mb-8">
              EC Assets intends to invest a total of €180 million into this
              project, with construction expected to begin in the third quarter
              of 2021.
            </p>

            <p className="mb-8">
              The period of development is expected to be completed by the end
              of 2023.
            </p>

            <p className="mb-8">
              With its expertise in commercial real estate, the team plans to
              create a modern, sustainable office and retail space that meets
              the highest environmental standards and caters to the needs of
              forward-thinking companies.
            </p>

            <div className="my-12 p-8 border-l-4 border-[#8B0000]">
              <p className="text-xl italic">
                &ldquo;The German commercial real estate market offers extremely
                attractive opportunities. This development represents our
                commitment to creating sustainable, high-quality spaces in prime
                locations across Europe.&rdquo;
              </p>
              <p className="mt-4 font-medium">
                - Ludwig Klatzka, CEO of EC Assets
              </p>
            </div>

            <p className="mb-8">
              The project is expected to achieve LEED Platinum certification,
              featuring cutting-edge energy efficiency systems, green spaces,
              and amenities designed to enhance tenant wellbeing and
              productivity.
            </p>

            <p className="mb-8">
              EC Assets will be working with renowned architectural firm Meier &
              Partners on this development, creating a landmark building that
              will contribute to the urban landscape.
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
