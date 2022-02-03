import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import Social from "./Pages/Social";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

console.log(auth);
function App() {
  const [user, setUser] = useState([]);



  useEffect(() => {
    if (auth) {
      setUser(auth.currentUser);
    }
  }, []);
 

  console.log(user);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </Router>
  );
}

export default App;
