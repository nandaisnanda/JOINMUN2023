import Image from "next/image";
import fotoPresident from "@/public/index/foto-president.jpg";

const Remarks = () => {
  return (
    <section className="container mx-auto mb-28 space-y-8 px-8 sm:px-12 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:space-y-0 lg:px-16">
      <div className="flex flex-col items-center justify-center space-y-6 font-headline md:flex-row md:space-x-10 md:space-y-0 lg:flex-col lg:space-x-0 lg:space-y-6">
        <Image
          className="h-auto w-48 rounded-full shadow-[0_0_10px_white] md:w-56 lg:min-w-[16rem]"
          src={fotoPresident}
          alt="foto president"
        />
        <div className="text-center md:space-y-4 md:text-left lg:text-center">
          <h2 className="text-xl font-bold text-[#f4bb9c] sm:text-2xl md:text-3xl lg:mx-auto lg:max-w-[12ch] lg:text-4xl">
            Muhammad Riefky Fahreza
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            President of Jogja International MUN 2023 <br /> Faculty of Social
            and Political Science, <br /> Universitas Gadjah Mada
          </p>
        </div>
      </div>
      <p className="mx-auto max-w-prose text-justify text-sm md:text-base lg:text-lg">
        <span className="mb-2 hidden w-full text-center font-headline text-[4.25rem] lg:block">
          WELCOMING REMARKS
        </span>
        <br />
        It is beyond my honor to announce the establishment of the 12th
        conference of Jogja International Model United Nations (‘JOINMUN’), one
        of the founding MUNs that contains the legacy of great MUNers of
        Indonesia. The 12th JOINMUN is scheduled to take place from 28 September
        To 1 October 2023. In this year also, we are committed to providing a
        platform for insightful discussions and thought-provoking inquiries into
        current national, regional, and international events. <br /> <br /> We
        note with regret that these discussions had been pushed back whilst the
        world faces a multitude of challenges, including high inflation rates,
        the COVID-19 pandemic, and climate change. The recent developments in
        Ukraine, with Russia's conquest, have added a new dimension of
        complexity to contemporary international relations. Moreover, the rise
        of China and other Asian countries, the consolidation of Germany and the
        EU, the instability of the US, and the effects of capitalism continue to
        transform the international order, has given us a new dimension of
        thought when envisioning the future. Given these circumstances, the
        conference approaches 2023 with the theme of "Ashes of the Old Order:
        Emergence of the All-Informed Architects of Modern Politics", where we
        highlight the changing nature of the global political order. Through
        this event, we aim to explore how this changing order may grant
        opportunities for new political architects to emerge, and expect your
        participation in helping this noble cause. <br /> <br /> We sincerely
        hope that your participation and investment in JOINMUN 2023 will
        contribute to the advancement of the next generation's understanding and
        awareness of these pressing global concerns.
      </p>
    </section>
  );
};
export default Remarks;
