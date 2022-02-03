import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { getAuth } from "firebase/auth";
import {FiX} from "react-icons/fi"

function HomeModule() {
  const [users, setUsers] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);

  //Get all users
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

  //Get users bookmarked drinks
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser.uid
    console.log(user)
    const bookmarkRef = collection(db, `/users/${user}/bookmarked`);
    getDocs(bookmarkRef).then((snapshot) => {
      let bookmarkArr = [];
      snapshot.docs.forEach((doc) => {
        bookmarkArr.push({ ...doc.data(), id: doc.id });
      });
      setBookmarked(bookmarkArr);
      console.log(bookmarkArr)
    });
  }, []);

  const userPhoto = auth.currentUser.photoURL

  return (
    <div className="p-16 text-white box-border">
      <div className="flex flex-row items-center mb-8">
        <img
          src={userPhoto}
          alt="userphoto"
          className="rounded-full mr-8"
        />
        <h1 className="text-white text-6xl font-bold">
          {auth.currentUser.displayName}
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="w-3/4">
          <div className="bg-zinc-800 rounded-xl h-96 p-6 overflow-scroll">
            <p className="font-bold mb-4">Bookmarked</p>
            {bookmarked.map((drink) => (
              <div className="flex flex-row items-center p-2 border border-1 rounded-lg border-zinc-600 mb-2 justify-between">
                <div className="flex flex-row items-center">
                  <img
                    src={drink.image}
                    alt=""
                    className="h-12 rounded-lg mr-2"
                  />
                  <h1>{drink.name}</h1>
                </div>
                <h1 className="text-xs text-zinc-500">{drink.category}</h1>
                <h1 className="text-xs text-zinc-500">{drink.glass}</h1>
                <h1 className="text-xs text-zinc-500">{drink.alcoholic}</h1>
                <h1><FiX className="mr-2 text-red-600 hover:cursor-pointer"/></h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-800 w-1/4 rounded-xl ml-4 p-6">
          <p className="font-bold mb-2">Users</p>
          {users.map((user) => (
            <div className="flex flex-row items-center py-2">
              <img
                src={user.photo}
                alt=""
                className="h-8 w-8 object-cover rounded-full mr-2"
              />
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeModule;
