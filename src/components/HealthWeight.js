const HealthyWeight = () => {
  return (
    <div className="w-full bg-slate-200 py-16 font-poppins">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between">
          <div className="w-8/12 py-4 flex flex-col gap-4">
            <h1 className="text-xl font-bold">
              Being Healthier has its own associated joy.
            </h1>
            <ul className="list-disc flex flex-col gap-2">
              <li>Try to maintain your weight</li>
              <li>
                <span className="bg-green-300 px-2">Daily cardio</span>, try to
                spend at least half an hour in cardio and weight training.
              </li>
              <li>
                Try your calories intake below{" "}
                <span className="bg-green-300 px-2">2600</span>
              </li>
              <li>
                Majority of calories in your diet should be coming from{" "}
                <span className="bg-green-300 px-2">protein and fibre </span>
              </li>
            </ul>
          </div>

          <img
            alt="skinny.png"
            className="w-3/12 rounded-3xl"
            src="https://img.freepik.com/free-photo/portrait-confident-strong-male-bodybuilder_171337-4565.jpg?size=626&ext=jpg"
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
                <li>2 Bananas</li>
                <li> 1 Scoop Whey</li>
                <li>250gm Milk</li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 35gm</li>
                <li> Carbohydrates - 102.07gm</li>
                <li> Fibre - 9.6gm</li>
              </ul>
            </div>
            {/*  SECOND MEAL */}
            <div
              className="border-yellow-400 rounded-2xl w-3/12 border p-4 
             shadow-[0_35px_60px_rgba(0,0,0,0.3)] hover:scale-105 duration-500"
            >
              <h1 className="text-xl font-bold">Second Meal</h1>
              <ul className="h-32">
                <li>100gm rice</li>
                <li>50 gm Soya Chunks</li>
                <li></li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 30.8gm</li>
                <li> Carbohydrates - 44.4gm</li>
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
                <li>100gm Besan</li>
                <li>250gm Paneer</li>
                <li>100gm Curd</li>
              </ul>
              <h1 className="text-xl font-bold">Macros</h1>
              <ul>
                <li>Protein - 70gm</li>
                <li> Carbohydrates - 44.4gm</li>
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
            <h1>Total Protein -152.8gm</h1>
            <h1>Total Carbohydrates -217gm</h1>
            <h1>Total Fibre -23.3gm</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyWeight;
