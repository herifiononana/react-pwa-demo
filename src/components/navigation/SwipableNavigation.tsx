import React, { useState } from "react";
import {
  Avatar,
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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Inventory2Icon from "@mui/icons-material/Inventory2"; //product
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import ROUTE from "../../routes/route";
import UserOption from "../userOption";

interface MenuItem {
  label: string;
  link: string;
  icon: React.ReactNode;
}

type page = "Products" | "POS" | "Orders" | "Customers";

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
    link: ROUTE.CLIENTS,
    icon: <GroupsIcon sx={{ color: "white" }} />,
  },
];

function SwipableNavigation() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<page>("Products");
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
          <ListItem
            key={label}
            disablePadding
            onClick={() => {
              setCurrentPage(label as page);
              navigate(link);
            }}
          >
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
    <Container
      sx={{ width: "100%", backgroundColor: "primary.main", position: "fixed" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon color="secondary" />
        </IconButton>
        <Typography sx={{ whiteSpace: "nowrap", color: "#fff" }}>
          {currentPage}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
          <UserOption />
        </Box>
      </Box>
      <Container>
        <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Container>
    </Container>
  );
}

export default SwipableNavigation;
