import NavBar from "../Components/Navigation/NavBar"
import NavLeft from "../Components/Navigation/NavLeft";
import DrinkList from "../Components/Explore/DrinkList";

function Explore() {
  return (
    <div>
      <NavBar />
      <div className="relative min-h-screen flex">
        <NavLeft />
        <div className="w-full">
          <DrinkList/>
        </div>
      </div>
    </div>
  );
}

export default Explore;
