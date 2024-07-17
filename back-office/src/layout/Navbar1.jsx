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
      case '/famille':
        setValue('/famille');
        break;
      case '/partenaires':
        setValue('/partenaires');
        break;
      case '/services':
        setValue('/services');
        break;
      case '/avis':
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
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "-10px", marginBottom: "10px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="primary"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'green',
          },
          '& .MuiTab-root.Mui-selected': {
            color: 'green',
          },
        }}
        aria-label="secondary tabs example"
      >
        <Tab value="/" component={Link} to="/" label="Secteur d'activité" />
        <Tab value="/famille" component={Link} to="/famille" label="Famille de Produits" />
        <Tab value="/partenaires" component={Link} to="/partenaires" label="Les Partenaires" />
        <Tab value="/services" component={Link} to="/services" label="Services" />
        <Tab value="/avis" component={Link} to="/avis" label="Avis des clients" />
      </Tabs>
    </Box>
  );
}
