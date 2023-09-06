import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewsDetailContainer from "./components/NewsDetailContainer";
import NewsListContainer from "./components/NewsListContainer";
import FavsProvider from "./context/favsContext";
import { firestore } from "./firebase/client";

export const ThemeContext = createContext();

// console.log({ ThemeContext });

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
     const q = query(
       collection(firestore, "items"),
       where("price", ">", 50),
       orderBy("price", "desc"),
     );
     getDocs(q).then((snapshot) => {
       console.log(snapshot);
       snapshot.forEach((doc) => console.log(doc.data()));
     });
    //  const collectionRef = collection(firestore, "items");
    // getDocs(collectionRef)
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     snapshot.forEach((doc) => console.log(doc.data()));
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => {}); 

    //  const docRef = doc(firestore, "items", "qoSKokAO1prZCJjUvzhg");
    // getDoc(docRef).then((snapshot) => {
    //   console.log({ snapshot });
    //   if (snapshot.exists()) {
    //     console.log("La informacion del documento es: ", snapshot.data());
    //   } else {
    //     console.log("El documento no existe");
    //   }
    // }); 
  }, []);

  return (
    // <FavsContext.Provider value={[]}>
    <FavsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Button onClick={() => setIsDarkMode(!isDarkMode)}>
                  Dark/light mode
                </Button>
                <NewsListContainer />
              </>
            }
          />
          <Route
            path="/category/:id"
            element={
              <>
                <NavBar />
                <NewsListContainer />
              </>
            }
          />
          <Route
            path="/news/:id"
            element={
              <>
                <NavBar />
                <NewsDetailContainer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </FavsProvider>
    // </FavsContext.Provider>
  );
}

export default App;
