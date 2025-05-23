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
        <title>A sector EC Assets invests in: WorkTech | EC Assets</title>
        <meta
          name="description"
          content="Digital transformation raises finance chiefs' stock as CFOs play an ever-greater role in company strategy as legal more firms engage with technology."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[500px] bg-gray-800 px-6">
            <div className="absolute inset-x-6 inset-y-6 overflow-hidden">
              <Image
                src="/images/post/worktech/hero.png"
                alt="A sector EC Assets invests in: WorkTech"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  <h1 className="text-5xl font-light mb-4">
                    A sector EC Assets invests in: WorkTech
                  </h1>
                  <p className="text-xl">DECEMBER 12, 2020</p>
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
            <h2 className="text-3xl font-light mb-4">
              Digital transformation raises finance chiefs&apos; stock
            </h2>
            <p className="text-xl mb-8">
              CFOs play an ever-greater role in company strategy as legal more
              firms engage with technology
            </p>

            <p className="mb-8">
              Many finance heads at top legal practices have become careerists
              in the industry, tending to stick to either a single or series of
              law firms.
            </p>

            <p className="mb-8">
              For some chief financial officers, the allure of being the only
              &ldquo;numbers&rdquo; person in a partnership of lawyers can
              provide a sense of status; for others, having shareholders wander
              the corridors outside their offices makes the job intensely
              personal.
            </p>

            <p className="mb-8">
              In the past, the role was not comparable in complexity to that of
              a CFO of a publicly traded company &mdash; but this is beginning
              to change. Many big commercial law firms are now billion-dollar
              businesses with complex financial challenges.
            </p>

            <p className="mb-8">
              Jay McAveeney, chief financial officer at Reed Smith, a global law
              firm, says: &ldquo;We may not have inventory like a manufacturing
              business, but we have borrowing, capital exposures, currency
              exposures.&rdquo; For him, the complexity and enjoyment of the
              role comes from the partners who are both co-workers and owners.
            </p>

            <div className="my-12 p-8 border-l-4 border-[#8B0000]">
              <p className="text-xl italic">
                We did a capital raise in the middle of the pandemic to keep the
                business resilient. It is an essential role of a CFO but often
                underplayed
              </p>
              <p className="mt-4 font-medium">
                - Jason Haines, Allen &amp; Overy
              </p>
            </div>

            <p className="mb-8">
              Mr McAveeney has served as both CFO and chief operating officer at
              various law firms including Baker & McKenzie and Kirkland & Ellis,
              two of the largest firms in the world by headcount and revenues.
              Some law firm finance chiefs have also served as the COO, but this
              is becoming less common as the top roles become more defined.
            </p>

            <p className="mb-8">
              The slowness of many partnerships in recognizing business
              professionals and support functions for the value they deliver has
              contributed to the industry being slow to adopt digital
              technology.
            </p>

            <p className="mb-8">
              &ldquo;Law firms have not completely digitally transformed
              themselves. Digital is a small part of the business today, but it
              is changing,&rdquo; says Jason Haines, chief finance officer at
              Allen &amp; Overy, the global law firm. Mr Haines, who has also
              served as A&amp;O&apos;s chief information officer, feels the
              pandemic has reinforced the importance of the finance chief at law
              firms.
            </p>

            <p className="mb-8">
              &ldquo;Cash flow is essential. We did a capital raise in the
              middle of the pandemic and put in cash measures to keep the
              business resilient. It is an essential role of a CFO but often
              underplayed,&rdquo; he says. He plays a role in A&amp;O&apos;s
              digital strategy and focuses on the benefit the firm can realise
              from its technology investments. With an IT background, Mr Haines
              sees himself as a poacher turned gamekeeper. He is wary of the
              term &ldquo;digital transformation&rdquo; as he feels it is
              overused and can mean many things to different people. However, he
              says, &ldquo;if law firms don&apos;t do this [go digital], they
              will find it hard to keep up&rdquo;.
            </p>

            <p className="mb-8">
              A&amp;O was one of the first big firms to invest in a digital
              legal information business, Aosphere, which has been running since
              2001. Via Fuse, A&amp;O&apos;s start-up incubator, the focus of
              the firm&apos;s digital investment is now on legal technology.
            </p>

            <p className="mb-8">
              Linklaters, another magic circle firm, also invests in legal tech
              start-ups. Finance chief Peter Hickman sits on the investment
              committee, which closely monitors two of their ventures: Nivaura,
              which focuses on automating processes in capital markets, and
              another start-up established with the International Securities and
              Derivatives Association. But this work accounts for only a small
              part of his role. &ldquo;The core of the job remains focusing on
              the firm&apos;s finances and engaging with the partners,&rdquo;
              says Mr Hickman.
            </p>

            <p className="mb-8">
              He is an advocate for greater efficiency and says partners are
              still too involved in the billing process. The shift to fixed fees
              may streamline this, but partners often like to have oversight.
              &ldquo;If I had a magic wand, I would minimise the role of
              partners in billing and embed more financial advisory support in
              the practices,&rdquo; Mr Hickman says.
            </p>

            <p className="mb-8">
              Linklaters and others have moved to electronic billing. But Mayank
              Patel, finance director at Mishcon de Reya, a midsized UK-based
              law firm, says: &ldquo;Until lockdown, we were a manual billing
              firm, on paper. Now we have moved to an electronic process via
              email.&rdquo; For others, going digital is transforming CFOs&apos;
              ability to advise the partnership. Reed Smith created a Financial
              Intelligence Unit in 2019 to provide partners with real-time
              information via interactive dashboards. It became an essential
              tool in helping the firm respond to the pandemic, and which Mr
              McAveeney says had a &ldquo;snowball&rdquo; effect in getting the
              firm to embrace data.
            </p>

            <p className="mb-8">
              &ldquo;Our leadership team can now ask complex questions and we
              can reply about what we know based on experiences across the firm
              to help inform their decisions,&rdquo; he adds.
            </p>

            <p className="mb-8">
              The digital approach is also creating opportunities for the
              firm&apos;s practice areas to enhance their legal expertise and
              success for clients. &ldquo;We will have the data analytics
              expertise to work with our lawyers and to help assess the
              probability of successful outcomes in our representations,&rdquo;
              says Mr McAveeney.
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

            <div className="mt-12 p-4 bg-gray-100">
              <p className="text-sm text-gray-500">
                Financial Times / 15.12.2020 / https://on.ft.com/3oYE20p
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
