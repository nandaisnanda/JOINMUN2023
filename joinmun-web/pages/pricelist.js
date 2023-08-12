const Pricelist = () => {
  return (
    <div className="bg-[url(/pricelist/cloud-background.svg)] bg-[center_top]">
      <div className="container mx-auto px-8 py-16 lg:px-16 xl:px-24">
        {/* Mobile */}
        <div className="block lg:hidden">
          <p className="mx-auto w-fit rounded-sm bg-yellow px-12 py-1 text-center font-body text-2xl font-semibold text-red shadow-xl">
            Registration Fees
          </p>

          <p className="my-4 text-center font-body text-lg font-bold text-white">
            Early-Bird Wave Registration
          </p>
          <p className="rounded-sm bg-yellow px-2 py-4 text-center text-lg text-red shadow-xl">
            Rp1.500.000/$105 (Non-accomodation package) <br /> Rp2.200.000/$160
            (Accommodation package)
          </p>
          <p className="mt-3 rounded-sm bg-yellow p-2 text-center text-lg text-red shadow-xl">
            1st May - 1st June
          </p>

          <p className="my-4 text-center font-body text-lg font-bold text-white">
            Regular Wave Registration
          </p>
          <p className="rounded-sm bg-yellow px-2 py-4 text-center text-lg text-red shadow-xl">
            Rp1.600.000/$ (Non-accomodation package) <br /> Rp2.500.000/$
            (Accommodation package)
          </p>
          <p className="mt-3 rounded-sm bg-yellow p-2 text-center text-lg text-red shadow-xl">
            10th June - 15th July
          </p>

          <p className="my-4 text-center font-body text-lg font-bold text-white">
            Late Wave Registration
          </p>
          <p className="rounded-sm bg-yellow px-2 py-4 text-center text-lg text-red shadow-xl">
            Rp1.900.000/$150 (Non-accomodation package) <br /> Rp2.800.000/$230
            (Accommodation package)
          </p>
          <p className="mt-3 rounded-sm bg-yellow p-2 text-center text-lg text-red shadow-xl">
            30th July - 31th August
          </p>
        </div>

        {/* Tablet and above */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-start-2 grid rounded-sm bg-yellow shadow-xl">
              <p className="self-center p-4 text-center font-body text-xl font-bold text-red">
                Early-Bird Wave Registration
              </p>
            </div>
            <div className="grid rounded-sm bg-yellow shadow-xl">
              <p className="self-center p-4 text-center font-body text-xl font-bold text-red">
                Regular Wave Registration
              </p>
            </div>
            <div className="grid rounded-sm bg-yellow shadow-xl">
              <p className="self-center p-4 text-center font-body text-xl font-bold text-red">
                Late Wave Registration
              </p>
            </div>

            <div className="grid rounded-sm bg-yellow shadow-xl">
              <p className="self-center px-12 py-1 text-center font-body text-xl font-bold text-red">
                Registration Fees
              </p>
            </div>
            <div className="grid rounded-sm bg-yellow shadow-xl">
              <p className="px-2 py-4 text-center text-lg text-red">
                Rp1.500.000/$105 (Non-accomodation package) <br />{" "}
                Rp2.200.000/$160 (Accommodation package)
              </p>
            </div>
            <div className="grid rounded-sm bg-yellow shadow-xl">
              <p className="self-center px-2 py-4 text-center text-lg text-red">
                Rp1.600.000/$ (Non-accomodation package) <br /> Rp2.500.000/$
                (Accommodation package)
              </p>
            </div>
            <div className="grid rounded-sm bg-yellow shadow-xl">
              <p className="my-auto self-center px-2 py-4 text-center text-lg text-red">
                Rp1.900.000/$150 (Non-accomodation package) <br />{" "}
                Rp2.800.000/$230 (Accommodation package)
              </p>
            </div>

            <p className="rounded-sm bg-yellow px-2 py-4 text-center text-xl font-bold text-red shadow-xl">
              Timeline
            </p>
            <div className="grid rounded-sm bg-yellow shadow-xl">
              <p className="self-center p-2 text-center text-lg text-red">
                1st May - 1st June
              </p>
            </div>
            <div className="grid rounded-sm bg-yellow shadow-xl">
              <p className="self-center p-2 text-center text-lg text-red">
                10th June - 15th July
              </p>
            </div>
            <div className="grid rounded-sm bg-yellow shadow-xl">
              <p className="self-center p-2 text-center text-lg text-red">
                30th July - 31th August
              </p>
            </div>
          </div>
        </div>
        <p className="mb-3 mt-6 text-lg">
          What will you get with the accomodation package?
        </p>

        <ul>
          <li>• A room in Sheraton Hotel Yogyakarta</li>
          <li>• Buffet breakfast for 2 persons/team</li>
          <li>• Wi-Fi access in the room</li>
          <li>• Tea/Coffee making facilities in the room</li>
          <li>• Fitness center and swimming pool</li>
          <li>• Breakfast buffet for each person</li>
          <li>• Buffet dinner</li>
        </ul>
      </div>
    </div>
  );
};
export default Pricelist;
