import NavBar from "./Components/NavBar";
import NavLeft from "./Components/NavLeft";
import DrinkList from "./Components/DrinkList";

function App() {
  return (
    <div>
      <NavBar />
      <div className="relative min-h-screen flex">
        <NavLeft />
        <div className="w-full">
          <DrinkList />
        </div>
      </div>
    </div>
  );
}

export default App;
