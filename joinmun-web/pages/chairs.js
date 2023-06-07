import FlipCard from "@/components/chairs/flipCard";

const CardFlipPage = () => {
  const cardDataSDAC = [
    {
      id: 1,
      title: "INTERNATIONAL PRESS CORPS",
      backText: "asfsadd",
      frontLogo: "./chairs/IPC.png",
      backLogo: "./chairs/IPC-back.png",
    },
    {
      id: 2,
      title: "CRISIS COUNCIL",
      backText: "'dasdasasd'",
      frontLogo: "./chairs/CC.png",
      backLogo: "./chairs/CC-back.png",
    },
    {
      id: 3,
      title: "UN WOMEN",
      backText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam enim, venenatis sed tortor aliquam, ornare fringilla lacus. Mauris lacinia odio quis neque venenatis interdum. Vivamus tempus malesuada euismod. Ut fermentum volutpat posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam mattis tristique ultricies. Nam convallis rutrum convallis. Suspendisse quis nulla elementum, pellentesque eros nec, eleifend massa.",
      frontLogo: "./chairs/UNW.png",
      backLogo: "./chairs/UNW-back.png",
    },
    {
      id: 4,
      title: "FOOD AND AGRICULTURE ORGANIZATION",
      backText: "'sadasd'",
      frontLogo: "./chairs/FAO.png",
      backLogo: "./chairs/FAO-back.png",
    },
    {
      id: 5,
      title: "INDONESIA HOUSE OF REPRESENTATIVE",
      backText: "'dasdasdasd'",
      frontLogo: "./chairs/IHoR.png",
      backLogo: "./chairs/IHoR-back.png",
    },
  ];

  const cardDataDDAC = [
    {
      id: 1,
      title: "UNITED NATIONS SECURITY COUNCIL",
      backText: "asfsadd",
      frontLogo: "./chairs/IPC.png",
      backLogo: "./chairs/IPC-back.png",
    },
    {
      id: 2,
      title: "UNITED NATIONS HUMAN RIGHT COUNCILL",
      backText: "'dasdasasd'",
      frontLogo: "./chairs/UNHCR.png",
      backLogo: "./chairs/UNHCR-back.png",
    },
  ];

  return (
    <div>
      <div
        className="sdac flex flex-col items-center"
        id="sdac">
        <h1 className="m-12 mt-24 text-center font-headline text-4xl">
          Single Delegate Advanced Council
        </h1>
        <div className="flex flex-wrap ">
          {cardDataSDAC.map((card) => (
            <div
              key={card.id}
              className="mb-8">
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

      <div
        className="ddac flex flex-col items-center"
        id="ddac">
        <h1 className="m-12 mt-24 text-center font-headline text-4xl">
          Double Delegate Advanced Council
        </h1>
        <div className="flex flex-wrap ">
          {cardDataDDAC.map((card) => (
            <div
              key={card.id}
              className="mb-8">
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
