import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillDiamondFill } from "react-icons/bs";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: "url('./cloud-background.png')" }}
    >
      <Head>
        <title>Articles | JOINMUN 2023</title>
      </Head>
      <section className="container mx-auto px-4 pb-28 pt-32 sm:px-12 lg:px-16 lg:pt-20">
        <h2 className="relative mx-auto w-fit rounded-full bg-[#7c1717] px-16 py-3 text-center font-headline text-4xl shadow-[inset_0_3px_10px_rgba(0,0,0,0.7)] sm:text-5xl md:px-20 md:text-6xl  lg:px-24 lg:py-4 lg:text-7xl">
          <BsFillDiamondFill className="absolute bottom-0 left-6 top-0 my-auto h-auto w-4 sm:w-6 lg:left-8" />
          <BsFillDiamondFill className="absolute bottom-0 right-6 top-0 my-auto h-auto w-4 sm:w-6 lg:right-8" />
          Articles
        </h2>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute bottom-0.5 left-3 top-0 z-10 my-auto h-6 w-6 stroke-red"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className="my-6 w-full rounded-lg bg-yellow py-3 pl-12 pr-4 text-red shadow-md placeholder:text-red/75 md:pl-14 md:pr-6 md:text-lg"
            placeholder="Search for an article's title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
          />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {articlesList
            .filter((article) =>
              article.title.toLowerCase().includes(searchTerm)
            )
            .map((article) => (
              <Link
                target="_blank"
                key={article.articleLink}
                href={article.articleLink}
                className="flex cursor-pointer items-center space-x-2 rounded-lg bg-yellow p-2 shadow-md transition-all hover:scale-[1.03] sm:space-x-4 sm:p-3 md:p-4"
              >
                <div className="aspect-square h-auto w-[5rem] flex-shrink-0 overflow-hidden rounded-lg border-2 border-red bg-white sm:w-[8rem] md:w-[9rem] lg:w-[10rem]">
                  <Image
                    width={800}
                    height={800}
                    className="h-full w-full object-scale-down"
                    src={article.anchorThumbnail}
                    alt={`${article.newsAnchor} logo`}
                  />
                </div>
                <div className="flex flex-col justify-between space-y-6 p-1 text-red md:space-y-8">
                  <h3 className="font-headline text-lg font-bold sm:line-clamp-2 sm:text-xl lg:text-2xl">
                    {article.title}
                  </h3>
                  <div className="text-xs">
                    <p>{article.author}</p>
                    <p>{article.date}</p>
                    <p className="text-base font-semibold">
                      {article.newsAnchor}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Articles;

const articlesList = [
  {
    title: "Men Who Can’t ‘Grow a Pear’ Ends Up Losing Them",
    author: "Mulan Teresa",
    newsAnchor: "Fox News",
    anchorThumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/225px-Fox_News_Channel_logo.svg.png",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1H4DS23QXnuzt3sFQ4BFmEYjyU7FIL3SC/view",
  },
  {
    title: "A Glimpse Into Feminism and the Transwomen Community in Indonesia",
    author: "Ligia Aluf Sasongko",
    newsAnchor: "The Jakarta Post",
    anchorThumbnail:
      "https://th.bing.com/th/id/OIP.jViNbubmDUQWVYX_tkwSiwHaHa?pid=ImgDet&rs=1",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lOITyivphl_5Y-wC3zVMok6dBF36q6EU/view",
  },
  {
    title:
      "Belarus’ Orchestrated Border Crisis Targetted at the European Union",
    author: "Gerald Lionel Lomena",
    newsAnchor: "New York Times",
    anchorThumbnail:
      "https://media.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_200_200/0/1519856522068?e=2147483647&v=beta&t=b2uRYlOVLIMUO33DDoZNBkF0xR-sy42HuYbmj9-owbM",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1FgB2pkOGNTXrD4NMmR8ym1yPk1DhGhs0/view",
  },
  {
    title:
      "United Nations Security Council struggles with definitions and not solutions",
    author: "Hillary Tan",
    newsAnchor: "AFP",
    anchorThumbnail:
      "https://yt3.ggpht.com/-lIrUDwFpb8w/AAAAAAAAAAI/AAAAAAAAAAA/8gnxlz6lNvg/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lctxg2kT-GsTsx6o-ZYUvyG8g--_KFNx/view?usp=sharing",
  },
  {
    title: "Gender Identity Rights: A Clash of Values Religion or Human Right",
    author: "Siti Shinta Lestari",
    newsAnchor: "Al Jazeera",
    anchorThumbnail:
      "https://i.pinimg.com/originals/94/87/c4/9487c4c4299346380f6c91b96df0143c.png",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lHBuqZNv3ICCkIA0nxiJhFXsxfGPHM90/view?usp=sharing",
  },
  {
    title:
      "The Inclusion of Transwomen Resulting in a Paradox for Women's Rights",
    author: "Mulan Teresa",
    newsAnchor: "Fox News",
    anchorThumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/225px-Fox_News_Channel_logo.svg.png",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1leS9viUVtCqDBOn6H5f5rNaXYej1M17V/view?usp=sharing",
  },
  {
    title:
      "Transwomen should be designated as women: Here how Iraq and Indonesia speak out their arguments",
    author: "Lili Anggraini Kitin Silaban",
    newsAnchor: "Liputan6",
    anchorThumbnail:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/partner/242/34_242_1479280097_80235488_f.png",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lOmJsKkQ3IC6WXsv7lWJGJkBuk1QnX-6/view?usp=sharing",
  },
  {
    title:
      "The Food Catch-22. The Struggle to Balance Finite Resources with Infinite Wants and Needs.",
    author: "Gerald Lomena",
    newsAnchor: "New York Times",
    anchorThumbnail:
      "https://media.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_200_200/0/1519856522068?e=2147483647&v=beta&t=b2uRYlOVLIMUO33DDoZNBkF0xR-sy42HuYbmj9-owbM",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lhy-M9ggg30CgturIU4x19G2ToCeb0_-/view?usp=sharing",
  },
  {
    title:
      "The Importance of Food Diplomacy: The Role of National Forums in Achieving Integrated Systems",
    author: "Virly Ananda",
    newsAnchor: "Reuters",
    anchorThumbnail:
      "https://th.bing.com/th/id/OIP.Ze6Cvun9caz1P-or-x5-aQHaHn?pid=ImgDet&rs=1",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lOh4kYovV_1f1d50xKZEPHpPWo1TGOeC/view?usp=sharing",
  },
  {
    title:
      "Russia Seldomly Advocates to Restrict the Rights of Expression of the Transwomen Community",
    author: "Rheno Massimo",
    newsAnchor: "The Daily Telegraph",
    anchorThumbnail:
      "https://logos-download.com/wp-content/uploads/2016/05/The_Daily_Telegraph_logo.png",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lRCGPNvczImkVR_dxWPihwhsgMULPxMn/view?usp=sharing",
  },
  {
    title:
      "Is it possible to achieve international inclusivity for transwomen in the female community?",
    author: "Ligia Aluf Sasongko",
    newsAnchor: "The Jakarta Post",
    anchorThumbnail:
      "https://th.bing.com/th/id/OIP.jViNbubmDUQWVYX_tkwSiwHaHa?pid=ImgDet&rs=1",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lNusVDTatFWtKkfL-JKYq3zkcYTXght_/view?usp=sharing",
  },
  {
    title: "Carbon taxes and a dying industry",
    author: "Raden Satrya Bagus Pratama",
    newsAnchor: "The Japan Times",
    anchorThumbnail:
      "https://logos-download.com/wp-content/uploads/2021/01/Japan_Times_Logo.png",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1le5R5FVgz9ewJXTB6hsDw5dwK28GbNYp/view?usp=sharing",
  },
  {
    title:
      "Malaysia’s Strange Stance. Malaysia’s “complex” and “evolving” stance on trans rights sparks confusion",
    author: "Matin Hanafi Wirasena",
    newsAnchor: "The Korea Herald",
    anchorThumbnail:
      "https://yt3.ggpht.com/a/AATXAJy-Mww1NQPgXI-ILjYoPEJjZA3eHniou8VtNCyCQw=s900-c-k-c0xffffffff-no-rj-mo",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1ld_KDeIVXf8rVnjT8kg4r81p6y0umLOl/view?usp=sharing",
  },
  {
    title:
      "Breaking News: Venezuela's Dramatic Plea to Switzerland for Aid in the Battle Against Modern Slavery; Looming Impact on Ukraine",
    author: "Allene Florence Fadhilah",
    newsAnchor: "The Kyiv Post",
    anchorThumbnail:
      "https://www.occrp.org/images/stories/daily/Kyiv_Post_logo.svg.png",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lV0zxFwM9DYFGh3L8xDv7fTrkMbIw9qW/view?usp=sharing",
  },
  {
    title: "Corporatocracy May Still Need A Lot Of Help",
    author: "Mayra Salomo",
    newsAnchor: "The Straits Times",
    anchorThumbnail:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/bf/95/c9/bf95c9d1-c9a1-8443-7a2d-24b19813cf0a/source/512x512bb.jpg",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lnqp3Gf9Fp5CpehtbZ8o8HPQ4870wZry/view?usp=sharing",
  },
  {
    title: "The global issue with food",
    author: "Rania Lumongga Harahap",
    newsAnchor: "Times of India",
    anchorThumbnail:
      "https://th.bing.com/th/id/OIP.UAeTSy_3ThQtuRCy9pP5YgAAAA?pid=ImgDet&rs=1",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lo8sBShgs7548GEqVf_T8R7CxIfStHrT/view?usp=sharing",
  },
  {
    title: "China, with Sierra Leone, Spearheads Unity in Diversity",
    author: "Jeana Sophia Antolin Limbaco",
    newsAnchor: "Xinhua News Agency",
    anchorThumbnail:
      "https://th.bing.com/th/id/OIP.nhYiAmvNEIZTmIwn0_GS-QHaHa?pid=ImgDet&rs=1",
    date: "29 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lfqNQm_4ZZVq-VDwux10SFYgTRmQz4ss/view?usp=sharing",
  },
  {
    title:
      "UN’s Human Rights Council intensifies its efforts in fighting modern-day slavery",
    author: "Hillary Tan",
    newsAnchor: "AFP",
    anchorThumbnail:
      "https://yt3.ggpht.com/-lIrUDwFpb8w/AAAAAAAAAAI/AAAAAAAAAAA/8gnxlz6lNvg/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lqyAQZdit219MSSi0D6ABF965CT45qyo/view?usp=sharing",
  },
  {
    title: "HELP THE WORKERS OR HELP MNC",
    author: "Siti Shinta Lestari",
    newsAnchor: "Al Jazeera",
    anchorThumbnail:
      "https://i.pinimg.com/originals/94/87/c4/9487c4c4299346380f6c91b96df0143c.png",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1mfFHj-2b7XJorN1u53MZIdD4_nZIpd6X/view?usp=sharing",
  },
  {
    title: "The Unity of Nations in the Name of Pajamas?",
    author: "Mulan Teresa",
    newsAnchor: "Fox News",
    anchorThumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/225px-Fox_News_Channel_logo.svg.png",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lqQUQJlSzTXy_z_eilbRmQAlzVUl9kvH/view?usp=sharing",
  },
  {
    title:
      "Haven't Found a Middle Point: UN Women still debating the essentiality of transwomen",
    author: "Lili Anggraini Kitin Silaban",
    newsAnchor: "Liputan6",
    anchorThumbnail:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/partner/242/34_242_1479280097_80235488_f.png",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lzFEM20XbNKaaqBCa4i5LoqmZ1VF9Zli/view?usp=sharing",
  },
  {
    title: "The Belarus Border Crisis Showcases New Kinds of Warfare",
    author: "Gerald Lionel Lomena",
    newsAnchor: "New York Times",
    anchorThumbnail:
      "https://media.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_200_200/0/1519856522068?e=2147483647&v=beta&t=b2uRYlOVLIMUO33DDoZNBkF0xR-sy42HuYbmj9-owbM",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1lwhhUiVz3cD9E9cUL4K0sdsU31mTgnRB/view?usp=sharing",
  },
  {
    title:
      "An Unusual Hybrid War. The Puzzle lies in some countries concerning the new method of hybrid political warfare.",
    author: "Virly Ananda",
    newsAnchor: "Reuters",
    anchorThumbnail:
      "https://th.bing.com/th/id/OIP.Ze6Cvun9caz1P-or-x5-aQHaHn?pid=ImgDet&rs=1",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1m_JnQXMvjcgkGrR84Itj90cQj9IZlaae/view?usp=sharing",
  },
  {
    title:
      "Expectations Shattered: South Africa Heavily Criticized Russia on Solutions Offered with Utopian Views",
    author: "Rheno Massimo",
    newsAnchor: "The Daily Telegraph",
    anchorThumbnail:
      "https://logos-download.com/wp-content/uploads/2016/05/The_Daily_Telegraph_logo.png",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1m4p5wg1r3PXsXy9GmyYB-u4MdgUOgIzq/view?usp=sharing",
  },
  {
    title: "ICC’s Blackout Shines Light Upon New Discoveries",
    author: "Ligia Aluf Sasongko",
    newsAnchor: "The Jakarta Post",
    anchorThumbnail:
      "https://th.bing.com/th/id/OIP.jViNbubmDUQWVYX_tkwSiwHaHa?pid=ImgDet&rs=1",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1m2BZJT_EpAjkFoHhYhwiMRoqsaJkwMBL/view?usp=sharing",
  },
  {
    title: "Japan takes strong stance against modern slavery",
    author: "Raden Satrya Bagus Pratama",
    newsAnchor: "The Japan Times",
    anchorThumbnail:
      "https://logos-download.com/wp-content/uploads/2021/01/Japan_Times_Logo.png",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1mCIQrqWlCVFbiyZMVDlbxAmnpruDIoJg/view?usp=sharing",
  },
  {
    title:
      "UN FAO Council Meetings Grind to a Halt Amid Disputes Over Priorities",
    author: "Matin Hanafi Wirasena",
    newsAnchor: "The Korea Herald",
    anchorThumbnail:
      "https://yt3.ggpht.com/a/AATXAJy-Mww1NQPgXI-ILjYoPEJjZA3eHniou8VtNCyCQw=s900-c-k-c0xffffffff-no-rj-mo",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1m6kofFbaFO4Yh6Zs_JLkWVZp8pwDGtD0/view?usp=sharing",
  },
  {
    title:
      "Russia's Surprising Move: Rejects Global Efforts to Promote Sustainable Diets and Farming in Favour of a New Bloc.",
    author: "Allene Florence Fadhilah",
    newsAnchor: "The Kyiv Post",
    anchorThumbnail:
      "https://www.occrp.org/images/stories/daily/Kyiv_Post_logo.svg.png",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1mOm9ruU1eN3Sdrhd_0rIcW3XgFxIFsiM/view?usp=sharing",
  },
  {
    title:
      "Russia Warns UNSC of The Human Rights Discussion Focus in a EU-Belarus Border Crisis Meeting",
    author: "Mayra Salomo",
    newsAnchor: "The Straits Times",
    anchorThumbnail:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/bf/95/c9/bf95c9d1-c9a1-8443-7a2d-24b19813cf0a/source/512x512bb.jpg",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1mVk8CcOnOKOHv9wSqEi3RG21wuxNYZpb/view?usp=sharing",
  },
  {
    title: "Demilitarization in the Belarus-EU border",
    author: "Rania Lumongga Harahap",
    newsAnchor: "Times of India",
    anchorThumbnail:
      "https://th.bing.com/th/id/OIP.UAeTSy_3ThQtuRCy9pP5YgAAAA?pid=ImgDet&rs=1",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1mL-K99q4rYGdWOaDfMMI_jopqnR8If89/view?usp=sharing",
  },
  {
    title: "The ICC Faces Blackout, Halting Motions for AI Utilization",
    author: "Jeana Sophia Antolin Limbaco",
    newsAnchor: "Xinhua News Agency",
    anchorThumbnail:
      "https://th.bing.com/th/id/OIP.nhYiAmvNEIZTmIwn0_GS-QHaHa?pid=ImgDet&rs=1",
    date: "30 September 2023",
    articleLink:
      "https://drive.google.com/file/d/1mPw2s9af1KxXG1mvNWXPbagpBg9VAvnt/view?usp=sharing",
  },
];
