import { useState } from "react";

const AccordionEl = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md">
      <h2
        onClick={() => setIsOpen((io) => !io)}
        id="accordionTrigger"
        className="relative cursor-pointer bg-yellow p-3 pr-12 text-lg font-[600] text-gray-950 transition hover:scale-[1.02] sm:pr-14 sm:text-xl lg:p-4 lg:text-2xl"
      >
        {title}
        <svg
          className={`absolute right-3 top-1/2 h-8 w-8 lg:right-4 ${
            isOpen && "rotate-180"
          } -translate-y-1/2 transition duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </h2>
      <div
        className={`grid ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } transition-all duration-300`}
      >
        <div className="overflow-hidden bg-sub-yellow text-gray-950">
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="px-4 py-6 text-sm md:text-base"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default AccordionEl;
