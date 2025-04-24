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
        <title>EC Assets opened new Luxembourg office | EC Assets</title>
        <meta
          name="description"
          content="EC Assets pleased to opened an office in the heart of this European financial centre. Fully established in Luxembourg, EC Assets will manage its Private Equity & Capital Markets devision from here."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[500px] bg-gray-800">
            <Image
              src="/images/post/office/hero.png"
              alt="EC Assets opened new Luxembourg office"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="text-5xl font-light mb-4">
                  EC Assets opened new Luxembourg office
                </h1>
                <p className="text-xl">NOVEMBER 30, 2020</p>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <div className="prose max-w-none">
            <p className="text-xl mb-8">
              EC Assets pleased to opened an office in the heart of this
              European financial centre. Fully established in Luxembourg, EC
              Assets will manage its Private Equity & Capital Markets devision
              from here.
            </p>

            <p className="mb-8">
              From this new office in the heart of the business district of the
              financial center of Luxembourg, all European investments of ec
              assets will be managed in the future. Key tasks of this location
              will include the planning and issuance of further bonds as well as
              the execution of IPOs of portfolio companies.
            </p>

            <p className="mb-8">
              In particular, the Private Equity division of our company and the
              related capital market transactions will be managed from
              Luxembourg in the future.
            </p>

            <p className="mb-8">
              Direct access to this important European hub for securitizations
              and structured financial instruments, as well as to a recognized
              platform for the execution of important international IPOs, were
              high priorities in our decision for this location.
            </p>

            <p className="mb-8">
              Ludwig Klatzka will head the specializied team.
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
