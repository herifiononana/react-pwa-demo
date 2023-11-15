import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";

// todo: improve code
interface NavbarProps {
  switchToHome: () => void;
  switchToMemo: () => void;
  switchToMore: () => void;
  switchToSAV: () => void;
  switchToCatalog: () => void;
}

function Navbar({
  switchToHome,
  switchToMemo,
  switchToMore,
  switchToSAV,
  switchToCatalog,
}: NavbarProps) {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto",
      }}
    >
      <BottomNavigationAction
        label="Client"
        icon={<GroupOutlinedIcon />}
        onClick={switchToHome}
      />
      <BottomNavigationAction
        label="Commande"
        icon={<InsertDriveFileOutlinedIcon />}
        onClick={switchToMemo}
        sx={{ fontSize: ".4rem" }}
      />
      <BottomNavigationAction
        label="S.A.V"
        icon={<ContentPasteOutlinedIcon />}
        onClick={switchToSAV}
      />
      <BottomNavigationAction
        label="CATALOGUE"
        icon={<VoicemailIcon />}
        onClick={switchToCatalog}
      />
      <BottomNavigationAction
        label="Plus"
        icon={<MoreHorizOutlinedIcon />}
        onClick={switchToMore}
      />
    </BottomNavigation>
  );
}

export default Navbar;
