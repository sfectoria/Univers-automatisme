import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../assets/logo.png";
import InfoIcon from "@mui/icons-material/Info";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const drawerWidth = 240;

export default function DrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Avatar
            alt="Logo"
            src={logo} // Remplacez par l'URL de votre logo
            sx={{
              width: 100,
              height: 50,
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
        </Toolbar>
        <Divider />

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <HomeIcon /> Accueil
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography
              sx={{
                px: 3.5,
              }}
            >
              Secteur d'activité
            </Typography>
          </AccordionDetails>

          <AccordionDetails>
            <Typography  sx={{
                px: 3.5,
              }}>Les partenaires</Typography>
          </AccordionDetails>

          <AccordionDetails>
            <Typography  sx={{
                px: 3.5,
              }}>Famille de produits</Typography>
          </AccordionDetails>

          <AccordionDetails>
            <Typography  sx={{
                px: 3.5,
              }}>Services</Typography>
          </AccordionDetails>

          <AccordionDetails>
            <Typography  sx={{
                px: 3.5,
              }}>Avis des clients</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <InfoIcon /> Qui sommes nous
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography  sx={{
                px: 3.5,
              }}>Equipe</Typography>
          </AccordionDetails>
        </Accordion>

        <ListItem key="Contactez Nous" disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
              }}
            >
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contactez Nous" />
          </ListItemButton>
        </ListItem>
      </Drawer>
    </Box>
  );
}
