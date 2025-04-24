import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  imagePath: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "EC Assets to list $250 million Tech SPAC in New York",
    description:
      "EC Assets wants to list a SPAC focused on European tech companies on NASDAQ. The strategic goal is to complete a billion-dollar acquisition within 18 months and form a European tech champion.",
    date: "FEBRUARY 27, 2021",
    slug: "ec-assets-to-list-tech-spac-in-new-york",
    imagePath: "/images/post/spac/hero.png",
  },
  {
    id: "2",
    title: "EC Assets develops 61.500 sqm commercial property",
    description:
      "EC Assets announces the start of the development of a commercial property with approx. 61.500 spm. space right in the centre of the economical powerhouse of Germany.",
    date: "DECEMBER 22, 2020",
    slug: "ec-assets-develops-61-500-sqm-commercial-property",
    imagePath: "/images/post/property/hero.png",
  },
  {
    id: "3",
    title: "A sector EC Assets invests in: WorkTech",
    description:
      "This today's FT article couldn't describe it any better - the digitization and automation of all corporate processes not only makes the daily work of a CFO easier. Rather, it is a development that can no longer be stopped.",
    date: "DECEMBER 12, 2020",
    slug: "a-sector-ec-assets-invests-in-worktech",
    imagePath: "/images/post/worktech/hero.png",
  },
  {
    id: "4",
    title: "EC Assets invests in 170.000 qm German Industrial Park",
    description:
      "EC Assets is in final-stage negotiations to invest in yet another € 150 million industrial project in the South of Germany",
    date: "DECEMBER 6, 2020",
    slug: "ec-assets-invests-in-170-000-qm-german-industrial-park",
    imagePath: "/images/post/industrial/hero.png",
  },
  {
    id: "5",
    title: "EC Assets opened new Luxembourg office",
    description:
      "EC Assets pleased to opened an office in the heart of this European financial centre. Fully established in Luxembourg, EC Assets will manage its Private Equity & Capital Markets devision from here.",
    date: "NOVEMBER 30, 2020",
    slug: "ec-assets-opened-new-luxembourg-office",
    imagePath: "/images/post/office/hero.png",
  },
  {
    id: "6",
    title: "EC Assets expands Sport Sponsoring",
    description:
      "EC Assets expands its sports sponsoring further and supports German tennis youth at the Baden performance base in Plankstadt",
    date: "NOVEMBER 17, 2020",
    slug: "ec-assets-expands-sport-sponsoring",
    imagePath: "/images/post/sport/hero.png",
  },
  {
    id: "7",
    title: "Ludwig Klatzka joins EC Assets as CEO",
    description:
      "EC Assets today announced that Ludwig Klatzka has joined the firm as CEO and head of EC's Private Equity (PE) division based in Luxembourg.",
    date: "NOVEMBER 3, 2020",
    slug: "ludwig-klatzka-joins-ec-assets-as-ceo",
    imagePath: "/images/post/ceo/hero.png",
  },
  {
    id: "8",
    title: "EC Assets sold residential portfolio in Poland",
    description:
      "EC Assets has sold parts of its residential portfolio in the Polish capital Warsaw as part of an asset deal.",
    date: "SEPTEMBER 28, 2020",
    slug: "ec-assets-sold-residential-portfolio-in-poland",
    imagePath: "/images/post/poland/hero.png",
  },
];

const NewsCard: React.FC<{ news: NewsItem }> = ({ news }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative w-full h-[240px] mb-6">
        <Image
          src={news.imagePath}
          alt={news.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-gray-600 mb-2">{news.date}</p>
      <h2 className="text-2xl font-light mb-3">{news.title}</h2>
      <p className="text-gray-600 mb-6">{news.description}</p>
      <div className="mt-auto">
        <Link
          href={`/post/${news.slug}`}
          className="inline-block bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 text-sm uppercase tracking-wider transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <>
      <Head>
        <title>News | EC Assets</title>
        <meta
          name="description"
          content="Latest news and updates from EC Assets, including information about our investments, partnerships, and corporate developments."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative h-[400px] bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl font-light text-white">News</h1>
            </div>
          </div>
        </section>

        {/* News Listing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
              {newsItems.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
        </section>

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

export default News;
