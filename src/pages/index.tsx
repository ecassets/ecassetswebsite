import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to EC Assets</title>
        <meta
          name="description"
          content="EC Assets - Choose between Classical Investments and Alternative Investments"
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center">
          <div className="container mx-auto px-5 max-w-5xl">
            <div className="bg-[#8B0000] px-9 py-14 mb-20 max-w-full mx-auto">
              <h1 
                className="text-[68px] leading-[80px] font-semibold text-center text-white"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                ec assets
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
              {/* Classical Investments */}
              <Link
                href="/classical"
                className="border border-gray-200 p-14 hover:border-[#8B0000] transition-colors"
              >
                <h2 className="text-3xl font-light mb-5">
                  Classical Investments
                </h2>
                <p className="text-gray-600 mb-7">
                  Real estate, private equity, and traditional investment
                  opportunities.
                </p>
                <div className="flex justify-end">
                  <span className="inline-flex items-center text-[#8B0000]">
                    Explore <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>

              {/* Alternative Investments */}
              <Link
                href="/alternative"
                className="border border-gray-200 p-14 hover:border-[#8B0000] transition-colors"
              >
                <h2 className="text-3xl font-light mb-5">
                  Alternative Investments
                </h2>
                <p className="text-gray-600 mb-7">
                  Innovative investment strategies in tech, venture capital, and
                  emerging markets.
                </p>
                <div className="flex justify-end">
                  <span className="inline-flex items-center text-[#8B0000]">
                    Explore <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </main>

        {/* Simple Footer */}
        <footer className="py-9 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} EC Assets. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
