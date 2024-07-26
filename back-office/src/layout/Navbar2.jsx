import React, { useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar2() {
  const location = useLocation();
  const [value, setValue] = React.useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/qui-sommes-nous/presentation':
        setValue('/presentation');
        break;
      case '/qui-sommes-nous/equipe':
        setValue('/equipe');
        break;
      case '/qui-sommes-nous/mission':
        setValue('/mission');
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
        <Tab value="/presentation" component={Link} to="/qui-sommes-nous/presentation" label="Presentation" />
        <Tab value="/equipe" component={Link} to="/qui-sommes-nous/equipe" label="Equipe" />
        <Tab value="/mission" component={Link} to="/qui-sommes-nous/mission" label="Notre Mission" />
      </Tabs>
    </Box>
  );
}
