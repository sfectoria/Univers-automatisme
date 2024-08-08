import React, { useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar1() {
  const location = useLocation();
  const [value, setValue] = React.useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue('/');
        break;
      case '/Accueil/famille':
        setValue('/famille');
        break;
      case '/Accueil/partenaires':
        setValue('/partenaires');
        break;
      case '/Accueil/services':
        setValue('/services');
        break;
      case '/Accueil/avis':
        setValue('/avis');
        break;
      default:
        setValue('/');
        break;
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "30px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="primary"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#cbd95f',
          },
          '& .MuiTab-root.Mui-selected': {
            color: '#cbd95f',
          },
        }}
        aria-label="secondary tabs example"
      >
        <Tab value="/" component={Link} to="/Accueil" label="Secteur d'activité" />
        <Tab value="/famille" component={Link} to="/Accueil/famille" label="Famille de Produits" />
        <Tab value="/partenaires" component={Link} to="/Accueil/partenaires" label="Les Partenaires" />
        <Tab value="/services" component={Link} to="/Accueil/services" label="Services" />
        <Tab value="/avis" component={Link} to="/Accueil/avis" label="Avis des clients" />
      </Tabs>
    </Box>
  );
}
