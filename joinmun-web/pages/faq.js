import AccordionEl from "@/components/faq/AccordionEl";
import Head from "next/head";
import { BsFillDiamondFill } from "react-icons/bs";

const FAQ = () => {
  return (
    <div style={{ backgroundImage: "url('./cloud-background.png')" }}>
      <Head>
        <title>FAQ | JOINMUN 2023</title>
      </Head>
      <section className="container mx-auto px-4 pb-28 pt-32 sm:px-12 lg:px-16 lg:pt-20">
        <h2 className="relative mb-10 rounded-full bg-[#7c1717] px-12 py-3 text-center font-headline text-4xl shadow-[inset_0_3px_10px_rgba(0,0,0,0.7)] sm:text-5xl md:text-6xl lg:mb-14 lg:py-4 lg:text-7xl">
          <BsFillDiamondFill className="absolute bottom-0 left-6 top-0 my-auto h-auto w-4 sm:w-6 lg:left-8" />
          <BsFillDiamondFill className="absolute bottom-0 right-6 top-0 my-auto h-auto w-4 sm:w-6 lg:right-8" />
          Frequently Asked Question
        </h2>
        <div className="space-y-4">
          {faq.map((item, idx) => (
            <AccordionEl {...item} key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default FAQ;

const faq = [
  {
    title: "Registering as a single delegate for double delegate councils",
    content: `<p>You can totally register without a partner for the double delegate council! Later on, the JOINMUN 2023 Committee will pair you with another delegate who registers as a single delegate if you are participating in a double delegate council.</p>
	<br />
	<ol>
		<li>1. Go to https://joinmun2023.com/ and click “Register” in the top right corner of the website</li>
		<li>2. Register as per usual and regardless of choosing a double delegate council (UNHRC or UNSC) just leave the partner field empty</li>
		<li>3. You will receive an invoice email from the committee to pay for your registration. After submitting payment proof, the committee will keep your name and help assign you to a partner for a double delegate council! You will receive the name of your partner along with the Study Guide in August.</li>
	</ol>
	`,
  },
  {
    title: "Registering as delegation",
    content: `<p>Delegation registration is handled by our committee Laras (+62 85947468177/joinmun.official.outpart@gmail.com) and does not use the same form that is in our website. Here’s how to register as a delegation!</p>
	<br />
	<ol>
		<li>1. Contact our CP Laras at (+62 85947468177/joinmun.official.outpart@gmail.com) to request the delegation registration form and be informed of the benefit you will get for registering as a delegation</li>
		<li>2. Fill the delegation registration form and send them back to our CP</li>
		<li>3. You will receive a payment invoice and can simply pay for the registration!</li>
	</ol>
	`,
  },
  {
    title: "Accomodation",
    content: `<b>1. Registering with Accommodation</b> <br />
	<br />
	<p>Your accommodation will be at our venue, Sheraton Mustika Yogyakarta.</p>
	<br />
	<p>You may choose your roommate as you will be given a twin bed room. However, you can also choose to have the committee select your roommate (fill the roommate box with “-”).</p>
	<br />
	<p>You will be picked up from Yogyakarta International Airport/Tugu Train Station by our committee and delivered to the venue.</p>
	
	<br />

	<b>2. Registering without Accommodation</b> <br />
	<br />
	<p>You will not be administered to accommodation at Sheraton Mustika Yogyakarta, however, the committee will be glad to assist you in finding an accommodation in Yogyakarta</p>
	<br />
	<p>You will receive the same benefit of pickup from  Yogyakarta International Airport/Tugu Train Station</p>
	`,
  },
  {
    title: "Traveling to Jogja",
    content: `<b>By Plane - International</b> <br />
	<ol>
		<li>1. Should you require a visa, the JOINMUN 2023 committee will be glad to send you a formal invitation letter after you have completed payment. Do let us know via your payment email that you require such a letter.</li>
		<li>2. Should you require a referral the JOINMUN 2023 committee will be glad to contact the Indonesian Embassy at your country to ease your visa process.</li>
		<li>3. Purchase a plane ticket from your local airport to Yogyakarta International Airport</li>
		<li>4. You can ask for help or recommendation from our committee member</li>
		<li>5. If you arrive at 27th or 28th of September, our committee member will pick you up at Yogyakarta International Airport and deliver you safely to our venue	</li>
	</ol>

	<br />

	<b>By Plane - Domestic</b> <br />
	<ol>
		<li>1. Purchase a plane ticket from your local airport to Yogyakarta International Airport</li>
		<li>2. You can ask for help or recommendation from our committee member</li>
		<li>3. If you arrive at 27th or 28th of September, our committee member will pick you up at Yogyakarta International Airport and deliver you safely to our venue	</li>
	</ol>
	
	<br />

	<b>By Train - Domestic</b> <br />
	<ol>
		<li>1. Purchase a train ticket from your local train station to “Stasiun Yogyakarta” or “Stasiun Yogyakarta - Tugu”, it’ll be best if you arrive on the day on 27th September or 28th September</li>
		<li>2. You can ask for help or recommendation from our committee member to choose the train</li>
		<li>3. When you arrive at 27th or 28th of September, our committee member will pick you up at Tugu Train Station, Yogyakarta and deliver you safely to our venue	</li>
	</ol>
	`,
  },
];
