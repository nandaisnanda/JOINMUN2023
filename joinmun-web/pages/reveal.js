import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import tuguKiri from "../public/reveal/tugu-kiri.svg";
import tuguKanan from "../public/reveal/tugu-kanan.svg";

const Reveal = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden py-20"
      style={{ backgroundImage: "url('./cloud-background.png')" }}
    >
      <Head>
        <title>Reveal | JOINMUN 2023</title>
      </Head>
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto max-w-fit px-4 pt-10 font-headline sm:px-8"
      >
        <h2 className="mx-auto mb-3 max-w-fit bg-green px-4 py-2 text-center text-3xl sm:mb-6 sm:px-8 sm:py-4 sm:text-6xl lg:text-7xl">
          DATE REVEAL
        </h2>
        <div className="mb-6 bg-yellow px-[15vw] py-2 text-center text-2xl sm:mb-10 sm:text-5xl md:px-48 lg:text-6xl">
          <p className="text-red">28 Sept - 1 Oct</p>
        </div>
        <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2">
          {revealData.map((data) => (
            <motion.div
              key={data.date}
              variants={cardVariants}
              className="h-80 overflow-y-scroll rounded-lg bg-yellow p-3 sm:p-4"
            >
              <div className="bg-brown p-1 text-center text-2xl sm:p-3 sm:text-3xl lg:text-4xl">
                {data.date}
              </div>
              <div className="p-3">
                {data.timeline?.map((item) => (
                  <>
                    <div
                      className="flex items-center justify-between gap-4 font-body text-red"
                      key={item.time}
                    >
                      <p className="whitespace-nowrap">{item.time}</p>
                      <p className="text-right">{item.agenda}</p>
                    </div>
                    <hr className="my-2 border-t-2 border-red" />
                  </>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tugu */}
      <motion.div
        className="absolute inset-y-0 top-0 my-auto h-4/5 w-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          animate={{ x: "calc(-180% + 60vw)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full"
        >
          <Image className="h-full w-auto" src={tuguKiri} alt="" />
        </motion.div>
        <motion.div
          animate={{ x: "calc(180% - 60vw)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute right-0 top-0 h-full"
        >
          <Image className="h-full w-auto" src={tuguKanan} alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Reveal;

const revealData = [
  {
    date: "28 Sept",
    timeline: [
      {
        time: "15.15 – 15.30",
        agenda: "Open gate",
      },
      {
        time: "15.30 – 16.00",
        agenda: "Opening",
      },
      {
        time: "16.00 – 16.10",
        agenda: "Opening performance",
      },
      {
        time: "16.10 – 16.40",
        agenda: "Speaker session 1",
      },
      {
        time: "16.40 – 17.10",
        agenda: "Speaker session 2",
      },
      {
        time: "17.10 – 17.30",
        agenda: "Q&A session",
      },
      {
        time: "17.30 – 17.50",
        agenda: "Prayer break",
      },
      {
        time: "17.50 – 18.13",
        agenda: "MUN 101",
      },
      {
        time: "18.13 - 18.28",
        agenda: "Main performance",
      },
      {
        time: "18.28 – 19.45",
        agenda: "Closing & dinner",
      },
    ],
  },
  {
    date: "29 Sept",
    timeline: [
      {
        time: "10.00 - 10.45",
        agenda: "Delegate registration",
      },
      {
        time: "10.45 - 11.00",
        agenda: "Final preparation",
      },
      {
        time: "11.00 - 11.15",
        agenda: "Comses 0",
      },
      {
        time: "11.15 - 12.45",
        agenda: "Comses 1",
      },
      {
        time: "12.45 - 14.15",
        agenda: "Lunch break",
      },
      {
        time: "14.15 - 16.15",
        agenda: "Comses II",
      },
      {
        time: "16.15 - 16.35",
        agenda: "Coffee break",
      },
      {
        time: "16.35 - 18.35",
        agenda: "Comses III",
      },
      {
        time: "18.35 - 18.50",
        agenda: "Announcement + Feedback",
      },
      {
        time: "19.00 - 20.30",
        agenda: "Dinner",
      },
      {
        time: "20.45 - 00.00",
        agenda: "Social night",
      },
      {
        time: "20.45 – 21.15",
        agenda: "Open gate",
      },
      {
        time: "21.15 - 21.25",
        agenda: "MC session",
      },
      {
        time: "21.25 - 22.35",
        agenda: "Live performance",
      },
      {
        time: "22.35 - 23.35",
        agenda: "DJ set",
      },
      {
        time: "23.35 - 00.00",
        agenda: "Closing",
      },
    ],
  },
  {
    date: "30 Sept",
    timeline: [
      {
        time: "07.45 - 08.00",
        agenda: "Delegations registration",
      },
      {
        time: "08.00 - 09.30",
        agenda: "Comses IV",
      },
      {
        time: "09.30 - 09.45",
        agenda: "Coffee break",
      },
      {
        time: "09.45 - 11.45",
        agenda: "Comses V",
      },
      {
        time: "11.45 - 12.00",
        agenda: "Lunch break",
      },
      {
        time: "12.00 - 13.30",
        agenda: "Comses VI",
      },
      {
        time: "13.30 - 15.00",
        agenda: "Lunch Break",
      },
      {
        time: "15.00 - 16.30",
        agenda: "Comses VII",
      },
      {
        time: "16.30 - 16.45",
        agenda: "Announcement + Feedback",
      },
      {
        time: "18.30 - 22.03",
        agenda: "Closing ceremony",
      },
      {
        time: "18.30 - 19.00",
        agenda: "Open gate",
      },
      {
        time: "19.00 - 20.00",
        agenda: "Dinner",
      },
      {
        time: "20.00 - 20.15",
        agenda: "Opening",
      },
      {
        time: "20.15 - 20.27",
        agenda: "Performance",
      },
      {
        time: "20.27 - 20.40",
        agenda: "Traditional dance",
      },
      {
        time: "20.40 - 21.42",
        agenda: "Awarding",
      },
      {
        time: "21.42 - 22.03",
        agenda: "Closing",
      },
    ],
  },
  {
    date: "1 Oct",
    timeline: [
      {
        time: "08.00 - 12.00",
        agenda: "Cultural day",
      },
      {
        agenda: "",
        time: "Poolside Garden (Garden - Pendopo III)",
      },
    ],
  },
];

const revealVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
