import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

function HomeModule() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRef = collection(db, "users");
    getDocs(userRef).then((snapshot) => {
      let userArr = [];
      snapshot.docs.forEach((doc) => {
        userArr.push({ ...doc.data(), id: doc.id });
      });
      setUsers(userArr);
    });
  }, []);

  return (
    <div className="p-16 text-white box-border">
      <div className="flex flex-row items-center mb-8">
        <img
          src={localStorage.profilePic}
          alt="userphoto"
          className="rounded-full mr-8"
        />
        <h1 className="text-white text-6xl font-bold">{localStorage.name}</h1>
      </div>
      <div className="flex flex-row">
        <div className="w-3/4">
          <div className="bg-zinc-800 rounded-xl h-64 p-6 mb-4">
            <p className="font-bold">Bookmarked</p>
          </div>
          <div className="bg-zinc-800 rounded-xl h-64 p-6">
            <p className="font-bold">Other Stuff</p>
          </div>
        </div>
        <div className="bg-zinc-800 w-1/4 rounded-xl ml-4 p-6">
          <p className="font-bold mb-2">Users</p>
          {users.map((user) => (
            <div className="flex flex-row items-center py-2">
              <img src={user.photo} alt={user.name} className="h-8 w-8 object-cover rounded-full mr-2"/>
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeModule;
