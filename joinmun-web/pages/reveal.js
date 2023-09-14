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
        time: "16.00 – 16.20",
        agenda: "Open gate",
      },
      {
        time: "16.20 – 16.50",
        agenda: "Opening",
      },
      {
        time: "16.50 – 17.00",
        agenda: "Performance",
      },
      {
        time: "17.00 – 17.30",
        agenda: "Speaker session 1",
      },
      {
        time: "17.30 – 17.50",
        agenda: "Prayer break",
      },
      {
        time: "17.50 – 18.20",
        agenda: "Speakers session 2",
      },
      {
        time: "18.20 – 18.40",
        agenda: "Q&A session",
      },
      {
        time: "18.40 – 18.55",
        agenda: "Performance",
      },
      {
        time: "18.55 – 20.00",
        agenda: "Closing & dinner",
      },
    ],
  },
  {
    date: "29 Sept",
    timeline: [
      {
        time: "10.30 – 11.00",
        agenda: "Delegate registration",
      },
      {
        time: "11.00 – 12.30",
        agenda: "Lunch break",
      },
      {
        time: "12.30 – 12.45",
        agenda: "Comses 0",
      },
      {
        time: "12.45 – 14.30",
        agenda: "Comses 1",
      },
      {
        time: "14.30 – 14.40",
        agenda: "Coffee break",
      },
      {
        time: "14.40 – 16.10",
        agenda: "Comses II",
      },
      {
        time: "16.10 – 16.20",
        agenda: "Coffee break",
      },
      {
        time: "16.20 – 18.20",
        agenda: "Comses III",
      },
      {
        time: "18.20 – 18.35",
        agenda: "Announcement + Feedback",
      },
      {
        time: "19.00 - 20.30",
        agenda: "Dinner",
      },
      {
        time: "20.00 - 00.00",
        agenda: "Social night",
      },
      {
        time: "20.00 – 21.00",
        agenda: "Open gate",
      },
      {
        time: "21.00 – 22.00",
        agenda: "Live Music",
      },
      {
        time: "22.00 – 23.00",
        agenda: "Karaoke Session",
      },
      {
        time: "23.00 – 00.00",
        agenda: "DJ Session",
      },
    ],
  },
  {
    date: "30 Sept",
    timeline: [
      {
        time: "07.30 – 08.00",
        agenda: "Delegations registration",
      },
      {
        time: "08.00 – 09.45",
        agenda: "Comses IV",
      },
      {
        time: "09.45 – 10.00",
        agenda: "Coffee break",
      },
      {
        time: "10.00 – 12.00",
        agenda: "Comses V",
      },
      {
        time: "12.00 – 13.30",
        agenda: "Lunch break",
      },
      {
        time: "13.30 – 15.00",
        agenda: "Comses VI",
      },
      {
        time: "15.00 – 15.10",
        agenda: "Coffee break",
      },
      {
        time: "15.10 – 16.40",
        agenda: "Comses VII",
      },
      {
        time: "16.40 – 16.55",
        agenda: "Announcement + Feedback",
      },
      {
        time: "18.30 - 22.00",
        agenda: "Closing ceremony",
      },
      {
        time: "18.30 – 19.00",
        agenda: "Open gate",
      },
      {
        time: "19.00 – 20.00",
        agenda: "Dinner",
      },
      {
        time: "20.00 – 20.15",
        agenda: "Opening",
      },
      {
        time: "20.15 – 20.30",
        agenda: "Performance",
      },
      {
        time: "20.30 – 21.40",
        agenda: "Awarding",
      },
      {
        time: "21.40 – 22.00",
        agenda: "Closing",
      },
    ],
  },
  {
    date: "1 Oct",
    timeline: [
      {
        time: "07.30 - 12.00",
        agenda: "Cultural day",
      },
      {
        agenda: "",
        time: "Poolside Garden (Garden - Pendopo III)",
      },
      {
        time: "07.30",
        agenda: "Open gate",
      },
      {
        time: "08.00 – 09.00",
        agenda: "Workshop Session 1",
      },
      {
        time: "09.00 – 09.15",
        agenda: "Live Music and Games",
      },
      {
        time: "09.15 – 10.15",
        agenda: "Workshop Session 2",
      },
      {
        time: "10.15 – 10.30",
        agenda: "Live Music and Games",
      },
      {
        time: "10.30 – 11.30",
        agenda: "Workshop Session 3",
      },
      {
        time: "11.45",
        agenda: "Clear Area",
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
