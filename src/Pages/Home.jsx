import NavBar from "../Components/Navigation/NavBar";
import NavLeft from "../Components/Navigation/NavLeft";
import HomeModule from "../Components/HomeModule";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="relative min-h-screen flex">
        <NavLeft />
        <div className="w-full">
          <HomeModule />
        </div>
      </div>
    </div>
  );
};

export default Home;
