import FlipCard from "@/components/chairs/flipCard";

const CardFlipPage = () => {
	const cardDataSDAC = [
		{
			id: 1,
			title: "INTERNATIONAL PRESS CORPS",
			backText:
				" Press Corps gives the public a complete picture of the condition of the world's events as the fifth estate of democracy. Press clarifies and highlights the significance of talks in each UN Council and could lead a discussion about what matters by posing pressing queries that reflect the aspirations of the public for the specific topic. This year, JOINMUN invites delegates to portray journalists from various news organizations through the Press Corps, reporting on the numerous committee meetings and discussions throughout the conference. Delegates will observe council operations firsthand and record events in ",
			frontLogo: "./chairs/IPC.png",
			backLogo: "./chairs/IPC-back.png",
		},
		{
			id: 2,
			title: "CRISIS COUNCIL",
			backText:
				"A thrilling and dynamic committee in the Model United Nations repertoire, the Crisis Council beckons an exhilarating simulation of crises, both real and imagined, as well as historical and futuristic—all with the goal of versing delegates to crisis management. The Crisis Council distinguishes itself from conventional councils by employing Directives instead of resolutions to generate session-specific solutions. News Updates are periodically released to report the results of these Directives. This cyclical process of updates and responses via Directives constitutes the primary mechanism for resolving issues during the conference. Due to this, the Crisis Council presents an unparalleled opportunity to develop critical and quick thinking, leadership, and diplomatic skills, indispensable in a world forever globalizing and within the circuit of MUN itself! Whether a novice or veteran MUN delegate, the Crisis Council presents a unique and thrilling challenge to test one's skills and experiences.",
			frontLogo: "./chairs/CC.png",
			backLogo: "./chairs/CC-back.png",
		},
		{
			id: 3,
			title: "UN WOMEN",
			backText:
				"The United Nations Entity for Gender Equality and the Empowerment of Women (‘UN Women’) was established in 2010 under the United Nations General Assembly (‘UNGA’) with 41 member states elected this year and is still advocating global gender equality norms and empowerment through intergovernmental supports, financial supports, initiatives, and coordination. With 2.5 billion women still subject to right violations until this day, crucial roles are being upheld. UN Women focuses on several priorities in the council to contribute in achieving peace, inclusivity, socio-economic security, ensuring the existence of equal rights, access to basic necessities like proper healthcare, and social justice. It is in the sole wish and lifeblood of this council to achieve transformative changes and guarantee the pace of reform in equal rights.",
			frontLogo: "./chairs/UNW.png",
			backLogo: "./chairs/UNW-back.png",
		},
		{
			id: 4,
			title: "FOOD AND AGRICULTURE ORGANIZATION",
			backText:
				"Hunger is a common enemy to mankind. For that, the Food and Agricultural Organization of the United Nations (FAO) is a specialized United Nations agency established with a mandate to address famines, low nutrition standards, and agricultural unproductivity in different countries around the world. FAO contributes with governments and other international agencies for the management of the different nutritional resources that come from different sources such as from forest, fishing, and agriculture. Further, it helps the government plan how these resources would be domestically used and traded at the international rate. ",
			frontLogo: "./chairs/FAO.png",
			backLogo: "./chairs/FAO-back.png",
		},
		{
			id: 5,
			title: "INDONESIA HOUSE OF REPRESENTATIVE",
			backText:
				"  The Indonesian House of Representatives (‘HoR’)’ is currently the main legislator of laws and regulations in Indonesia. Currently, it consists of over 500 members, with each representing a political party or faction and a constituent region. For the period of 2019-2024, the HoR is divided into 11 commissions, each commission specializing in specific scopes of state matter.",
			frontLogo: "./chairs/IHoR.png",
			backLogo: "./chairs/IHoR-back.png",
		},
	];

	const cardDataDDAC = [
		{
			id: 1,
			title: "UNITED NATIONS SECURITY COUNCIL",
			backText:
				"The United Nations Security Council is one of the six main organs of the United Nations which is responsible for ensuring and maintaining international peace and security. The security council may engage in the prevention and resolution of disputes that occur, they can mandate peace operations in order to provide a variety of support solely with the purpose of maintaining peace and stability and protecting civilians, or even preventing an armed conflict and any other forms of violence that breaches this council’s responsibility. The council is composed of 15 members, five permanent members: China, France, Russian Federation, the United Kingdom, and the United States. The permanent members of this council hold veto power, which has been regarded over the rumor that the council is often paralyzed by political disagreements among its members. Overall, the UNSC plays a critical role in maintaining global peace and security, although its effectiveness is limited by the complexities and political realities of its members",
			frontLogo: "./chairs/IPC.png",
			backLogo: "./chairs/IPC-back.png",
		},
		{
			id: 2,
			title: "UNITED NATIONS HUMAN RIGHT COUNCILL",
			backText:
				"The UNHRC is a council whose job is to promote and protect human rights around the world. The Council has 47 members for staggered three-year terms from 2023 to 2025, which membership is distributed on an equitable geographical basis, considering states that may represent the regions in the world.",
			frontLogo: "./chairs/UNHCR.png",
			backLogo: "./chairs/UNHCR-back.png",
		},
	];

	return (
		<div style={{ backgroundImage: "url('./faq/cloud-background.png')" }}>
			<div className="sdac flex flex-col items-center" id="sdac">
				<h1 className="m-12 mt-24 text-center font-headline text-4xl">
					Single Delegate Advanced Council
				</h1>
				<div className="flex flex-wrap ">
					{cardDataSDAC.map((card) => (
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

			<div className="ddac flex flex-col items-center" id="ddac">
				<h1 className="m-12 mt-24 text-center font-headline text-4xl">
					Double Delegate Advanced Council
				</h1>
				<div className="flex flex-wrap ">
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
