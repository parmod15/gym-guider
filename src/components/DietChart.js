// import muscleImg from ("../assets/images/muscle.jpg");
import { Link } from "react-router-dom";

const DietChart = () => {
  return (
    <div className="w-full bg-slate-200 font-poppins">
      <div className="w-10/12 mx-auto flex justify-between">
        {/*  */}
        {/*  FIRST CHART FROM BMI LESSER THAN 18.5 */}

        <div className=" w-3/12  hover:opacity-70 transition-opacity duration-300 ">
          <Link to={"/UnderWeight"} preventScrollReset={true}>
            <h1 className="text-center text-xl font-bold">
              Under weight Range
            </h1>
            <img
              alt="skinny.png"
              src="https://media.istockphoto.com/id/471253793/photo/hungry-boy.webp?b=1&s=612x612&w=0&k=20&c=bbCGexwMRNL-fxB_weEdfd_LQjY-cEOFRhAvn_UV55E="
            ></img>
            <button className="bg-white text-blue-400 font-bold py-2 px-4">
              {" "}
              Know More
            </button>
          </Link>
        </div>

        {/*  SECOND CHART FROM BMI LESSER THAN 18.5 */}

        <div className="w-3/12  hover:opacity-70 transition-opacity duration-300 ">
          <h1 className=" text-center text-xl font-bold">
            Health weight Range
          </h1>
          <img
            alt="skinny.png"
            src="https://img.freepik.com/free-photo/portrait-confident-strong-male-bodybuilder_171337-4565.jpg?size=626&ext=jpg"
          ></img>
          <button className="bg-white text-blue-400 font-bold py-2 px-4">
            {" "}
            Know More
          </button>
        </div>
        {/*  THIRD CHART FROM BMI LESSER THAN 18.5 */}

        <div className="w-3/12  hover:opacity-70 transition-opacity duration-300 ">
          <h1 className=" text-center text-xl font-bold">Over weight Range</h1>
          <img src="https://media.istockphoto.com/id/582256832/photo/donut-in-hand-obese-fat-boy.webp?b=1&s=612x612&w=0&k=20&c=WTSYi69hnb59O9_fNF2SBbo2ayCOLDobWKqIrpScIPo="></img>
          <button className="bg-white text-blue-400 font-bold py-2 px-4">
            {" "}
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DietChart;
