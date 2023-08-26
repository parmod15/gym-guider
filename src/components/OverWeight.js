const OverWeight = () => {
  return (
    <div className="w-full bg-slate-200 py-16 font-poppins">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between">
          {/* DETAILS OF RISK */}
          <div className="w-8/12 py-4 flex flex-col gap-4">
            <h1 className="text-xl font-bold">
              Being underweight has its own associated risks, listed below:{" "}
            </h1>
            <ul className="list-disc flex flex-col gap-2">
              <li>High blood pressure</li>
              <li>
                Higher levels of{" "}
                <span className="bg-red-400 px-2">LDL cholesterol</span> , which
                is widely considered "bad cholesterol," lower levels of HDL
                cholesterol, considered to be good cholesterol in moderation,
                and high levels of triglycerides.
              </li>
              <li>
                <span className="bg-red-400 px-2">Gallbladder disease</span>
              </li>
              <li>
                <span className="bg-red-400 px-2">Osteoarthritis</span>, a type
                of joint disease caused by breakdown of joint cartilage
              </li>
              <li>
                Mental illnesses such as clinical depression, anxiety, and
                others
              </li>
              <li>
                Body pains and difficulty with certain{" "}
                <span className="bg bg-red-400 px-2"> physical functions</span>
                Generally, an increased risk of mortality compared to those with
                a healthy BMI
              </li>
            </ul>
          </div>

          <img
            src="https://media.istockphoto.com/id/582256832/photo/donut-in-hand-obese-fat-boy.webp?b=1&s=612x612&w=0&k=20&c=WTSYi69hnb59O9_fNF2SBbo2ayCOLDobWKqIrpScIPo="
            alt="over-weight"
            className="w-3/12 rounded-3xl"
          ></img>
        </div>
        <div className="py-16">
          <h1 className="text-4xl  pb-8  text-center font-bold p-2 ">
            Diet plans for Healthweight Persons
          </h1>
          {/* MEALS CONTAINER  */}

          <div className="flex justify-between gap-2 ">
            {/* <h1> Veg </h1>
            <img src="https://icons8.com/icon/61083/vegetarian-food-symbol"></img> */}
            {/*  FIRST MEAL */}
            <div
              className="border-yellow-400 rounded-2xl w-3/12 border p-4 
             shadow-[0_35px_60px_rgba(0,0,0,0.3)] hover:scale-105 duration-500"
            >
              <h1 className="text-xl font-bold">First Meal</h1>
              <ul className="h-32">
                <li> 1 Scoop Whey</li>
                <li>200mL Water</li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 25gm</li>
                <li> Carbohydrates - 1.07gm</li>
                <li> Fibre - 2.6gm</li>
              </ul>
            </div>
            {/*  SECOND MEAL */}
            <div
              className="border-yellow-400 rounded-2xl w-3/12 border p-4 
             shadow-[0_35px_60px_rgba(0,0,0,0.3)] hover:scale-105 duration-500"
            >
              <h1 className="text-xl font-bold">Second Meal</h1>
              <ul className="h-32">
                <li>2 Cpasicum</li>
                <li>1 Onion</li>
                <li>50 gm Soya Chunks</li>
                <li></li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 30.8gm</li>
                <li> Carbohydrates - 4.4gm</li>
                <li> Fibre - 4.8gm</li>
              </ul>
            </div>
            {/*  THIRD MEAL */}
            <div
              className="border-yellow-400 rounded-2xl w-3/12 border p-4 
             shadow-[0_35px_60px_rgba(0,0,0,0.3)] hover:scale-105 duration-500"
            >
              <h1 className="text-xl font-bold">Third Meal</h1>
              <ul className="h-32">
                <li>100gm Besan</li>
                <li>1 Scoop Whey</li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 50gm</li>
                <li> Carbohydrates - 35.4gm</li>
                <li> Fibre - 5.6gm</li>
              </ul>
            </div>
            {/*  FOURTH MEAL */}
            <div
              className="border-yellow-400 rounded-2xl w-3/12 border p-4  
            shadow-[0_35px_60px_rgba(0,0,0,0.3)] hover:scale-105 duration-500"
            >
              <h1 className="text-xl font-bold">Fourth Meal</h1>
              <ul className="h-32">
                <li>500ml Milk</li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 17gm</li>
                <li> Carbohydrates - 26gm</li>
                <li> Fibre - 0.3gm</li>
              </ul>
            </div>
          </div>

          {/*  SUM TOTAL OF MACROS */}
          <div className="w-11/12 flex mx-auto justify-between py-8 text-xl font-bold border border-yellow-400">
            <h1>Total Protein -122.8gm</h1>
            <h1>Total Carbohydrates -68gm</h1>
            <h1>Total Fibre -13.3gm</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverWeight;
