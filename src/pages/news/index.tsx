import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// Use classical styles
import styles from "../../styles/classical.module.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

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
    <div className={`${styles.newsCard} hover:border-[#8B1E20] transition-all`}>
      <div className="relative w-full h-[240px] mb-6">
        <Image
          src={news.imagePath}
          alt={news.title}
          fill
          className="object-cover"
        />
      </div>
      <h3
        className={`${styles.newsCardTitle} hover:text-[#8B1E20] transition-colors`}
      >
        {news.title}
      </h3>
      <hr className={styles.newsCardDivider} />
      <p className={styles.newsCardContent}>{news.description}</p>
      <div className="mt-6 text-left">
        <Link
          href={`/post/${news.slug}`}
          className="inline-block bg-[#403e3e] text-white px-5 py-2 text-base uppercase tracking-wider transition-all hover:bg-white hover:text-[#8B1E20] hover:border hover:border-black"
        >
          Read more
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.pageContainer}>
        <Navigation />

        {/* Hero Section - Standardized across pages */}
        <section className="relative w-[calc(100%+80px)] left-[-40px] overflow-hidden -mt-[1px]">
          <div className="mx-[40px] relative h-[360px]">
            <div className="absolute inset-x-0 top-[5%] bottom-[5%] overflow-hidden border border-gray-200">
              <Image
                src="/photos/investments/heroinvestments.jpg"
                alt="News"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-6xl font-light text-white">News</h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.newsSection}>
          <div className={styles.newsHeading}>NEWS</div>
          <h2 className={styles.newsTitle}>Company News</h2>
          <div className={styles.newsGrid}>
            {newsItems.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Investing is our business.</h2>
          <p className={styles.contactText}>
            Let us tell you more about our assets and investments.
            <br />
            Why not achieving more together?
            <br />
            Please contact us today!
          </p>
          <Link href="/contact" className={styles.investmentButton}>
            Contact us
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default News;
