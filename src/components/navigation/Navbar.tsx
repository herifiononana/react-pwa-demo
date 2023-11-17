import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import HomeIcon from "@mui/icons-material/Home";
import styled from "@emotion/styled";
import ArchiveIcon from "@mui/icons-material/Archive";

const BottomNavigationItem = styled(BottomNavigationAction)({
  "& .MuiBottomNavigationAction-label": {
    fontSize: "0.6rem",
  },
  "& .Mui-selected": {
    fontSize: ".65rem",
  },
  minWidth: 0,
});

// todo: improve code
interface NavbarProps {
  switchToClient: () => void;
  switchToHome: () => void;
  switchToCommand: () => void;
  switchToSAV: () => void;
  switchToCatalog: () => void;
}
interface MenuItem {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

function Navbar({
  switchToHome,
  switchToClient,
  switchToCommand,
  switchToSAV,
  switchToCatalog,
}: NavbarProps) {
  const [value, setValue] = useState(2);
  const MENU_ITEM: MenuItem[] = [
    {
      label: "CLIENT",
      icon: <GroupOutlinedIcon sx={{ fontSize: "1.2rem" }} />,
      onClick: () => switchToClient(),
    },
    {
      label: "COMMANDE",
      icon: <InsertDriveFileOutlinedIcon sx={{ fontSize: "1.2rem" }} />,
      onClick: () => switchToCommand(),
    },
    {
      label: "ACCUEIL",
      icon: <HomeIcon sx={{ fontSize: "1.2rem" }} />,
      onClick: () => switchToHome(),
    },
    {
      label: "CATALOGUE",
      icon: <ArchiveIcon sx={{ fontSize: "1.2rem" }} />,
      onClick: () => switchToCatalog(),
    },
    {
      label: "S.A.V",
      icon: <ContentPasteOutlinedIcon sx={{ fontSize: "1.2rem" }} />,
      onClick: () => switchToSAV(),
    },
  ];
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        width: "100%",
        height: "7%",
        display: "flex",
        justifyItems: "center",
      }}
    >
      {MENU_ITEM.map(({ label, icon, onClick }, index) => (
        <BottomNavigationItem key={index} {...{ label, icon, onClick }} />
      ))}
    </BottomNavigation>
  );
}

export default Navbar;
