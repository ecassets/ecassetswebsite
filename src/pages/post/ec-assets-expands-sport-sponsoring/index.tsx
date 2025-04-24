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
        <title>EC Assets expands Sport Sponsoring | EC Assets</title>
        <meta
          name="description"
          content="EC Assets expands its sports sponsoring further and supports German tennis youth at the Baden performance base in Plankstadt."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[500px] bg-gray-800">
            <Image
              src="/images/post/sport/hero.png"
              alt="EC Assets expands Sport Sponsoring"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="text-5xl font-light mb-4">
                  EC Assets expands Sport Sponsoring
                </h1>
                <p className="text-xl">NOVEMBER 17, 2020</p>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <div className="prose max-w-none">
            <p className="text-xl mb-8">
              EC Assets expands its sports sponsoring further and supports
              German tennis youth at the Baden performance base in Plankstadt.
            </p>

            <p className="text-xl mb-8">
              We at Team EC Assets are enthusiastic tennis fans and have been
              following the successful work of the Felix Dobler Tennis Academy
              for many years.
            </p>

            <p className="mb-8">
              Not only the high personal commitment of Felix and his team
              impresses us again and again. Also, his professional approach to
              train the tennis youth holistically and to promote talents at an
              early stage are extraordinary.
            </p>

            <p className="mb-8">
              We therefore entered into talks with him back in the spring 2020
              and offered our willingness to support his youth work.
            </p>

            <p className="mb-8">
              We stuck to the sponsoring activities agreed upon at that time for
              the start of the outdoor season despite - or perhaps because of -
              the lock-down and the Corona crisis.
            </p>

            <p className="mb-8">
              Children and young people were often unable to go out in public as
              usual, swimming pools remained closed and vacation trips were
              cancelled. Despite the strictest hygiene regulations, the Tennis
              Academy was open to its youth players and provided a change from
              the daily Corona routine with its work and sports.
            </p>

            <p className="mb-8">
              Now that we have read an newspaper article on December 3, 2020
              about Felix and his family, we are all the more impressed by him
              and his athletic career.
            </p>

            <p className="mb-8">
              We have therefore agreed with the Felix Dobler Tennis-Academy
              today to expand our cooperation and will once again significantly
              extend our commitment as a sponsor.
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
