import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ListItemText } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../assets/logo.png";
import Avatar from "@mui/material/Avatar";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkIcon from "@mui/icons-material/Work";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const getIcon = (text, index) => {
  const icons = [<HomeIcon />, <InfoIcon />, <MailIcon />];
  return icons[index % icons.length];
};

export default function MiniDrawer() {
  const handleAccordionChange = (accordion) => (event, isExpanded) => {
    setAccordionState({ ...accordionState, [accordion]: isExpanded });
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [accordionState, setAccordionState] = React.useState({
    acc1: false,
    acc2: false,
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setAccordionState({ acc1: false, acc2: false });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#B8D941" }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>

          <Typography variant="h6" noWrap component="div" color={"white"}>
            Univers Automatisme
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <AccountCircle
                style={{
                  fontSize: "2.6rem",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                }} // Ajustez la taille ici selon vos besoins
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open && (
            <Avatar
              alt="Logo"
              src={logo} // Remplacez par l'URL de votre logo
              sx={{
                width: 80,
                height: 40,
                marginRight: "auto",
                marginLeft: 2,
              }}
            />
          )}

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {['Accueil', 'Qui Sommes Nous', 'Contactez Nous'].map((text, index) => (
            text === 'Accueil' ? (
              open ? ( */}
          <Accordion
            expanded={accordionState.acc1}
            onChange={handleAccordionChange("acc1")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <AccordionSummary
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                },
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              {open && <Typography>Accueil</Typography>}
            </AccordionSummary>

            {/* {open && (
              <> */}
            <Link to="/">
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center", // Aligner verticalement le contenu
                }}
              >
                <BusinessOutlinedIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography variant="body1" sx={{}}>
                  Secteur d'activité
                </Typography>
              </AccordionDetails>
            </Link>

            <Link to="/famille">
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center", // Aligner verticalement le contenu
                }}
              >
                <CategoryIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography variant="body1" sx={{}}>
                  Famille de produits
                </Typography>
              </AccordionDetails>
            </Link>

            <Link to="/partenaires">
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center", // Aligner verticalement le contenu
                }}
              >
                <HandshakeIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography variant="body1" sx={{}}>
                  Les partenaires
                </Typography>
              </AccordionDetails>
            </Link>

            <Link to="/services">
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center", // Aligner verticalement le contenu
                }}
              >
                <WorkIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography variant="body1" sx={{}}>
                  Services
                </Typography>
              </AccordionDetails>
            </Link>

            <Link to="/avis">
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center", // Aligner verticalement le contenu
                }}
              >
                <FeedbackIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography variant="body1" sx={{}}>
                  Avis des clients
                </Typography>
              </AccordionDetails>
            </Link>
            {/* </>
            )} */}
          </Accordion>

          <Accordion
            expanded={accordionState.acc2}
            onChange={handleAccordionChange("acc2")}
            key="Qui Sommes Nous"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <AccordionSummary
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                },
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InfoIcon />
              </ListItemIcon>
              {open && <Typography>Qui sommes-nous</Typography>}
            </AccordionSummary>
            {/* {open && (
              <> */}
            <Link to="/presentation">
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center", // Aligner verticalement le contenu
                }}
              >
                <SlideshowIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography variant="body1" sx={{}}>
                  Présentation
                </Typography>
              </AccordionDetails>
            </Link>

            <Link to="/equipe">
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center", // Aligner verticalement le contenu
                }}
              >
                <PeopleOutlineIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography variant="body1" sx={{}}>
                  Equipe
                </Typography>
              </AccordionDetails>
            </Link>

            <Link to="/mission">
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center", // Aligner verticalement le contenu
                }}
              >
                <SportsScoreIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography variant="body1" sx={{}}>
                  Notre mission
                </Typography>
              </AccordionDetails>
            </Link>
            {/* </>
            )} */}
          </Accordion>

          <Link to="/contact">
            <ListItem
              key="Contactez Nous"
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Contactez Nous"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
