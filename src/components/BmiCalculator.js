import { useState } from "react";


//  FUNCTION FOR BMI CALCULATING
const BmiCalc = (height , weight) =>{
    let result = Math.trunc(weight / (height*height));
    // console.log(result);
     document.querySelector(".result-bmi").textContent = `Your Bmi is ${result}`;
     if(result<18.5){
            document.querySelector(".range-bmi").textContent = `You Are in UnderWeight Range`;
            document.querySelector(".range-bmi").classList.add("red");

     }
     else if (result>18.5 && result<24.9){
            document.querySelector(".range-bmi").textContent = `You Fall in Healthy Weight Range`;
            document.querySelector(".range-bmi").classList.add("green");
     }
     else  {
             document.querySelector(".range-bmi").textContent = `You Fall in Obese Range`;
             document.querySelector(".range-bmi").classList.add("red");
     }

}



const BmiCalculator = () => {

    const [weight , setWeight] = useState([]);
    const [height , setHeight] = useState([]);
    // const [result , setResult] = useState("Your Result");

  return (
    <div className="py-8 w-full bg-slate-200">
      <div className="w-11/12 mx-auto flex flex-col items-center">
        <h1 className="text-4xl">Get Started with our BMI Calculator.</h1>
        <div className="flex flex-col gap-8 border border-slate-400 
                        rounded-xl mt-8 w-5/12 p-8 bg-gradient-to-br from-slate-200 to-blue-100">

            {/*  INPUT FOR USERS WEIGHT */}
          <input onChange={(e)=>setWeight(e.target.value)} type="text"
           placeholder="Enter your Weight in Kgs"
           className="border border-blue-500 px-4 py-2 rounded-md active:border-blue-400"></input>

          {/*  INPUT FOR USERSS HEIGHT */}
          <input onChange={(e)=>setHeight(e.target.value)} type="text"
           placeholder="Enter your Height in Metres"
           className="border border-blue-500 px-4 py-2 rounded-md active:border-blue-400"></input>

           {/*  SUBMIT BUTTON */}
          <button onClick={()=>BmiCalc(height , weight)}
           className="bg-blue-500 py-3 px-4 w-6/12 mx-auto text-white font-bold rounded-md">Submit</button>
         
          {/*  BMI IS DISPLAYED HERE */}
          <h1 className="result-bmi text-xl text-center">Your result</h1>
          <h1 className="range-bmi text-xl text-center py-2"></h1>

        </div>
      </div>
    </div>
  );
};
 export default BmiCalculator;