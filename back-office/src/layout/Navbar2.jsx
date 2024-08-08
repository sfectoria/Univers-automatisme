import React, { useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar2() {
  const location = useLocation();
  const [value, setValue] = React.useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/qui-sommes-nous/valeurs':
        setValue('/valeurs');
        break;
      case '/qui-sommes-nous/equipe':
        setValue('/equipe');
        break;
      case '/qui-sommes-nous/mission':
        setValue('/mission');
        break;
        case '/qui-sommes-nous/AproposDeNous':
        setValue('/AproposDeNous');
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
        <Tab value="/valeurs" component={Link} to="/qui-sommes-nous/valeurs" label="Valeurs" />
        <Tab value="/equipe" component={Link} to="/qui-sommes-nous/equipe" label="Equipe" />
        <Tab value="/mission" component={Link} to="/qui-sommes-nous/mission" label="Mission & Vision" />
        <Tab value="/AproposDeNous" component={Link} to="/qui-sommes-nous/AproposDeNous" label="A Propos De Nous" />

      </Tabs>
    </Box>
  );
}
