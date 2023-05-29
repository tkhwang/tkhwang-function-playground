# CRUD Tutorial Using React + Firebase | Firebase 9 and Firestore Tutorial

[CRUD Tutorial Using React + Firebase | Firebase 9 and Firestore Tutorial](https://www.youtube.com/watch?v=jCY6DH8F4oc)

## Config

```javascript
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

## Reference

```javascript
const usersCollectionRef = collection(db, "users");
```

## Read

```javascript
const data = await getDocs(usersCollectionRef);
```

## Write

```javascript
await addDoc(usersCollectionRef, { name, age });
```
