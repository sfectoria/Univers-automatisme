import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Secteur from "./Pages/Secteur";
import Famille from "./Pages/Famille";
import Partenaires from "./Pages/Partenaires";
import Services from "./Pages/Services";
import Avis from "./Pages/Avis";
import Presentation from "./Pages/Presentation";
import Equipe from "./Pages/Equipe";
import Mission from "./Pages/Mission";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/LogIn";
import App from "./App";
import ProfilePage from "./Pages/Profile";
import QuiSommesNous from "./Pages/Qui";
import axios from "axios";
import AccueilPage from "./Pages/AccueilPage";
import { getMe } from "./store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import FullFeaturedCrudGrid from "./Pages/EditUser";

function Router() {
  // const [user, setUser] = React.useState(null);
  // const [open, setOpen] = React.useState(false);

  // const [token, setToken] = React.useState(JSON.parse(localStorage.getItem("token")));
  // useEffect(() => {
  //   const validateToken = async () => {
  //     if (localStorage.getItem("token")) {
  //       try {
  //         const response = await axios.get("http://localhost:4000/auth/getme", {
  //           headers: { Authorization: `Bearer ${token}` },
  //         });

  //         if (!response.error) {
  //           setUser(response.data);
  //         }
  //       } catch (error) {
  //         console.error("Token validation failed:", error);
          
  //       }
  //       console.log("user",user);
  //     }
  //   };

  //   validateToken(); // Valider le token au chargement
  // }, []);

  const user = useSelector((store) => store.auth.me);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token)
      dispatch(getMe()).then((res) => {
        setIsLoading(false);
      });
    else {
      setIsLoading(false);
    }
  }, [dispatch]);

  console.log(user,"this is token");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {user ? (
            <>
              <Route
                path="/"
                element={<App user={user} />}
              >
                <Route index element={<Secteur  />} />
                <Route path="Accueil" element={<AccueilPage />}>
                  <Route index element={<Secteur />} />
                  <Route path="famille" element={<Famille />} />
                  <Route path="partenaires" element={<Partenaires />} />
                  <Route path="services" element={<Services />} />
                  <Route path="avis" element={<Avis />} />
                </Route>
              </Route>

              <Route
                path="qui-sommes-nous"
                element={<App user={user} open={open} />}
              >
                <Route index element={<QuiSommesNous />} />
                <Route path="presentation" element={<Presentation />} />
                <Route path="equipe" element={<Equipe />} />
                <Route path="mission" element={<Mission />} />
              </Route>

              {/* <Route path="/" element={<Navigate to="/Accueil" />} /> */}

              <Route path="contact" element={<App user={user} open={open} />}>
                <Route index element={<Contact />} />
              </Route>

              <Route path="profile" element={<App user={user} open={open} />}>
                <Route index element={<ProfilePage />} />
              </Route>
              <Route path="users" element={<App user={user} />}>
                <Route index element={<FullFeaturedCrudGrid/>} />
              </Route>

              {/* <Route path="*" element={<Navigate to="/Accueil" />} /> */}
            </>
          ) : (
            <Route index element={<LogIn />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
