import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name, age: Number(age) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);

    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Age..."
        onChange={(event) => setAge(event.target.value)}
      />

      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={() => updateUser(user.id, user.age)}>
              Increase age
            </button>
          </>
        );
      })}
    </div>
  );
}

export default App;
