const NavBar = () =>{
    return (
        <div className="w-full bg-slate-500 py-2 text-white">
            <div className="w-11/12 mx-auto flex justify-between">
                <h1>Gym-teacher</h1>
                <ul className="flex justify-between gap-4">
                    <li>Home</li>
                    <li>Personal training</li>
                    <li>Plans</li>
                    <li>Explre More</li>
                </ul>
            </div>
        </div>
    )
};

export default NavBar ;