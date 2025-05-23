import React, { useState } from 'react';
import { Button, IconButton, Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShippingLogo from '../assests/Shipping_logo.png';
import { menuItems } from '../utilities/helpers';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const handleSubmenuToggle = (label) =>
    setOpenSubmenu(openSubmenu === label ? null : label);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-1 md:px-8 border-b border-gray-200">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center space-x-1 ml-4">
          <span className="text-3xl font-bold font-robotocon">Cargo</span>
          <img src={ShippingLogo} alt="ShippingLogo" className='h-[70px]' />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IconButton onClick={toggleMobileMenu}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center flex-wrap space-x-4 md:space-x-6 text-sm font-semibold text-gray-800">
        <div className="bg-yellow-500 w-1 h-5 mr-2" />
        {menuItems.map((item) => (
          <div key={item.label} className="relative group cursor-pointer">
            <span className="hover:text-yellow-400">{item.label}</span>
            {item.submenu && <span className="ml-1 text-xs">&#x25BE;</span>}
            {item.submenu && (
              <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded hidden group-hover:block z-10 min-w-[120px]">
                {item.submenu.map((sub) => (
                  <a
                    key={sub}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <Button variant="contained" sx={{
          backgroundColor: '#EAB308',
          color: 'white',
          borderRadius: 0,
          fontWeight: 'bold',
          textTransform: 'none',
          px: 3, py: 1, fontSize: '12px'
        }}>
          GET A QUOTE
        </Button>
        <Button variant="contained" sx={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 0,
          fontWeight: 'bold',
          textTransform: 'none',
          px: 3, py: 1, fontSize: '12px'
        }}>
          SIGN IN
        </Button>
      </nav>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileMenu}>
        <div className="w-64 p-4 space-y-2">
          <List>
            {menuItems.map((item) => (
              <div key={item.label}>
                <ListItem button onClick={() => item.submenu ? handleSubmenuToggle(item.label) : toggleMobileMenu()}>
                  <ListItemText primary={item.label} />
                  {item.submenu && (
                    openSubmenu === item.label ? <ExpandLess /> : <ExpandMore />
                  )}
                </ListItem>
                {item.submenu && (
                  <Collapse in={openSubmenu === item.label} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.submenu.map((sub) => (
                        <ListItem
                          key={sub}
                          button
                          sx={{ pl: 4 }}
                          onClick={toggleMobileMenu}
                        >
                          <ListItemText primary={sub} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2 px-2">
              <Button variant="contained" sx={{ backgroundColor: '#fac849', color: 'white', borderRadius: 0 }}>
                GET A QUOTE
              </Button>
              <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', borderRadius: 0 }}>
                SIGN IN
              </Button>
            </div>
          </List>
        </div>
      </Drawer>
    </header>
  );
};
export default Header;