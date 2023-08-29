const Plans = () => {
  return (
    <div className="w-full font-poppins py-16 bg-orange-400">
      <h1 className="text-4xl text-center text-white">
        We Provide Variety of Customized plans for everyone.
      </h1>
      <div className=" py-12 w-9/12 flex flex-row justify-around mx-auto ">
        {/* FIRST PAYMENT CARD */}
        <div className=" w-52 bg-white py-4 h-[23rem] px-4  rounded-sm hover:border hover:border-red-500 hover:scale-105 hover:rounded-xl transition-all duration-500">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-xl font-extrabold text-red-500">Starter</h1>
            <p className="text-sm">Ideal solution for beginners</p>
            <h1 className="text-2xl text-red-500 font-bold">
              <span className="text-red-500 text-sm">$</span>30/
              <span className="text-red-500 text-sm">mo</span>
            </h1>
            <button className="bg-red-500 text-white font-bold rounded-full w-32  py-2 mx-auto hover:text-opacity-70">
              Own now
            </button>
          </div>
          {/* BENEFITS */}
          <div className="flex flex-col gap-2 text-sm py-4">
            <p>Consultant avialable for 6hr.</p>
            <p>E-mail serivce avialable</p>
            <p>Phone service not available</p>
            <p>Starter diet plan</p>
          </div>
        </div>

        {/* SECOND PAYMENT CARD */}
        <div className=" w-52 bg-white py-8 h-96 px-4 relative rounded-sm hover:border hover:border-green-500 hover:scale-105 hover:rounded-xl transition-all duration-500">
          <div className="bg-green-500 w-[8.5rem] text-sm py-1 text-white rounded-tl-full rounded-tr-full absolute top-2 -left-4 -rotate-[30deg] text-center">
            Best Value
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-xl font-extrabold text-green-500">Premium</h1>
            <p className="text-sm">Perfect package for personal.</p>
            <h1 className="text-2xl text-green-500 font-bold">
              <span className="text-green-500 text-sm">$</span>99/
              <span className="text-green-500 text-sm">mo</span>
            </h1>
            <button className="bg-green-500 text-white font-bold rounded-full w-32  py-2 mx-auto hover:text-opacity-70">
              Own now
            </button>
          </div>
          {/* BENEFITS */}
          <div className="flex flex-col gap-2 text-sm py-4">
            <p>Consultant avialable for 12hr.</p>
            <p>E-mail serivce avialable</p>
            <p>Phone service available</p>
            <p>Maintained diet plan</p>
          </div>
        </div>

        {/* THIRD PAYMENT CARD */}
        <div className=" w-52 bg-white py-4 h-[23rem] px-4  rounded-sm hover:border hover:border-yellow-500 hover:scale-105 hover:rounded-xl transition-all duration-500">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-xl font-extrabold text-yellow-500">Ultimate</h1>
            <p className="text-sm">Perfect for professional Competitions.</p>
            <h1 className="text-2xl text-yellow-500 font-bold">
              <span className="text-yellow-500 text-sm">$</span>199/
              <span className="text-yellow-500 text-sm">mo</span>
            </h1>
            <button className="bg-yellow-500 text-white font-bold rounded-full w-32  py-2 mx-auto hover:text-opacity-70">
              Own now
            </button>
          </div>
          {/* BENEFITS */}
          <div className="flex flex-col gap-2 text-sm py-4">
            <p>Consultant avialable for 20hr.</p>
            <p>E-mail serivce avialable</p>
            <p>Whatsapp service available</p>
            <p>Structured diet plan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
