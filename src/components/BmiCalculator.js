import { useState } from "react";



const BmiCalculator = () => {

    const [weight , setWeight] = useState([]);
    const [height , setHeight] = useState([]);

  return (
    <div className="py-8 w-full bg-slate-200">
      <div className="w-11/12 mx-auto flex flex-col items-center">
        <h1 className="text-4xl">Get Started with our BMI Calculator.</h1>
        <div className="flex flex-col gap-5 border border-black p-8">
          <input onChange={(e)=>setWeight(e.target.value)} type="text"
           placeholder="Enter your Weight in Kgs"
           className="border border-blue-500 px-4 py-2 rounded-md active:border-blue-400"></input>
          <h1>{weight}</h1>

          <input onChange={(e)=>setHeight(e.target.value)} type="text"
           placeholder="Enter your Height in Cms"
           className="border border-blue-500 px-4 py-2 rounded-md active:border-blue-400"></input>
          <h1>{height}</h1>

          <button className="bg-blue-500 py-2 px-4 mx-auto text-white font-bold rounded-md">Submit</button>
        </div>
      </div>
    </div>
  );
};
 export default BmiCalculator;