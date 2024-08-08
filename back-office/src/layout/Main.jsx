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
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import {
  Link,
  Outlet,
  useLocation,
  useHistory,
  unstable_HistoryRouter,
  useNavigate,
} from "react-router-dom";
import { useEffect, useRef } from "react";
import Badge from "@mui/material/Badge";
import profile from "../assets/profile.jpg";
import { Toast } from "primereact/toast";
import { PanelMenu } from "primereact/panelmenu";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { FiBell } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";


const drawerWidth = 240;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

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
  width: `calc(${theme.spacing(7)} + 10px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 6px)`,
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

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const getIcon = (text, index) => {
  const icons = [<HomeIcon />, <InfoIcon />, <MailIcon />];
  return icons[index % icons.length];
};

export default function Sidebar({ user }) {
  const toast = useRef(null);

  const handleLogout = () => {
    navigate('/');
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
    toast.current.show({
      severity: "info",
      summary: "Signed out",
      detail: "User logged out",
      life: 6000,
    });

    // No need to navigate with <a>, use Link for internal routing
  };

  const items = [
    {
      label: "Sign Out",
      icon: "pi pi-sign-out",
      command: handleLogout,
    },
  ];
  const location = useLocation();
  const [activePath, setActivePath] = React.useState(location.pathname);

  React.useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const activeStyle = {
    color: "white",
    // textDecoration: "underline",
    backgroundColor: "#b8d941",
    borderRadius: "8px",
  };

  const handleAccordionChange = (accordion) => (event, isExpanded) => {
    const newAccordionState = { ...accordionState, [accordion]: isExpanded };
    setAccordionState(newAccordionState);
    localStorage.setItem("accordionState", JSON.stringify(newAccordionState));
  };

  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(
    JSON.parse(localStorage.getItem("drawerOpen")) || false
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [accordionState, setAccordionState] = React.useState({
    acc1: false,
    acc2: false,
  });

  useEffect(() => {
    const savedAccordionState = JSON.parse(
      localStorage.getItem("accordionState")
    );
    if (savedAccordionState) {
      setAccordionState(savedAccordionState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("drawerOpen", JSON.stringify(open));
  }, [open]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleManageUsersClick = () => {
    handleClose2();
    navigate('/users');
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
       
          {/* <FiBell style={{fontSize:30, marginRight:20, marginTop:5}} /> */}
          {/* <IoMailOutline style={{fontSize:30, marginRight:20, marginTop:1}}/> */}
          <Badge
            badgeContent={4}
            color="primary"
            style={{
              marginRight: 20,
              transform: "scale(1)", // Agrandir le badge
              marginTop: 7,
              // padding: "10px", // Ajouter un rembourrage
            }}
          >
            <MailIcon
              color="white"
              style={{
                fontSize: 30, // Agrandir l'icône
              }}
            />
            
          </Badge>
          <div className="Profile buttonn">
            {/* <IconButton
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
            </IconButton> */}

            <Box display="flex" alignItems="center">
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                onClick={handleMenu}
              >
                <Avatar src={profile} />
              </StyledBadge>

              <Box ml={2}>
                <Box fontWeight="fontWeightBold">{user.username}</Box>
                <Box fontSize="small" color="text.secondary">
                {user.role}
                </Box>
              </Box>
            </Box>

            {/* <Menu
            style={{marginTop:30}}
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
              <MenuItem  onClick={() => { navigate('/profile'); handleClose(); }}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
              <Toast ref={toast} />
            </Menu> */}
            <Menu
              anchorEl={anchorE2}
              id="account-menu"
              open={open2}
              onClose={handleClose2}
              onClick={handleClose2}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose2}>
              <Avatar src={profile} />
              Profile
              </MenuItem>
              {(user.role === 'SuperAdmin' || user.role === 'Admin') &&

              <MenuItem style={{color:"green"}}onClick={handleManageUsersClick}>
                <Avatar style={{color:"green"}} /> Manage Users
              </MenuItem>
              }
              <Divider />

              <MenuItem  style={{color:"blue"}}onClick={handleClose2}>
                <ListItemIcon>
                  <Settings style={{color:"blue"}}fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem style={{color:"red"}} onClick={handleLogout}>
                <ListItemIcon style={{color:"red"}}  >
                  <Logout  fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
          <Toast ref={toast} />
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
              // sx={{
              //   "&:hover": {
              //     backgroundColor: "rgba(0, 0, 0, 0.08)",
              //     boxShadow: "20px 4px 10px rgba(0, 0, 0, 0.1)",
              //   },
              // }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={
                !accordionState.acc1 &&
                (activePath === "/Accueil/" ||
                  activePath === "/Accueil/services" ||
                  activePath === "/Accueil/avis" ||
                  activePath === "/Accueil/partenaires" ||
                  activePath === "/Accueil/famille")
                  ? activeStyle
                  : {}
              }
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "start",
                }}
              >
                <HomeIcon style={{ width: 27, height: 27, color: "black" }} />
                {/* <Player sx={{marginTop: -40}}
                  ref={playerRef} 
                  icon={ ICON }
                /> */}
              </ListItemIcon>
              {open && <Typography style={{ width: 131 }}>Accueil</Typography>}
            </AccordionSummary>

            {/* {open && (
              <> */}
            <Link
              to="/Accueil"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={activePath === "/Accueil" ? activeStyle : {}}
              >
                <BusinessOutlinedIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 300, fontSize: 15 }}
                >
                  Projets
                </Typography>
              </AccordionDetails>
            </Link>

            <Link
              to="/Accueil/famille"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "10px 0px 0px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={activePath === "/Accueil/famille" ? activeStyle : {}}
              >
                <CategoryOutlinedIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 300, fontSize: 15 }}
                >
                  Famille de produits
                </Typography>
              </AccordionDetails>
            </Link>

            <Link
              to="/Accueil/partenaires"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={activePath === "/Accueil/partenaires" ? activeStyle : {}}
              >
                <HandshakeOutlinedIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 300, fontSize: 15 }}
                >
                  Les partenaires
                </Typography>
              </AccordionDetails>
            </Link>

            <Link
              to="/Accueil/services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={activePath === "/Accueil/services" ? activeStyle : {}}
              >
                <WorkOutlineOutlinedIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 300, fontSize: 15 }}
                >
                  Services
                </Typography>
              </AccordionDetails>
            </Link>

            <Link
              to="/Accueil/avis"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={activePath === "/Accueil/avis" ? activeStyle : {}}
              >
                <FeedbackOutlinedIcon sx={{ marginRight: 1 }} />{" "}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 300, fontSize: 15 }}
                >
                  Avis des clients
                </Typography>
              </AccordionDetails>
            </Link>
            <Link
              to="/Accueil/avis"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={activePath === "/Accueil/avis" ? activeStyle : {}}
              >
                <FeedbackOutlinedIcon sx={{ marginRight: 1 }} />{" "}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 300, fontSize: 15 }}
                >
                  Hero
                </Typography>
              </AccordionDetails>
            </Link>

            <Link
              to="/Accueil/avis"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={activePath === "/Accueil/avis" ? activeStyle : {}}
              >
                <FeedbackOutlinedIcon sx={{ marginRight: 1 }} />{" "}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 300, fontSize: 15 }}
                >
                  A propos de nous
                </Typography>
              </AccordionDetails>
            </Link>
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
              // sx={
              //   {
              //     "&:hover": {
              //       backgroundColor: "rgba(0, 0, 0, 0.08)",
              //       boxShadow: "20px  rgba(0, 0, 0, 0.1)",
              //     },
              //   }
              // }
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={
                !accordionState.acc2 &&
                (activePath === "/qui-sommes-nous/presentation" ||
                  activePath === "/qui-sommes-nous/equipe" ||
                  activePath === "/qui-sommes-nous/mission")
                  ? activeStyle
                  : {}
              }
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InfoIcon style={{ color: "black" }} />
                {/* <Player sx={{}}
                  ref={playerRef} 
                  icon={ INFO }
                /> */}
              </ListItemIcon>
              {open && <Typography sx={{}}>Qui sommes-nous</Typography>}
            </AccordionSummary>
            {/* {open && (
              <> */}
            <Link
              to="/qui-sommes-nous/presentation"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={
                  activePath === "/qui-sommes-nous/presentation"
                    ? activeStyle
                    : {}
                }
              >
                <SlideshowIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 100, fontSize: 15 }}
                >
                  Présentation
                </Typography>
              </AccordionDetails>
            </Link>

            <Link
              to="/qui-sommes-nous/equipe"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={
                  activePath === "/qui-sommes-nous/equipe" ? activeStyle : {}
                }
              >
                <PeopleOutlineIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 100, fontSize: 15 }}
                >
                  Equipe
                </Typography>
              </AccordionDetails>
            </Link>

            <Link
              to="/qui-sommes-nous/mission"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AccordionDetails
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5, // Aligner verticalement le contenu
                }}
                style={
                  activePath === "/qui-sommes-nous/mission" ? activeStyle : {}
                }
              >
                <SportsScoreIcon sx={{ marginRight: 1 }} />{" "}
                {/* Ajoutez un margin-right à l'icône pour l'espace */}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 100, fontSize: 15 }}
                >
                  Notre mission
                </Typography>
              </AccordionDetails>
            </Link>
            {/* </>
            )} */}
          </Accordion>

          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
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
                  "&:active": {
                    boxShadow: "none",
                  },
                }}
                style={activePath === "/contact" ? activeStyle : {}}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MailIcon style={{ color: "black" }} />
                  {/* <Player sx={{width: "500px",}}
                  ref={playerRef} 
                  icon={ MSG }
                /> */}
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

      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
