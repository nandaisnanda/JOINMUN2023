import Hero from "@/components/index/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        className="bg-opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url("/index/Untitled_Artwork-1 10.svg")' }}
      >
        <h1 className=" mt-10 text-center font-headline text-6xl">
          Council and Topic
        </h1>
        <h1 className="-mb-32 text-center font-headline text-6xl">Reveal</h1>
        <button className=" absolute right-[340px] my-[345px] rounded-full bg-yellow px-4 py-2 font-headline text-red hover:bg-sub-yellow">
          <h1>Single Delegate</h1>
          <h1>Advanced Council</h1>
        </button>
        <button className="absolute left-[340px] my-[345px] rounded-full bg-yellow px-4 py-2 font-headline text-red hover:bg-sub-yellow">
          <h1>Double Delegates</h1>
          <h1>Advanced Council</h1>
        </button>
        <div className="flex justify-center">
          <Image
            src="/index/jogja silhouette .png"
            width={800}
            height={800}
            alt="jogja silhoutte"
          />
        </div>
      </div>
      <div
        className=" bg-opacity-10 bg-cover bg-center "
        style={{
          backgroundImage: 'url("/index/Untitled_Artwork-1 11 (1).svg")',
        }}
      >
        <h1 className="mt-20 text-center font-headline text-6xl">
          Exhibition (coming soon)
        </h1>
      </div>
      <div
        className="bg-opacity-10 bg-cover bg-center "
        style={{
          backgroundImage: 'url("/index/Untitled_Artwork-1 11 (1).svg")',
        }}
      >
        <h1 className="mt-20 text-center font-headline text-6xl">Gallery</h1>
      </div>
    </>
  );
}
