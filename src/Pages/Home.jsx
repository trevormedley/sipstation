import React, { useEffect, useState } from "react";
import NavBar from "../Components/Navigation/NavBar";
import NavLeft from "../Components/Navigation/NavLeft";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import HomeModule from "../Components/HomeModule";

const Home = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const userRef = collection(db, "users");
  //   getDocs(userRef).then((snapshot) => {
  //     let userArr = [];
  //     snapshot.docs.forEach((doc) => {
  //       userArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     setUsers(userArr);
  //   });
  // }, []);


  return (
    <div>
      <NavBar />
      <div className="relative min-h-screen flex">
        <NavLeft />
        <div className="w-full">
          <HomeModule />
          <button className="text-white bg-sky-700">Data</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
