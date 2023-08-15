import { useState } from "react";

const UnderWeight = () => {
  const [trigger, setTrigger] = useState([]);

  return (
    <div className="w-full bg-slate-200 py-16 font-poppins">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between">
          <div className="w-8/12 py-4 flex flex-col gap-4">
            <h1 className="text-xl font-bold">
              Being underweight has its own associated risks, listed below:
            </h1>
            <ul className="list-disc flex flex-col gap-2">
              <li>
                Malnutrition, vitamin deficiencies, anemia (lowered ability to
                carry blood vessels)
              </li>
              <li>
                <span className="bg-red-400 px-2">Osteoporosis</span>, a disease
                that causes bone weakness, increasing the risk of breaking a
                bone A decrease in immune function
              </li>
              <li>
                Growth and development issues, particularly in children and
                teenagers
              </li>
              <li>
                Possible reproductive issues for women due to{" "}
                <span className="bg-red-400 px-2">hormonal imbalances</span>{" "}
                that can disrupt the menstrual cycle. Underweight women also
                have a higher chance of miscarriage in the first trimester
              </li>
              <li>
                Potential complications as a result of{" "}
                <span className="bg-red-400 px-2">surgey</span>
              </li>
              <li>
                Generally, an increased risk of mortality compared to those with
                a healthy BMI
              </li>
            </ul>
          </div>

          <img
            alt="skinny.png"
            className="w-3/12 rounded-3xl"
            src="https://media.istockphoto.com/id/471253793/photo/hungry-boy.webp?b=1&s=612x612&w=0&k=20&c=bbCGexwMRNL-fxB_weEdfd_LQjY-cEOFRhAvn_UV55E="
          ></img>
        </div>
        <div className="py-16">
          <h1 className="text-4xl  pb-8  text-center font-bold p-2 ">
            Diet plans for Underweight Persons
          </h1>

          {/* <div className="flex flex-col w-40 gap-4">
            <h1> we ll help you</h1>
            <button onClick={() => setTrigger("diet")} className="bg-blue-500">
              Click for diet plan
            </button>
            <button
              onClick={() => setTrigger("workout")}
              className="bg-blue-500"
            >
              Click for workout{" "}
            </button>
          </div> */}

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
                <li>2 Bananas</li>
                <li>50 gm Oats</li>
                <li>2 Spoon Peanut Butter</li>
                <li> 1 Scoop Whey</li>
                <li>500gm Milk</li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 58gm</li>
                <li> Carbohydrates - 155.07gm</li>
                <li> Fibre - 17.6gm</li>
              </ul>
            </div>
            {/*  SECOND MEAL */}
            <div
              className="border-yellow-400 rounded-2xl w-3/12 border p-4 
             shadow-[0_35px_60px_rgba(0,0,0,0.3)] hover:scale-105 duration-500"
            >
              <h1 className="text-xl font-bold">Second Meal</h1>
              <ul className="h-32">
                <li>250gm rice</li>
                <li>50 gm Soya Chunks</li>
                <li>100gm Curd</li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 43.8gm</li>
                <li> Carbohydrates - 74.4gm</li>
                <li> Fibre - 7.8gm</li>
              </ul>
            </div>
            {/*  THIRD MEAL */}
            <div
              className="border-yellow-400 rounded-2xl w-3/12 border p-4 
             shadow-[0_35px_60px_rgba(0,0,0,0.3)] hover:scale-105 duration-500"
            >
              <h1 className="text-xl font-bold">Third Meal</h1>
              <ul className="h-32">
                <li>3 Roti</li>
                <li>250gm Paneer</li>
                <li>100gm Curd</li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 50gm</li>
                <li> Carbohydrates - 59.4gm</li>
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
            <h1>Total Protein -168.8gm</h1>
            <h1>Total Carbohydrates -317gm</h1>
            <h1>Total Fibre -30.3gm</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderWeight;
