import React, { useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar2() {
  const location = useLocation();
  const [value, setValue] = React.useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/presentation':
        setValue('/presentation');
        break;
      case '/equipe':
        setValue('/equipe');
        break;
      case '/mission':
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
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "-10px", marginBottom: "10px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="/presentation" component={Link} to="/presentation" label="Presentation" />
        <Tab value="/equipe" component={Link} to="/equipe" label="Equipe" />
        <Tab value="/mission" component={Link} to="/mission" label="Notre Mission" />
      </Tabs>
    </Box>
  );
}
