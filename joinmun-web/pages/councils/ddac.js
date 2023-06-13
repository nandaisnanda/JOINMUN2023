import FlipCard from "@/components/chairs/flipCard";
import Head from "next/head";

const CardFlipPage = () => {
	const cardDataDDAC = [
		{
			id: 1,
			title: "UNITED NATIONS SECURITY COUNCIL",
			backText:
				"The United Nations Security Council is one of the six main organs of the United Nations which is responsible for ensuring and maintaining international peace and security. The security council may engage in the prevention and resolution of disputes that occur, they can mandate peace operations in order to provide a variety of support solely with the purpose of maintaining peace and stability and protecting civilians, or even preventing an armed conflict and any other forms of violence that breaches this council’s responsibility. The council is composed of 15 members, five permanent members: China, France, Russian Federation, the United Kingdom, and the United States. The permanent members of this council hold veto power, which has been regarded over the rumor that the council is often paralyzed by political disagreements among its members. Overall, the UNSC plays a critical role in maintaining global peace and security, although its effectiveness is limited by the complexities and political realities of its members",
			frontLogo: "/chairs/IPC.webp",
			backLogo: "/chairs/IPC-back.webp",
		},
		{
			id: 2,
			title: "UNITED NATIONS HUMAN RIGHT COUNCIL",
			backText:
				"The UNHRC is a council whose job is to promote and protect human rights around the world. The Council has 47 members for staggered three-year terms from 2023 to 2025, which membership is distributed on an equitable geographical basis, considering states that may represent the regions in the world.",
			frontLogo: "/chairs/UNHCR.webp",
			backLogo: "/chairs/UNHCR-back.webp",
		},
	];

	return (
		<div
			className="min-h-screen"
			style={{ backgroundImage: "url('/cloud-background.png')" }}
		>
			<Head>
				<title>DDC | JOINMUN 2023</title>
			</Head>
			<div className="ddac flex flex-col items-center" id="ddac">
				<h1 className="m-12 mt-16 text-center font-headline text-4xl font-bold text-red lg:text-5xl">
					Double Delegates Council
				</h1>
				<div className="flex flex-wrap justify-center">
					{cardDataDDAC.map((card) => (
						<div key={card.id} className="mb-8">
							<FlipCard
								title={card.title}
								frontLogo={card.frontLogo}
								backText={card.backText}
								backLogo={card.backLogo}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CardFlipPage;
