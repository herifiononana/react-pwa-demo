import React, { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Inventory2Icon from "@mui/icons-material/Inventory2"; //product
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import ROUTE from "../../routes/route";

interface MenuItem {
  label: string;
  link: string;
  icon: React.ReactNode;
}

// todo: specify route
const MENU: MenuItem[] = [
  {
    label: "POS",
    link: ROUTE.HOME,
    icon: <HomeIcon sx={{ color: "white" }} />,
  },
  {
    label: "Products",
    link: ROUTE.PRODUCTS,
    icon: <Inventory2Icon sx={{ color: "white" }} />,
  },
  {
    label: "Orders",
    link: "/",
    icon: <ListAltIcon sx={{ color: "white" }} />,
  },
  {
    label: "Customers",
    link: "/",
    icon: <GroupsIcon sx={{ color: "white" }} />,
  },
];

function SwipableNavigation() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  const list = () => (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        backgroundColor: "primary.main",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ color: "white" }}>
        {MENU.map(({ label, link, icon }, index) => (
          <ListItem key={label} disablePadding onClick={() => navigate(link)}>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <Box
      sx={{ width: "100%", backgroundColor: "primary.main", position: "fixed" }}
    >
      <Container>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon color="secondary" />
        </IconButton>
      </Container>
      <Container>
        <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Container>
    </Box>
  );
}

export default SwipableNavigation;
