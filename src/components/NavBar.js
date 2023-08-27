import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full bg-slate-500 py-4  text-white font-poppins">
      <div className="w-11/12 mx-auto flex justify-between">
        <h1>Gym-teacher</h1>
        <ul className="flex justify-between gap-4">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Personal training</li>
          <Link to={"/Plans"}>
            <li>Plans</li>
          </Link>

          <li>Explre More</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
