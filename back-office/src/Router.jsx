import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import SignUp from "./Pages/SignUp";
import App from "./App";

function Router() {
  const [user, setUser] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path="/" element={<App user={user} open={open}/>}>
              <Route index element={<Secteur open={open} />} />
              <Route path="famille" element={<Famille />} />
              <Route path="partenaires" element={<Partenaires />} />
              <Route path="services" element={<Services />} />
              <Route path="avis" element={<Avis />} />
              <Route path="presentation" element={<Presentation />} />
              <Route path="equipe" element={<Equipe />} />
              <Route path="mission" element={<Mission />} />
              <Route path="contact" element={<Contact />} />

            </Route>
          ) : (
            <>
              <Route path="/" element={<LogIn />} />
              <Route path="signUp" element={<SignUp />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
