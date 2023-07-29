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
        className="container mx-auto max-w-fit px-4 pt-10 font-headline sm:px-8"
      >
        <h2 className="mx-auto mb-3 max-w-fit bg-green px-4 py-2 text-center text-3xl sm:mb-6 sm:px-8 sm:py-4 sm:text-6xl lg:text-7xl">
          DATE REVEAL
        </h2>
        <div className="mb-6 bg-yellow px-[15vw] py-2 text-center text-2xl sm:mb-10 sm:text-5xl md:px-44 lg:text-6xl">
          <p className="text-red">28 Sept - 1 Oct</p>
        </div>
        <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2">
          {revealData.map((data) => (
            <motion.div
              key={data.date}
              variants={cardVariants}
              className="h-80 rounded-lg bg-yellow p-3 sm:p-4"
            >
              <div className="bg-brown p-1 text-center text-2xl sm:p-3 sm:text-3xl lg:text-4xl">
                {data.date}
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

export async function getServerSideProps({ res }) {
  // res.writeHead(302, {
  // 	Location: "/404",
  // });
  // res.end();
  return { props: {} };
}

const revealData = [
  {
    date: "28 Sept",
  },
  {
    date: "29 Sept",
  },
  {
    date: "30 Sept",
  },
  {
    date: "1 Oct",
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
