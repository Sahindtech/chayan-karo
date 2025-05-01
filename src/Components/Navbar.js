import React, { useState } from "react";
import FinalLogo from "../Assets/final-logo-2.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", id: "home", icon: <HomeIcon /> },
    { text: "About", id: "about", icon: <InfoIcon /> },
    { text: "Service", id: "service", icon: <MiscellaneousServicesIcon /> },
    { text: "Work", id: "work", icon: <WorkOutlineIcon /> },
    { text: "Contact", id: "contacts", icon: <PhoneRoundedIcon /> },
  ];

  const redirectToPage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={FinalLogo} alt="Chayan Karo Logo" className="nav-logo" />
      </div>

      {/* DESKTOP NAVBAR */}
      <div className="navbar-links-container">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
        <a href="#work" onClick={(e) => handleNavClick(e, 'work')}>Work</a>
        <a href="#contacts" onClick={(e) => handleNavClick(e, 'contacts')}>Contact</a>
        <button className="primary-button" onClick={() => redirectToPage("https://linktr.ee/Chayankaro")}>
          Book Now
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={(e) => handleNavClick(e, item.id)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
